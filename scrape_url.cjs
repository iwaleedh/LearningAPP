const https = require('https');

https.get('https://www.chemguide.co.uk/basicorg/bonding/benzene2.html', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    // Basic sed/grep style stripping using regex
    let text = data.replace(/<[^>]*>?/gm, ' ');
    text = text.replace(/\s+/g, ' ');
    console.log(text.substring(0, 3000));
  });
}).on('error', (err) => {
  console.error(err);
});
