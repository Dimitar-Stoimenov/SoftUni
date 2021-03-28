function solution() {
    // attach event listeners to input form
    const [gifts, sent, discarded] = document.querySelectorAll('section ul');
    const input = document.querySelector('input');
    document.querySelector('button').addEventListener('click', addGift);

    // create gift elements with buttons
    function addGift() {
        const name = input.value;
        input.value = '';

        const element = e('li', name, 'gift');
        const sendBtn = e('button', 'Send', 'sendButton');
        const discardbtn = e('button', 'Discard', 'discardButton');

        element.appendChild(sendBtn);
        element.appendChild(discardbtn);

        gifts.appendChild(element);

        sendBtn.addEventListener('click', () => sendGift(name, element));
        discardBtn.addEventListener('click', () => discardGift(name, element));

        sortGifts();
    }

    // logic for sending gifts
    // function sendGift(name, gift) {
    //     gift.remove();
    //     const element = e('li', name, 'gift');
    //     sent.appendChild(element);
    //     // remove element from original list
    //     // create new list item
    //     // add element to new list
    // }

    // logic for discarding gifts
    // function discardGift(name, gift) {
    //     gift.remove();
    //     const element = e('li', name, 'gift');
    //     discarded.appendChild(element);
    // }

    // sort gift list
    function sortGifts() {
        Array
            .from(gifts.children)
            .sort((a, b) => a.innerText.localeCompare(b.innerText))
            .forEach(g => gifts.appendChild(g))
    }

    function e(type, content, className) {
        const result = document.createElement(type);
        result.textContent = content;

        if (className) {
            result.className = className;
        }

        return result
    }
}
