const https = require('https');
const fs = require('fs');

https.get('https://www.chemguide.co.uk/organicprops/acids/reduction.html', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    // Basic text extraction
    const text = data.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                     .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                     .replace(/<[^>]+>/g, '\n')
                     .replace(/\n\s*\n/g, '\n');
    fs.writeFileSync('temp_reduction.txt', text);
    console.log("Done");
  });
}).on('error', (err) => {
  console.log("Error: " + err.message);
});
