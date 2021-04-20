function asyncDemo() {
    console.log('first');

    setTimeout(() => {
        console.log('inside timeout')
    }, 1000)

    console.log('second');
}

asyncDemo()