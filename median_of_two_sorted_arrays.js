//6) Return median of two sorted arrays of the same size.

function medianOfTwoSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    const mid = mergedArray.length / 2;
    if (mergedArray.length % 2 === 0) {
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        return mergedArray[Math.floor(mid)];
    }
}


const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log("Median of the two sorted arrays:", medianOfTwoSortedArrays(arr1, arr2)); 

