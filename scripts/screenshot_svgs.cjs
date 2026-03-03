const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function run() {
    console.log("Starting puppeteer...");
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    // Set viewport to a typical desktop size
    await page.setViewport({ width: 1280, height: 800 });

    console.log("Navigating to local SVG test page...");
    try {
        await page.goto('http://localhost:5173/svg-test.html', { waitUntil: 'networkidle0' });

        console.log("Taking full page screenshot...");
        const screenshotPath = path.join(__dirname, '../public/svg-test-full-screenshot.png');
        await page.screenshot({ path: screenshotPath, fullPage: true });
        console.log("Screenshot saved at:", screenshotPath);
    } catch (e) {
        console.error("Error during navigation/screenshot:", e);
    } finally {
        await browser.close();
    }
}

run();
