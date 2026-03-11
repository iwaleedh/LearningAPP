import urllib.request
from bs4 import BeautifulSoup

url = "https://www.chemguide.co.uk/mechanisms/elim/elimvsubst.html"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read()
    soup = BeautifulSoup(html, 'html.parser')
    text = soup.get_text(separator=' ', strip=True)
    with open('chemguide_elimvsubst.txt', 'w') as f:
        f.write(text)
    print("Scraped and saved to chemguide_elimvsubst.txt")
except Exception as e:
    print("Error:", e)
