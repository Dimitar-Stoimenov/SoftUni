function solution() {
    let addGiftButton = document.querySelector('.card div button');
    let addGiftElement = document.querySelector('.card div input');

    let listOfGiftsUlElement = document.getElementsByClassName('card')[1].children[1];
    let sendGiftUlElement = document.getElementsByClassName('card')[2].children[1];
    let discardGiftUlElement = document.getElementsByClassName('card')[3].children[1];

    addGiftButton.addEventListener('click', (e) => {
        let listOfGiftsLiElement = document.createElement('li');
        listOfGiftsLiElement.textContent = addGiftElement.value;
        listOfGiftsLiElement.classList = 'gift';

        let sendButton = document.createElement('button');
        sendButton.classList = 'sendButton';
        sendButton.textContent = 'Send';
        listOfGiftsLiElement.appendChild(sendButton);

        sendButton.addEventListener('click', (e) => {
            let parent = e.target.parentElement;

            parent.removeChild(sendButton);
            parent.removeChild(discardButton);
            parent.remove();

            let sendGiftLiElement = document.createElement('li');
            sendGiftLiElement = parent;

            sendGiftUlElement.appendChild(sendGiftLiElement);
        })

        let discardButton = document.createElement('button');
        discardButton.classList = 'discardButton';
        discardButton.textContent = 'Discard';
        listOfGiftsLiElement.appendChild(discardButton);

        discardButton.addEventListener('click', (e) => {
            let parent = e.target.parentElement;

            parent.removeChild(sendButton);
            parent.removeChild(discardButton);
            parent.remove();

            let discardGiftLiElement = document.createElement('li');
            discardGiftLiElement = parent;

            discardGiftUlElement.appendChild(discardGiftLiElement);
        });

        listOfGiftsUlElement.appendChild(listOfGiftsLiElement);

        [...listOfGiftsUlElement.children]
            .sort((a, b) => a.innerText.localeCompare(b.innerText))
            .forEach(node => listOfGiftsUlElement.appendChild(node));

        addGiftElement.value = '';
    })
}
