//2) Convert all the strings to title caps in a string array

const stringArray = ["hello world", "this is a test", "javascript is fun"];
const titleCaseArray = stringArray.map(str => {
    return str.toLowerCase().split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
});
console.log("String array in title case:", titleCaseArray);
