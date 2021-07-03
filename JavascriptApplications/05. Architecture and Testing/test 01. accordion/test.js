const { chromium } = require("playwright-chromium");
const { expect } = require('chai');

let browser, page;

describe('E2E tests', function () {
    this.timeout(6000);

    before(async () => {
        browser = await chromium.launch({ /* headless: false, slowMo: 1500 */ });
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

    it('loads static page', async () => {
        await page.goto('http://localhost:3000');

        // await page.screenshot({ path: 'index.png' })
        // правим скрийншот

        const content = await page.textContent('.accordion .head span'); // подаваме CSS селектор
        expect(content).to.contains('Scalable Vector Graphics');
        // проверяваме дали определения елемент съдържа посочения текст
    });

    it.only('test if titles are correct', async () => {
        await page.goto('http://localhost:3000');

        const titles = await page.$$eval('.accordion .head span', spans => spans.map(s => s.textContent));
        expect(titles).includes('Scalable Vector Graphics');
        expect(titles).includes('Unix');
        expect(titles).includes('ALGOL');
        expect(titles).includes('Open standard');
    });

    it('toggles content', async () => {
        await page.goto('http://localhost:3000');

        await page.click('#main>.accordion:first-child >> text=More'); // това е общо търсене, нужно е просто да съдържа думата more някъде и е case insensitive
        // await page.click('text="More"'); // това е cпецифично търсене!

        await page.waitForSelector('#main>.accordion:first-child >> .extra p'); //това ще изчака селектора да стане видим;

        const visible = await page.isVisible('#main>.accordion:first-child >> .extra p');
        expect(visible).to.be.true;
    })

    it('shows then hides content', async () => {
        await page.goto('http://localhost:3000');

        await page.click('#main>.accordion:first-child >> text=More');
        await page.waitForSelector('#main>.accordion:first-child >> .extra p');
        await page.click('#main>.accordion:first-child >> text=Less');

        const visible = await page.isVisible('#main>.accordion:first-child >> .extra p');
        expect(visible).to.be.false;
    })
});