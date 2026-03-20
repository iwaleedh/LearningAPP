#!/usr/bin/env python3
"""
audit_slides.py
───────────────
Scans all seed note JS files and reports coverage gaps between a note's
blocks[] content and its custom presentationSlides[] (bento/custom decks).

Usage:
    python3 scripts/audit_slides.py
    python3 scripts/audit_slides.py --subject chemistry
    python3 scripts/audit_slides.py --verbose

Output:
    A per-note coverage table listing which important block types are present
    in blocks[] but not visually represented in presentationSlides[].
"""

import os
import re
import sys
import argparse
from pathlib import Path

# ── Configuration ─────────────────────────────────────────────────────────────

SEED_NOTES_DIR = Path(__file__).parent.parent / "src" / "data" / "seedNotes"

# Block types considered "important" - must be covered in every presentation
IMPORTANT_TYPES = {"equation", "comparisonTable", "svg", "checklist", "summary"}
IMPORTANT_CALLOUT_STYLES = {"worked"}

# ── Helpers ───────────────────────────────────────────────────────────────────

def extract_block_types(content: str) -> dict[str, int]:
    """
    Count occurrences of each block type in the blocks[] section.
    Returns e.g. {'equation': 3, 'svg': 2, 'checklist': 1}
    """
    counts = {}
    # Match: type: 'equation'  or  type: "equation"
    for match in re.finditer(r"""type:\s*['"](\w+)['"]""", content):
        t = match.group(1)
        if t in IMPORTANT_TYPES:
            counts[t] = counts.get(t, 0) + 1

    # Check for worked callouts (type: 'callout' + style: 'worked')
    worked_count = len(re.findall(r"""style:\s*['"]worked['"]""", content))
    if worked_count:
        counts["callout(worked)"] = worked_count

    return counts


def has_presentation_slides(content: str) -> bool:
    return bool(re.search(r"presentationSlides\s*:", content))


def has_supplement_disabled(content: str) -> bool:
    return bool(re.search(r"supplementalBlockTypes\s*:\s*false", content))


def extract_presentation_text(content: str) -> str:
    """Extract all text/html values inside presentationSlides for rough coverage check."""
    # Find everything between presentationSlides: [ ... ] and the next top-level },
    match = re.search(r"presentationSlides\s*:\s*\[(.+?)\]\s*,\s*(?:recall|evidence|blocks|supplemental)",
                      content, re.DOTALL)
    if not match:
        return ""
    return match.group(1)


def strip_html(html: str) -> str:
    return re.sub(r"<[^>]+>", " ", html).lower()


def check_coverage(block_type: str, pres_text: str) -> bool:
    """
    Heuristic: returns True if the block type appears to be represented
    in the presentationSlides text.
    """
    type_keywords = {
        "equation": ["equation", "formula", "=", "mol", "×", "÷"],
        "comparisonTable": ["table", "comparison", "headers", "rows"],
        "svg": ["svg", "diagram", "<svg", "diagram"],
        "checklist": ["checklist", "exam", "√", "✓", "know"],
        "summary": ["summary", "key point", "overall", "in summary"],
        "callout(worked)": ["worked", "example", "step", "solution", "calculate"],
    }
    keywords = type_keywords.get(block_type, [])
    plain = strip_html(pres_text)
    return any(kw in plain for kw in keywords)


# ── Main logic ────────────────────────────────────────────────────────────────

def audit_subject(subject_dir: Path, verbose: bool = False) -> list[dict]:
    results = []
    subject = subject_dir.name

    for note_file in sorted(subject_dir.glob("note_*.js")):
        content = note_file.read_text(encoding="utf-8")

        block_types = extract_block_types(content)
        has_custom = has_presentation_slides(content)
        supplement_disabled = has_supplement_disabled(content)

        if not block_types:
            if verbose:
                print(f"  SKIP  {note_file.name} — no important blocks")
            continue

        if not has_custom:
            # Uses auto-generated slides — blocksToSlides() covers everything
            if verbose:
                print(f"  AUTO  {note_file.name} — uses blocksToSlides() (full coverage)")
            continue

        # Has custom presentationSlides — check gaps
        pres_text = extract_presentation_text(content)
        gaps = []

        for bt, count in block_types.items():
            covered = check_coverage(bt, pres_text)
            if not covered:
                gaps.append((bt, count))

        status = "OK" if not gaps else ("WARN (supplement disabled)" if supplement_disabled else "GAP")
        results.append({
            "file": note_file.name,
            "subject": subject,
            "blocks": block_types,
            "gaps": gaps,
            "status": status,
            "supplement_disabled": supplement_disabled,
        })

    return results


def main():
    parser = argparse.ArgumentParser(description="Audit slide coverage for seed notes")
    parser.add_argument("--subject", help="Only audit a specific subject (e.g. chemistry)")
    parser.add_argument("--verbose", action="store_true", help="Show all notes, not just gaps")
    parser.add_argument("--gaps-only", action="store_true", help="Show only notes with gaps")
    args = parser.parse_args()

    if not SEED_NOTES_DIR.exists():
        print(f"ERROR: Seed notes directory not found: {SEED_NOTES_DIR}")
        sys.exit(1)

    subjects = []
    for d in sorted(SEED_NOTES_DIR.iterdir()):
        if d.is_dir() and (not args.subject or d.name == args.subject):
            subjects.append(d)

    if not subjects:
        print(f"No subjects found{' for ' + args.subject if args.subject else ''}.")
        sys.exit(1)

    all_results = []
    for subject_dir in subjects:
        results = audit_subject(subject_dir, verbose=args.verbose)
        all_results.extend(results)

    # Print report
    gap_count = sum(1 for r in all_results if r["gaps"])
    ok_count  = sum(1 for r in all_results if not r["gaps"])
    total     = len(all_results)

    print("\n" + "═" * 70)
    print("  SLIDE COVERAGE AUDIT REPORT")
    print("═" * 70)

    if not all_results:
        print("\n  ✓ All notes use auto-generated slides — full coverage guaranteed.\n")
        return

    # Group by subject
    by_subject: dict[str, list] = {}
    for r in all_results:
        by_subject.setdefault(r["subject"], []).append(r)

    for subject, items in by_subject.items():
        print(f"\n  {subject.upper()}")
        print("  " + "─" * 60)
        for r in items:
            if args.gaps_only and not r["gaps"]:
                continue
            status_icon = "✓" if not r["gaps"] else ("⊘" if r["supplement_disabled"] else "⚠")
            gap_desc = ""
            if r["gaps"]:
                gap_desc = "  →  gaps: " + ", ".join(f"{bt}×{n}" for bt, n in r["gaps"])
            supp_note = "  [supplement DISABLED]" if r["supplement_disabled"] else ""
            print(f"    {status_icon}  {r['file']}{gap_desc}{supp_note}")

    print("\n" + "─" * 70)
    print(f"  Custom presentationSlides notes:  {total}")
    print(f"  With auto-supplement gaps:        {gap_count}  ⚠")
    print(f"  Fully covered:                    {ok_count}  ✓")
    print()

    if gap_count:
        print("  NOTE: Gaps are automatically filled at runtime by slideCoverage.js")
        print("        (equations, diagrams, tables, etc. are appended as supplemental slides).")
        print("        To disable auto-supplement for a note, add:")
        print("            supplementalBlockTypes: false")
        print("        to its seed note export.")
    else:
        print("  ✓ All custom presentation notes have full important-block coverage.")

    print()


if __name__ == "__main__":
    main()
