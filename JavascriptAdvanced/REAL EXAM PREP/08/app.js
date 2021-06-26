function solution() {
    const addBtn = document.querySelector("body > div > section:nth-child(1) > div > button");
    let listOfGifts = [];

    addBtn.addEventListener('click', event => {
        const input = event.target.parentNode.firstElementChild;
        addGift(input.value);

        input.value = '';
    });

    function addGift(gift) {
        listOfGifts.push(gift);

        sortGiftsArray();
        visualizeListOfGifts();
    };

    function sortGiftsArray() {
        listOfGifts.sort((a, b) => a.localeCompare(b));
    }

    function visualizeListOfGifts() {
        const listOfGiftsUlEl = document.querySelector("body > div > section:nth-child(2) > ul");
        listOfGiftsUlEl.innerHTML = '';

        listOfGifts.forEach(gift => {
            let element = e('li', { className: 'gift' }, gift,
                e('button', { id: 'sendButton', onClick: (event) => send(event) }, 'Send'),
                e('button', { id: 'discardButton', onClick: (event) => discard(event) }, 'Discard'),
            );

            listOfGiftsUlEl.appendChild(element);
        })
    }

    function send(event) {
        let gift = event.target.parentNode.textContent.slice(0, -11);
        event.target.parentNode.remove();

        listOfGifts = listOfGifts.filter(x => x != gift);

        const sentGiftsUlEl = document.querySelector("body > div > section:nth-child(3) > ul");
        let sentGift = e('li', { className: 'gift' }, gift);
        sentGiftsUlEl.appendChild(sentGift);
    }

    function discard(event) {
        let gift = event.target.parentNode.textContent.slice(0, -11);
        event.target.parentNode.remove();

        listOfGifts = listOfGifts.filter(x => x != gift);

        const discardedGiftsUlEl = document.querySelector("body > div > section:nth-child(4) > ul");
        let sentGift = e('li', { className: 'gift' }, gift);
        discardedGiftsUlEl.appendChild(sentGift);
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
}