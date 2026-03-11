const https = require('https');
https.get('https://www.chemguide.co.uk/organicprops/nitrilemenu.html', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    // extract hrefs
    const regex = /<a href="([^"]+)">([^<]+)<\/a>/g;
    let match;
    while ((match = regex.exec(data)) !== null) {
      if (match[1].includes('nitriles')) {
        console.log(match[1], match[2]);
      }
    }
    const text = data.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ');
    console.log("TEXT:", text.substring(0, 1000));
  });
});
