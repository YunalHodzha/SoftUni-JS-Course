function processing(text, word) {
    text = text.split(" ");
    let counter = 0;

    for (let el of text) {
        if (el === word) {
            counter++;
        }
    }
    console.log(counter)
}

processing('This is a word and it also is a sentence',
    'is');
console.log("------------");
processing('softuni is great place for learning new programming languages',
    'softuni');