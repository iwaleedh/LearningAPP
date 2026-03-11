const fs = require('fs');
const https = require('https');

https.get('https://www.chemguide.co.uk/physical/basicrates/pressure.html', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('chemguide_pressure.txt', data);
    console.log('Scraped pressure!');
  });
});
