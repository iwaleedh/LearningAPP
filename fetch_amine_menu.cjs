const https = require('https');
https.get('https://www.chemguide.co.uk/organicprops/aminemenu.html', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const text = data.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ');
    console.log(text.substring(0, 3000));
  });
}).on('error', (e) => {
  console.error("Got error: " + e.message);
});
