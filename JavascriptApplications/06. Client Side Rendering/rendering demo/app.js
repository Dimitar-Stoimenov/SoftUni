// load dynamic contenct (articles)
// generate article HTML (using template and content)
// render HTML on the page

import { renderTemplate } from './engine.js';

async function start() {
    const articles = await (await fetch('./articles.json')).json();
    const articleTemplate = await (await fetch('./article.html')).text();

    const main = document.getElementById('content');
    main.innerHTML = articles.map(article => renderTemplate(articleTemplate, article)).join('');
}

start();