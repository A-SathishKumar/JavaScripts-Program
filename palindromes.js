//5) Return all the palindromes in an array

function isPalindrome(str) {
    let cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
   return cleanedStr === cleanedStr.split('').reverse().join('');
}

function findPalindromes(array) {
 let palindromes = [];
 for (let i = 0; i < array.length; i++) {
     if (isPalindrome(array[i])) {
         palindromes.push(array[i]);
     }
 }
 return palindromes;
}

let wordsArray = [, "hello", "madam", "apple"];
let palindromeWords = findPalindromes(wordsArray);
console.log("Palindromes in the array:", palindromeWords)
