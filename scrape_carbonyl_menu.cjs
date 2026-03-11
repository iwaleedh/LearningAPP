const https = require('https');

https.get('https://www.chemguide.co.uk/organicprops/carbonylmenu.html', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    // extract main text
    let text = data.replace(/<[^>]*>?/gm, '');
    const fs = require('fs');
    fs.writeFileSync('chemguide_carbonyl_menu.txt', text);
    console.log('Done scraping.');
  });
}).on('error', (err) => {
  console.error(err);
});
