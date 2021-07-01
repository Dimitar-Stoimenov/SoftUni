// комбинация с "chai" - винаги пишем следното:

const { chromium } = require("playwright-chromium");
const { expect } = require('chai');

let browser, page; // декларираме ги като глобални променливи

describe('E2E tests', () => { //в основния describe слагаме следните неща
    before(async () => { browser = await chromium.launch(); }); //before се изпълнява в началото на целия тест - създава инстанция на браузъра
    after(async () => { await browser.close(); }); //after - в края на целия тест - затваря браузъра
    beforeEach(async () => { page = await browser.newPage(); }); //beforeEach - изпълнява преди всеки тест - отваря нов таб
    afterEach(async () => { await page.close(); }); //afterEach - след всеки тест затваря таба
})

//трябва уеб сървъра и рест сървиса да вървят преди да изпълним тестовете
