//5)Return all the palindromes in an array

function isPalindrome(str) {
    let cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

function findPalindromes(array) {
    return array.filter(str => isPalindrome(str));
}
const wordsArray = ["hello", "madam", "apple"];
const palindromeWords = findPalindromes(wordsArray);
console.log("Palindromes in the array:", palindromeWords);
