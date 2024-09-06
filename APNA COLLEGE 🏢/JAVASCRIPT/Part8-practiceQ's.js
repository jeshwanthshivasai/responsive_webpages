//1
//check all numbers in array are multiples of 10 or not

let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let isMultipleOf10 =  arr1.every((num) => num % 10 === 0);
    console.log(isMultipleOf10);

//2
//create a function to find the smallest number in an array
let arr2 = [44, 3, 2, 5, 6, 73, 3, 5, 9];
let smallestNumber = arr2.reduce((min, el) => {
    if(min < el) {
        return min;
    } else {
        return el;
    }
});
console.log(smallestNumber);

//or by creating a function

function findSmallest(arr2) {
    let smallestNumber = arr2.reduce((min, el) => {
        if(min < el) {
            return min;
        } else {
            return el;
        }
    });
    return smallestNumber;
}