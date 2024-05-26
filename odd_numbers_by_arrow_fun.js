//1)Print odd numbers in an array
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = numbersArray.filter(num => num % 2 !== 0);
console.log("Odd numbers in the array:", oddNumbers);
