(function attachEvents() {
    const loadBooksBtn = document.getElementById('loadBooks');
    loadBooksBtn.addEventListener('click', loadAllBooks);

    const formElement = document.querySelector('form');
    formElement.addEventListener('submit', event => createBook(event));
})();

async function loadAllBooks() {
    const url = 'http://localhost:3030/jsonstore/collections/books';
    const response = await fetch(url);

    if (!response.ok) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }

    const data = await response.json();

    const booksEntriesBodyEl = document.querySelector('body > table > tbody');
    let newTableBodyEl = e('tbody');
    booksEntriesBodyEl.replaceWith(newTableBodyEl);

    Object.entries(data).forEach(b => {

        const result = e('tr', {},
            e('td', {}, b[1].title),
            e('td', {}, b[1].author),
            e('td', {},
                e('button', { 'onclick': async event => updateBook(event), 'value': b[0] }, 'Edit'),
                e('button', { 'onclick': async event => deleteBook(event), 'value': b[0] }, 'Delete')
                //with 'value': b[0] we add the book's Id to each edit and delete button, so we can use it later.
            )
        );

        newTableBodyEl.appendChild(result);
    });
}

async function createBook(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const title = formData.get('title');
    const author = formData.get('author');

    const url = 'http://localhost:3030/jsonstore/collections/books';

    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ author, title }),
    });
}

async function updateBook(event) {
    const bookId = event.target.value;

    const formTitleEl = document.querySelector('body > form > h3');
    formTitleEl.textContent = 'Edit FORM';
    const submitBtn = document.querySelector('body > form > button');

    const formButtonEl = document.createElement('button');
    formButtonEl.textContent = 'Save';
    submitBtn.replaceWith(formButtonEl);

    const response = await fetch('http://localhost:3030/jsonstore/collections/books/' + bookId);
    const data = await response.json();

    const formTitle = document.querySelector('body > form > input[type=text]:nth-child(3)');
    formTitle.value = data.title;

    const formAuthor = document.querySelector('body > form > input[type=text]:nth-child(5)');
    formAuthor.value = data.author;

    formButtonEl.addEventListener('submit', async (event) => {
        event.preventDefault();
        const author = formAuthor.value;
        const title = formTitle.value;

        const editResponse = await fetch('http://localhost:3030/jsonstore/collections/books/' + bookId, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ author, title }),
        });
        
        const editData = await editResponse.json();
        console.log(editData);
        

        // formTitleEl.textContent = 'FORM';
        // formButtonEl.replaceWith(submitBtn);

        // formTitle.value = '';
        // formAuthor.value = '';

    });

}

async function deleteBook(event) {

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