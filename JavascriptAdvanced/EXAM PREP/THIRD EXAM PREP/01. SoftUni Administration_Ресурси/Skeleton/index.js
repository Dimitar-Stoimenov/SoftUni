function solve() {
    const addButton = document.querySelector('.form-control button');
    const lectureNameElement = document.querySelector('.form-control input');
    const dateElement = document.querySelectorAll('.form-control input')[1];
    const moduleElement = document.querySelector('.form-control select');
    const trainingModulesParentDiv = document.querySelector('.modules');

    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        if (validityCheck()) {
            addLecture(lectureNameElement.value, dateElement.value, moduleElement.value);
        }
    });

    function validityCheck() {
        if (lectureNameElement.value === "") {
            return false
        }

        if (dateElement.value === "") {
            return false
        }

        if (moduleElement.value === "Select module") {
            return false
        }

        return true
    }

    let usedModules = [];

    function addLecture(name, date, module) {
        if (!usedModules.includes(module)) {
            usedModules.push(module);
            const newModule = document.createElement('div');
            newModule.classList = 'module';
            newModule.id = module;
            const h3 = document.createElement('h3');
            h3.textContent = `${module.toUpperCase()}-MODULE`;
            newModule.appendChild(h3);
            const ulElement = document.createElement('ul');
            newModule.appendChild(ulElement);
            trainingModulesParentDiv.appendChild(newModule)
        }

        const correctModuleElement = document.getElementById(module);
        const ulParent = correctModuleElement.childNodes[1];

        const liElement = document.createElement('li');
        liElement.id = date;
        liElement.classList = 'flex';
        const h4 = document.createElement('h4');
        let dateString = date;
        h4.textContent = `${name} - ${dateString.split('-').join('/').split('T').join(' - ')}`;
        liElement.appendChild(h4);
        const redButton = document.createElement('button');
        redButton.classList = 'red';
        redButton.textContent = 'DEL';
        liElement.appendChild(redButton);
        ulParent.appendChild(liElement);

        redButton.addEventListener('click', () => {
            ulParent.removeChild(liElement);

            if (ulParent.children.length === 0) {
                correctModuleElement.remove();
                usedModules = usedModules.filter(x => x !== module);
            }
        })

        let list = correctModuleElement.childNodes[1];
        let items = list.childNodes;
        let itemsArr = [];

        for (var i in items) {
            if (items[i].nodeType == 1) {
                itemsArr.push(items[i]);
            }
        }

        itemsArr.sort(function (a, b) {
            return a.id.localeCompare(b.id)
        });

        for (i = 0; i < itemsArr.length; ++i) {
            list.appendChild(itemsArr[i]);
        }
    }
}