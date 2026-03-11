const https = require('https');

https.get('https://www.chemguide.co.uk/basicorg/bonding/benzene1.html', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const bodyMatch = data.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let text = bodyMatch ? bodyMatch[1] : data;
    text = text.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
               .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
               .replace(/<[^>]+>/g, ' ')
               .replace(/\s+/g, ' ')
               .trim();
    console.log(text.substring(0, 3000));
    console.log('\n--- PART 2 ---\n');
    console.log(text.substring(3000, 6000));
  });
}).on('error', (err) => {
  console.error(err);
});
