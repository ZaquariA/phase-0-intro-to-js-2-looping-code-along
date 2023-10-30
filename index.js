function writeCards(names, eventName) {
    const messages = []
    for (let i=0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return messages;
}

function countDown() {
    let count = 10;
    while (count > -1) {
        console.log(count--);
    }
}