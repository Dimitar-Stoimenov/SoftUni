const url = 'http://localhost:3030/jsonstore/messenger';

(function attachEvents() {
    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');

    sendBtn.addEventListener('click', sendMessage);
    refreshBtn.addEventListener('click', refreshChat);
    refreshChat();
})();

async function sendMessage() {
    let nameEl = document.querySelector('#controls > input[type=text]:nth-child(2)');
    let messageEl = document.querySelector('#controls > input[type=text]:nth-child(5)');

    await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'author': nameEl.value, 'content': messageEl.value }),
    });   

    nameEl.value = '';
    messageEl.value = '';
    refreshChat();
}

async function refreshChat() {
    const response = await fetch(url);
    const data = await response.json();

    const output = Object.values(data).map(msg => msg.author + ': ' + msg.content).join('\n');
    document.getElementById('messages').value = output;
}