const https = require('https');
const fs = require('fs');

https.get('https://www.chemguide.co.uk/organicprops/acylchlorides/oxygen.html', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('temp_acyl_oxygen.txt', data.replace(/<[^>]*>?/gm, ''));
    console.log('Scraped!');
  });
});
