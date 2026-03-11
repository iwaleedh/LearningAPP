const https = require('https');
const fs = require('fs');

https.get('https://www.chemguide.co.uk/organicprops/alcohols/oxidation.html', (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
        let text = data.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
        text = text.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
        text = text.replace(/<[^>]+>/g, '\n');
        text = text.replace(/&nbsp;/g, ' ');
        text = text.replace(/\n\s*\n/g, '\n');
        
        fs.writeFileSync('chemguide_oxidation_parsed.txt', text);
        console.log("Saved.");
    });
});
