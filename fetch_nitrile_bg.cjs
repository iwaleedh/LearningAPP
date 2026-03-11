const https = require('https');
https.get('https://www.chemguide.co.uk/organicprops/nitriles/background.html', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const text = data.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ');
    console.log(text.substring(0, 1500));
  });
});
