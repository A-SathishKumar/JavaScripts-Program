//2) Convert all the strings to title caps in a string array

let stringArray = ["hello world", "javascript is fun"];

for (let i = 0; i < stringArray.length; i++) {
    let words = stringArray[i].toLowerCase().split(' ');

    for (let j = 0; j < words.length; j++) {
        words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1);
    }

    stringArray[i] = words.join(' ');
}

console.log(stringArray);
