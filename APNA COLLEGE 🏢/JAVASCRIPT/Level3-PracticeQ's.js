//1
let arr1 = [7, 9, 0, -2];
//let n = 3;
console.log(arr1.splice(0, 3));
// console.log(arr1.slice(0, n));

//2
let arr2 = [7, 9, 0, -2];
//let n = 3
console.log(arr2.splice(1, 4));
// console.log(arr2.slice(arr1.length-n));

//3
let string = "";
console.log(string.length);

// let string = prompt('enter something');
// if(string.length == 0) {
//     console.log('string is empty');
// } else {
//     console.log('string is not empty');
// }

//4
let word = 'jesse';
if (word.indexOf('j') === 'j') {
    console.log('lowercase')
} else {
    console.log('uppercase')
}

// if (word[0] == word[0].toLowerCase()) {
//     console.log('lowercase')
// } else {
//     console.log('uppercase');
// }

//5
let word1 = '  jesse  ';
console.log(word1.trim());

// let word1 = prompt('enter something');
// console.log(`original string = ${str}`);
// console.log(`string without spaces = ${str.trim()}`);

//6
let arr3 = [1, 2, 4, 6, 8];
console.log(arr3.includes(1));
let item = 9;
if(arr1.indexOf(item) != -1) {
    console.log('it exists');
} else {
    console.log('doesnt exist');
}
