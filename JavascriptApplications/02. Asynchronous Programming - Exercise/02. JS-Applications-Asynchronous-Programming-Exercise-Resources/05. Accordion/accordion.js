const mainElement = document.getElementById('main');

async function getArticles() {
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const response = await fetch(url);
    const data = await response.json();

    data.forEach(a => {
        const { _id: id, title } = a;

        const result = e('div', { className: 'accordion' },
            e('div', { className: 'head' },
                e('span', {}, title),
                e('button', { className: 'button', id: id, 'onclick': (event) => expandArticle(event, id) }, 'More')
            ),
            e('div', { className: 'extra' })
        )

        mainElement.appendChild(result);
    })
}

getArticles();

async function expandArticle(event, id) {
    const parentEl = event.currentTarget.parentElement.parentElement;
    const extraDiv = parentEl.lastChild;

    if (event.currentTarget.textContent == 'More') {
        event.currentTarget.textContent = 'Less';

        const url = 'http://localhost:3030/jsonstore/advanced/articles/details/' + id;
        const response = await fetch(url);
        const data = await response.json();

        let check = parentEl.getElementsByClassName('clicked');

        if (check.length > 0) {
            extraDiv.style.display = 'block';
        } else {
            const { title, content } = data;

            const result = e('p', {}, content);
            extraDiv.appendChild(result);
            extraDiv.style.display = 'block';
            extraDiv.classList.add('clicked');
        }

    } else if (event.currentTarget.textContent == 'Less') {
        extraDiv.style.display = 'none';
        event.currentTarget.textContent = 'More';
    }
}

function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == ' number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}