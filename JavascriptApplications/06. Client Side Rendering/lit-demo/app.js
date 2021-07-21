// load dynamic contenct (articles)
// generate article HTML (using template and content)
// render HTML on the page

import { html, render } from 'https://unpkg.com/lit-html?module';

const articleTemplate = article => html`
<article>
    <header>
        <h3>${article.title}</h3>
    </header>
    <div class="article-content">
        <p>${article.content}</p>
    </div>
    <footer>Author: ${article.author}</footer>
</article>
`;


async function start() {
    const articles = await (await fetch('./articles.json')).json();
    const main = document.getElementById('content');
    const article = articleTemplate(articles[0]);

    document.getElementById('btn').addEventListener('click', onClick);

    function onClick() {
        render(article, main);
    }
}

start();