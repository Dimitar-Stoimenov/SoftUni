function solve() {
    const lectureNameEl = document.querySelector("body > main > section.admin-view.section-view > div > div > form > div:nth-child(1) > input[type=text]");
    const dateEl = document.querySelector("body > main > section.admin-view.section-view > div > div > form > div:nth-child(2) > input[type=datetime-local]");
    const moduleEl = document.querySelector("body > main > section.admin-view.section-view > div > div > form > div:nth-child(3) > select");
    const addBtn = document.querySelector("body > main > section.admin-view.section-view > div > div > form > div:nth-child(4) > button");

    const modulesDiv = document.querySelector("body > main > section.user-view.section-view > div");

    let addedModules = [];

    addBtn.addEventListener('click', e => {
        e.preventDefault();
        const name = lectureNameEl.value;
        const date = dateEl.value;
        const module = moduleEl.value;

        if (name == '' || date == '' || module == '' || module == 'Select module') {
            return;
        }

        if (!addedModules.includes(module)) {
            addedModules.push(module);

            const moduleDiv = document.createElement('div');
            moduleDiv.classList.add('module');
            moduleDiv.id = module;
            const h3module = document.createElement('h3');
            h3module.textContent = `${module.toUpperCase()}-MODULE`;
            moduleDiv.appendChild(h3module);
            const ulElement = document.createElement('ul');
            moduleDiv.appendChild(ulElement);

            modulesDiv.appendChild(moduleDiv);
        }

        const currentUlEl = document.getElementById(module).querySelector('ul');

        const liEl = document.createElement('li');
        liEl.classList.add('flex');
        liEl.setAttribute("data-date", date);
        const h4El = document.createElement('h4');
        h4El.textContent = `${name} - ${date.split('-').join('/').split('T').join(' - ')}`
        liEl.appendChild(h4El);
        const delBtn = document.createElement('button');
        delBtn.classList.add('red');
        delBtn.textContent = 'Del';
        delBtn.addEventListener('click', e => {
            let parent = document.getElementById(module);
            let parentUl = parent.querySelector('ul');

            e.target.parentNode.remove();

            if (parentUl.innerHTML == '') {
                parent.remove();
                addedModules = addedModules.filter(x => x != module);
            }
        });

        liEl.appendChild(delBtn);
        currentUlEl.appendChild(liEl);

        const moduleDiv = document.querySelector(`#${module}`);
        const ulElement = moduleDiv.querySelector('ul');

        [...ulElement.children]
            .sort((a, b) => (a.dataset.date).localeCompare(b.dataset.date))
            .forEach(node => ulElement.appendChild(node));

        lectureNameEl.value = '';
        dateEl.value = '';
        moduleEl.value = '';
    })
};