const https = require('https');

https.get('https://www.chemguide.co.uk/basicorg/bonding/eneg.html', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    let text = data.replace(/<[^>]*>?/gm, ' ');
    text = text.replace(/\s+/g, ' ');
    console.log(text.substring(0, 3000));
  });
}).on('error', (err) => {
  console.error(err);
});
