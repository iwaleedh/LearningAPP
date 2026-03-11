const https = require('https');

https.get('https://www.chemguide.co.uk/basicorg/bonding/ethene.html', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const text = data.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                     .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                     .replace(/<[^>]+>/g, ' ')
                     .replace(/\s+/g, ' ')
                     .trim();
    console.log(text.substring(6000, 9000));
  });
});
