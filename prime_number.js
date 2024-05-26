//4) Return all the prime numbers in an array

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function findPrimeNumbers(array) {
    let primeNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (isPrime(array[i])) {
            primeNumbers.push(array[i]);
        }
    }
    return primeNumbers;
}

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let primeNumbers = findPrimeNumbers(numbersArray);
console.log("Prime numbers in the array:", primeNumbers);

