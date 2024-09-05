//1
//Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers
let arr = [1, 1, 2, 2, 3, 3, 4, 4, 4, 5, 5]
let arrayAverage = ((arr) => {
    let sum = 0;
    for(let num of arr) {
        sum += num;
    }
    return sum/ arr.length;
});
console.log(arrayAverage(arr));

//2
let n = 4;
let isEven = (n) => (n % 2 === 0);

//3
const object = {
    message:'Hello,World!',
    logMessage() {
        console.log(message);
    }
};
setTimeout(object.logMessage,1000);

//4
let length = 4;
function callback() {
    console.log(this.length);
}
const object = {
    length : 5;
    method(callback) {
        callback();
    },
};
object.method(callback, 1, 2);

