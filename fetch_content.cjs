const https = require('https');
https.get('https://www.chemguide.co.uk/organicprops/amides/polyamides.html', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const text = data.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ');
    console.log(text.substring(4000, 6000));
  });
});
