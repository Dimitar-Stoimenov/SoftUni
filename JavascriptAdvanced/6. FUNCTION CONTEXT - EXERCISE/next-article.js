function getArticleGenerator(articles) {
    let contentElement = document.getElementById('content');

    function next() {
        let articleContent = articles.shift();

        if (articleContent) {
            let articleDiv = document.createElement('article')
            articleDiv.textContent = articleContent
            contentElement.appendChild(articleDiv)
        }
    }

    return next
}