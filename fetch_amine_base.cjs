const https = require('https');

https.get('https://www.chemguide.co.uk/organicprops/amines/base.html', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const stripped = data.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                         .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                         .replace(/<[^>]+>/g, ' ')
                         .replace(/\s+/g, ' ')
                         .trim();
    console.log(stripped);
  });
}).on('error', (err) => {
  console.log("Error: " + err.message);
});
