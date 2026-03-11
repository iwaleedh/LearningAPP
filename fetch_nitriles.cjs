const https = require('https');

function get(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        const text = data.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ');
        resolve(text.substring(0, 1500));
      });
    });
  });
}

(async () => {
  const urls = [
    'https://www.chemguide.co.uk/organicprops/nitriles/background.html',
    'https://www.chemguide.co.uk/organicprops/nitriles/preparation.html',
    'https://www.chemguide.co.uk/organicprops/nitriles/hydrolysis.html',
    'https://www.chemguide.co.uk/organicprops/nitriles/reduction.html'
  ];
  for (const u of urls) {
    console.log("---", u);
    console.log(await get(u));
  }
})();
