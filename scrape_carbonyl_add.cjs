const https = require('https');
const fs = require('fs');

https.get('https://www.chemguide.co.uk/organicprops/carbonyls/addition.html', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    let text = data.replace(/<[^>]*>?/gm, ' ').replace(/ {2,}/g, ' ').replace(/\n{2,}/g, '\n');
    fs.writeFileSync('chemguide_carbonyl_add.txt', text);
    console.log('Done scraping.');
  });
}).on('error', (err) => {
  console.error(err);
});
