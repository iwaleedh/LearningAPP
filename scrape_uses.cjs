const https = require('https');
const fs = require('fs');

const url = 'https://www.chemguide.co.uk/organicprops/alcohols/uses.html';

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    // Basic text extraction
    const text = data.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
    fs.writeFileSync('chemguide_uses.txt', text);
    console.log('Scraped uses content successfully.');
  });
}).on('error', (err) => {
  console.error(err);
});
