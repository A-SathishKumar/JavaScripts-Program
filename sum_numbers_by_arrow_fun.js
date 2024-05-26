//3)Sum of all numbers in an array

const numbersArray = [1, 2, 3, 4, 5];
const sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("The sum of all numbers in the array:", sum);