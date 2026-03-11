const https = require('https');
const fs = require('fs');

https.get('https://www.chemguide.co.uk/organicprops/carbonyls/background.html', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    // extract main text.
    let text = data.replace(/<[^>]*>?/gm, ' ');
    // collapse multiple spaces and newlines a bit
    text = text.replace(/ {2,}/g, ' ').replace(/\n{2,}/g, '\n');
    fs.writeFileSync('chemguide_carbonyl_bg.txt', text);
    console.log('Done scraping.');
  });
}).on('error', (err) => {
  console.error(err);
});
