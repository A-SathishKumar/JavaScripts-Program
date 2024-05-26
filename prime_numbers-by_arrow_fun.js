//4)Return all the prime numbers in an array

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function findPrimes(array) {
    return array.filter(num => isPrime(num));
}
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = findPrimes(numbersArray);
console.log("Prime numbers in the array:", primeNumbers);
