const { chromium } = require("playwright-chromium");
const { expect } = require('chai');

let browser, page;

describe('E2E tests', () => {
    before(async () => {
        browser = await chromium.launch();
    });

    after(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        page = await browser.newPage();
    });
    
    afterEach(async () => {
        await page.close();
    });
});