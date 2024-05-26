//1) Print odd numbers in an array

const arr = [1,2,3,4,5,6,7,8,9,10];

function odd(arr){
    var len = arr.length;
    for(var x=0;x<len;x++){
        if(arr[x]%2!=0){
            console.log(arr[x]);
        }
    }
}

odd(arr);
