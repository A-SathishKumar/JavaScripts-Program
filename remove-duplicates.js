//7) Remove duplicates from an array

function removeDuplicates(array) {
    return [...new Set(array)];
}
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray); 

