#!/usr/bin/env python3
"""
Download Cambridge IGCSE O Level past papers from XtremePapers.

Run from the project root:
    pip install requests
    python3 download_past_papers.py

Downloads QP and MS PDFs to:
    public/pastpapers/olevel/{subject}/{year}/{code}_{session}{yy}_{type}_{paper}{variant}.pdf

Skips files already present. Logs to download_past_papers.log.

Source: https://papers.xtremepape.rs/
URL pattern: https://papers.xtremepape.rs/CAIE/IGCSE/{Subject (Code)}/{filename}.pdf
(Files are stored flat — no year subdirectory on the server)
"""

import sys
import logging
from pathlib import Path
from urllib.parse import quote
from concurrent.futures import ThreadPoolExecutor, as_completed

import requests
from requests.adapters import HTTPAdapter

# ── Config ────────────────────────────────────────────────────────────────────

BASE        = 'https://papers.xtremepape.rs/CAIE/IGCSE'
PROJECT_ROOT = Path(__file__).parent
OUT_BASE     = PROJECT_ROOT / 'public' / 'pastpapers' / 'olevel'
MAX_WORKERS  = 4      # concurrent downloads
HTTP_TIMEOUT = 45     # seconds per request

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s %(levelname)s  %(message)s',
    handlers=[
        logging.FileHandler(PROJECT_ROOT / 'download_past_papers.log', encoding='utf-8'),
        logging.StreamHandler(sys.stdout),
    ],
)
log = logging.getLogger(__name__)

# ── Subject definitions ────────────────────────────────────────────────────────
#
# local:    subfolder under public/pastpapers/olevel/
# folder:   folder name on xtremepape.rs (under /CAIE/IGCSE/)
# code:     Cambridge paper code (used in filenames)
# papers:   list of paper numbers that actually exist
#
SUBJECTS = [
    dict(local='chemistry',  folder='Chemistry (0620)',              code='0620', papers=[1, 2, 3, 4, 6]),
    dict(local='physics',    folder='Physics (0625)',                code='0625', papers=[1, 2, 3, 4, 6]),
    dict(local='biology',    folder='Biology (0610)',                code='0610', papers=[1, 2, 3, 6]),
    dict(local='maths',      folder='Mathematics (0580)',            code='0580', papers=[1, 2, 3, 4]),
    dict(local='maths',      folder='Mathematics - Additional (0606)', code='0606', papers=[1, 2]),
    dict(local='business',   folder='Business Studies (0450)',       code='0450', papers=[1, 2]),
    dict(local='accounting', folder='Accounting (0452)',             code='0452', papers=[1, 2]),
    dict(local='economics',  folder='Economics (0455)',              code='0455', papers=[1, 2]),
]

# ── Task generation ────────────────────────────────────────────────────────────

def build_tasks():
    tasks = []
    for subj in SUBJECTS:
        local_dir    = OUT_BASE / subj['local']
        folder_enc   = quote(subj['folder'])   # URL-encode spaces/parens
        code         = subj['code']
        papers       = subj['papers']

        for year in range(2010, 2026):
            yy = str(year)[-2:]

            # s = May/June, w = Oct/Nov → variants 1 & 2
            # m = Feb/March             → variant 2 only (from 2019)
            sessions = [('s', [1, 2]), ('w', [1, 2])]
            if year >= 2019:
                sessions.append(('m', [2]))

            for sess, variants in sessions:
                for paper in papers:
                    for variant in variants:
                        for ftype in ('qp', 'ms'):
                            fname  = f'{code}_{sess}{yy}_{ftype}_{paper}{variant}.pdf'
                            # Server stores files flat (no year subdir)
                            remote = f'{BASE}/{folder_enc}/{fname}'
                            # We save locally organised by year
                            local  = local_dir / str(year) / fname
                            tasks.append((remote, local))
    return tasks

# ── Download worker ────────────────────────────────────────────────────────────

def download_one(http: requests.Session, remote: str, local: Path):
    if local.exists():
        return 'skip', remote

    local.parent.mkdir(parents=True, exist_ok=True)
    tmp = local.with_suffix('.tmp')

    try:
        r = http.get(remote, timeout=HTTP_TIMEOUT, stream=True)

        if r.status_code == 404:
            return '404', remote
        if r.status_code != 200:
            return f'http-{r.status_code}', remote

        # Reject HTML error pages returned as 200
        ct = r.headers.get('content-type', '')
        if 'html' in ct:
            return 'bad-content', remote

        with open(tmp, 'wb') as f:
            for chunk in r.iter_content(chunk_size=65536):
                f.write(chunk)
        tmp.rename(local)
        return 'ok', remote

    except requests.exceptions.Timeout:
        tmp.unlink(missing_ok=True)
        return 'timeout', remote
    except Exception as exc:
        tmp.unlink(missing_ok=True)
        return f'err-{type(exc).__name__}', remote

# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    tasks = build_tasks()
    total = len(tasks)
    log.info(f'Total download tasks: {total}')

    http = requests.Session()
    http.headers.update({
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Referer': 'https://papers.xtremepape.rs/',
        'Accept': 'application/pdf,*/*',
    })
    adapter = HTTPAdapter(pool_connections=MAX_WORKERS, pool_maxsize=MAX_WORKERS * 2)
    http.mount('https://', adapter)

    counts = dict(ok=0, skip=0, not_found=0, error=0)
    done = 0

    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as pool:
        futures = {pool.submit(download_one, http, r, l): r for r, l in tasks}

        for fut in as_completed(futures):
            done += 1
            status, url = fut.result()

            if status == 'ok':
                counts['ok'] += 1
                log.info(f'[{done}/{total}] OK      {url}')
            elif status == 'skip':
                counts['skip'] += 1
                if done % 500 == 0:
                    log.info(f'[{done}/{total}] ...{counts["skip"]} files already present')
            elif status == '404':
                counts['not_found'] += 1
                log.debug(f'[{done}/{total}] 404     {url}')
            else:
                counts['error'] += 1
                log.warning(f'[{done}/{total}] {status:<12} {url}')

    log.info(
        '\n── Summary ──────────────────────────────────\n'
        f'  Downloaded : {counts["ok"]}\n'
        f'  Skipped    : {counts["skip"]}\n'
        f'  Not found  : {counts["not_found"]}\n'
        f'  Errors     : {counts["error"]}\n'
        f'  Total tasks: {total}\n'
        '─────────────────────────────────────────────'
    )

if __name__ == '__main__':
    main()
