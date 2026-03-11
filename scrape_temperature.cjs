const fs = require('fs');
const https = require('https');

https.get('https://www.chemguide.co.uk/physical/basicrates/temperature.html', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('chemguide_temperature.txt', data);
    console.log('Scraped temperature!');
  });
});
