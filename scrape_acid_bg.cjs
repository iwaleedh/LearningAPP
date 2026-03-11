const https = require('https');
const fs = require('fs');

const url = 'https://www.chemguide.co.uk/organicprops/acids/background.html';

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        let text = data.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                       .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                       .replace(/<[^>]+>/g, '\n')
                       .replace(/\n\s*\n/g, '\n');
        fs.writeFileSync('chemguide_acid_bg.txt', text);
        console.log('Scraped!');
    });
}).on('error', (err) => {
    console.error('Error: ', err.message);
});
