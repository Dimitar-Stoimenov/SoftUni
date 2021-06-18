function solve() {
    let archiveList = [];
    const elementsArr = document.querySelectorAll('aside section form p');

    const authorEl = elementsArr[0].lastElementChild;
    const titleEl = elementsArr[1].lastElementChild;
    const categoryEl = elementsArr[2].lastElementChild;
    const contentEl = elementsArr[3].lastElementChild;

    const createBtn = document.querySelector('body > div > div > aside > section:nth-child(1) > form > button');
    const postsSectionEl = document.querySelector('body > div > div > main > section');
    
    createBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let article = document.createElement('article');

        article.innerHTML = `
            <h1>${titleEl.value}</h1>
            <p>Category:
                <strong>${categoryEl.value}</strong>
            </p>
            <p>Creator:
                <strong>${authorEl.value}</strong>
            </p>
            <p>${contentEl.value}</p>
        `

        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('buttons');

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('btn');
        deleteBtn.classList.add('delete');
        buttonsDiv.appendChild(deleteBtn);

        const archiveBtn = document.createElement('button');
        archiveBtn.textContent = 'Archive';
        archiveBtn.classList.add('btn');
        archiveBtn.classList.add('archive');
        buttonsDiv.appendChild(archiveBtn);

        article.appendChild(buttonsDiv);
        postsSectionEl.appendChild(article);

        deleteBtn.addEventListener('click', (e) => {
            e.target.parentNode.parentNode.remove();
        });

        archiveBtn.addEventListener('click', (e) => {
            const title = e.target.parentNode.parentNode.firstElementChild.textContent;
            archiveList.push(title);
            e.target.parentNode.parentNode.remove();
            sortArchiveList();
        });
    });

    function sortArchiveList() {
        const olElement = document.querySelector('ol');
        olElement.innerHTML = '';

        archiveList
            .sort((a, b) => a.localeCompare(b))
            .forEach(title => {
                let liElement = document.createElement('li');
                liElement.textContent = title;
                olElement.appendChild(liElement);
            });
    }
}