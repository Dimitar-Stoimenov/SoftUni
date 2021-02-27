function solve(input) {
    let chatHistory = [];
    let endMark = false;

    for (const line of input) {
        if (endMark) {
            break;
        }

        let [command, ...args] = line.split(' ');

        switch (command) {
            case 'Chat':
                let msg = args[0];

                chatHistory.push(msg);
                break;
            case 'Delete':
                let msg2 = args[0];

                let i = chatHistory.indexOf(msg2);

                if (i >= 0) {
                    chatHistory.splice(i, 1);
                };
                break;
            case 'Edit':
                let msg3 = args[0];
                let newMsg = args[1];

                let index = chatHistory.indexOf(msg3);
                if (index >= 0) {
                    chatHistory.splice(index, 1, newMsg)
                }

                break;
            case 'Pin':
                let msg4 = args[0];
                let idx = chatHistory.indexOf(msg4);

                if (idx >= 0) {
                    chatHistory.splice(idx, 1);
                    chatHistory.push(msg4);
                }

                break;
            case 'Spam':
                let msgs = args;

                for (const el of msgs) {
                    chatHistory.push(el);
                }

                break;
            case 'end':
                endMark = true;
                console.log(chatHistory.join('\n'))
                break;
        }
    }
}

solve(
    (["Chat Hello my old friend",
        "Chat darling",
        "Edit darling Darling",
        "Spam how are you",
        "Pin Hello",
        "end"])
)