const https = require('https');
const fs = require('fs');

https.get('https://www.chemguide.co.uk/organicprops/acylchlorides/preparation.html', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('temp_acyl_prep.txt', data.replace(/<[^>]*>?/gm, ''));
    console.log('Scraped!');
  });
});
