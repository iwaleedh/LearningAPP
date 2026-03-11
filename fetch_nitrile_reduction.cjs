const https = require('https');
https.get('https://www.chemguide.co.uk/organicprops/nitriles/reduction.html', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const text = data.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ');
    console.log(text.substring(0, 1500));
    console.log('---');
    console.log(text.substring(1500, 3000));
  });
}).on('error', (e) => {
  console.error("Got error: " + e.message);
});
