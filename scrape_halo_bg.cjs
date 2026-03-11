const https = require('https');
const fs = require('fs');

https.get('https://www.chemguide.co.uk/organicprops/haloalkanes/background.html', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('chemguide_halo_bg.txt', data);
    console.log('Saved to chemguide_halo_bg.txt');
  });
}).on('error', (err) => {
  console.log('Error: ', err.message);
});
