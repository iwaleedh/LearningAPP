const https = require('https');
const fs = require('fs');

https.get('https://www.chemguide.co.uk/organicprops/alkenes/making.html', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('chemguide_making.txt', data);
    console.log('Scraped successfully');
  });
}).on('error', (e) => {
  console.error(e);
});
