const https = require('https');
const fs = require('fs');

const url = 'https://www.chemguide.co.uk/organicprops/alcohols/background.html';

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        fs.writeFileSync('chemguide_alcohols_bg.txt', data);
        console.log('Saved to chemguide_alcohols_bg.txt');
    });
}).on('error', (err) => {
    console.error('Error: ', err.message);
});
