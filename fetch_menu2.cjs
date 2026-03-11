const https = require('https');
https.get('https://www.chemguide.co.uk/organicprops/nitrilemenu.html', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    // extract hrefs
    const regex = /<a href="([^"]+)">([^<]+)<\/a>/g;
    let match;
    while ((match = regex.exec(data)) !== null) {
      console.log(match[1]);
    }
  });
});
