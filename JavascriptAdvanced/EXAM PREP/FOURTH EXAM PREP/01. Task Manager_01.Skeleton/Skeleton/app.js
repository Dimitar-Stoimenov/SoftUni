function solve() {
    let addButton = document.getElementById('add');
    let taskInputElement = document.getElementById('task');
    let descriptionElement = document.getElementById('description');
    let dateElement = document.getElementById('date');
    let sectionsList = document.getElementsByTagName('section');

    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        let datePattern = /[0-9]{4}.[0-1][0-9].[0-3][0-9]/g

        let validityCheck = taskInputElement.value != '' && descriptionElement.value != '' && datePattern.test(dateElement.value);

        if (validityCheck) {
            addTask(taskInputElement.value, descriptionElement.value, dateElement.value);
        };
    })

    function addTask(task, desc, date) {
        let divElement = document.querySelector('body > main > div > section:nth-child(2) > div:nth-child(2)');
        let articleElement = document.createElement('article');
        let h3Element = document.createElement('h3');
        h3Element.textContent = task;
        articleElement.appendChild(h3Element);
        let descElement = document.createElement('p');
        descElement.textContent = `Description: ${desc}`;
        articleElement.appendChild(descElement);
        let dateElement = document.createElement('p');
        dateElement.textContent = `Due Date: ${date}`;
        articleElement.appendChild(dateElement);

        let buttonDivEl = document.createElement('div');
        buttonDivEl.classList = 'flex';
        let startButton = document.createElement('button');
        startButton.textContent = 'Start';
        startButton.classList = 'green';
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList = 'red';
        buttonDivEl.appendChild(startButton);
        buttonDivEl.appendChild(deleteButton);

        articleElement.appendChild(buttonDivEl);

        sectionsList[1].appendChild(articleElement);

        deleteButton.addEventListener('click', () => {
            articleElement.remove();
        });

        startButton.addEventListener('click', () => {
            articleElement.remove();
            let inProgress = document.getElementById('in-progress');
            inProgress.textContent = '';
            deleteButton.remove();
            startButton.remove();

            let newDeleteButton = document.createElement('button');
            newDeleteButton.textContent = 'Delete';
            newDeleteButton.classList = 'red';
            let finishButton = document.createElement('button');
            finishButton.textContent = 'Finish';
            finishButton.classList = 'orange';
            buttonDivEl.appendChild(newDeleteButton);
            buttonDivEl.appendChild(finishButton);

            newDeleteButton.addEventListener('click', () => {
                articleElement.remove();
            });

            finishButton.addEventListener('click', () => {
                let complete = document.querySelector('body > main > div > section:nth-child(4) > div:nth-child(2)');
                complete.textContent = '';
                articleElement.remove();
                newDeleteButton.remove();
                buttonDivEl.remove();
                finishButton.remove();
                complete.appendChild(articleElement);
            });

            inProgress.appendChild(articleElement);
        })

        divElement.appendChild(articleElement);
    }
}