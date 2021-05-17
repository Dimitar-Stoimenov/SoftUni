const mainElement = document.getElementById('main');

async function lockedProfile() {
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
    const response = await fetch(url);
    const data = await response.json();
    let userCounter = 0;

    mainElement.children[0].remove()

    Object.values(data).forEach(profile => {
        const { _id: id, username } = profile;
        userCounter++;

        const result = e('div', { className: 'profile' },
            e('img', { src: './iconProfile2.png', className: 'userIcon' }),
            e('label', {}, 'Lock'),
            e('input', { type: 'radio', name: `user${userCounter}Locked`, value: 'lock', checked: 'true' }),
            e('label', {}, 'Unlock'),
            e('input', { type: 'radio', name: `user${userCounter}Locked`, value: 'unlock' }),
            e('br'),
            e('hr'),
            e('label', {}, 'Username'),
            e('input', { type: 'text', name: `user${userCounter}Username`, value: username, disabled: 'true', readonly: 'readonly' }),
            e('div', { id: id }),
            e('button', {
                'onclick': async (event) => {
                    if (event.target.parentElement.children[4].checked) {
                        if (event.currentTarget.textContent == 'Show more') {
                            let parent = event.target.parentElement
                            let hiddenDiv = parent.lastChild.previousSibling;

                            const data = await getHiddenInfo(id);
                            const { _id, username, email, age } = data;
                            const result = e('div', { id: id },
                                e('hr'),
                                e('label', {}, 'Email:'),
                                e('input', { type: 'email', name: `user${userCounter}Email`, value: email, disabled: 'true', readonly: 'readonly' }),
                                e('label', {}, 'Age:'),
                                e('input', { type: 'email', name: `user${userCounter}Age`, value: age, disabled: 'true', readonly: 'readonly' })
                            );
                            hiddenDiv.appendChild(result)

                            parent.lastChild.textContent = 'Hide it';
                        } else {
                            let parent = event.target.parentElement;
                            let hiddenDiv = parent.lastChild.previousSibling;
                            hiddenDiv.querySelectorAll('*').forEach(n => n.remove());

                            event.currentTarget.textContent = 'Show more';
                        }
                    }
                }
            }, 'Show more')
        )

        mainElement.appendChild(result);
    })
}

async function getHiddenInfo(id) {
    const url = 'http://localhost:3030/jsonstore/advanced/profiles/' + id;
    const response = await fetch(url);
    const data = await response.json();

    return data;
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