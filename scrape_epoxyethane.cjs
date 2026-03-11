const https = require('https');
const fs = require('fs');

https.get('https://www.chemguide.co.uk/organicprops/alkenes/epoxyethane.html', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('chemguide_epoxyethane.txt', data);
    console.log('Saved to chemguide_epoxyethane.txt');
  });
}).on('error', (err) => {
  console.log('Error: ', err.message);
});
