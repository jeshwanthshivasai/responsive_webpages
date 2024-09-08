//1
//sq and sum the arrar usign => and find the average of the array
let arr1 = [1, 2, 3, 4];
let sq = arr1.map((num) => num*num);

let sum = sq.reduce((sum, num) => sum + num, 0);

let avg = sum / arr1.length;
console.log(avg);

//2
//create new array using map function whose each element is equal to the original element plus 5
let arr2 = [1, 2, 3, 4];
let newArray = arr2.map((num) => num + 5);
console.log(newArray);

//3
//create a new array whose elements are in uppercase of words present in original array
let arr3 = ['a', 'B', 'c', 'D', 'e', 'F', 'g'];
let uppercaseArray = arr3.map((word) => word.toUpperCase());
console.log(uppercaseArray);

//4
let doubleAndReturnArgs = (arr4, ...args) => [...arr4, ...args.map((variable) => variable * 2)];
console.log(doubleAndReturnArgs([1, 2, 3], 4, 5, 6));

//5
let mergeObjects = (obj1, obj2) => ({
    ...obj1,
    ...obj2,
});
mergeObjects({a : 1, b : 2}, {c : 3, d : 4});