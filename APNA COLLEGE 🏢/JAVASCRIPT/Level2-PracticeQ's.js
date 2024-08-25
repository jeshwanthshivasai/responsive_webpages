//Q-1
var num = 10;
if (num % 10 === 0) {
    console.log('divisible by 10');
} else {
    console.log('bad');
}

//Q-2
var myname = prompt("Enter your name: ");
var age = prompt("Enter your age: ");
alert(`${myname} is ${age} years old`);

//Q-3
let quarter = 1;
switch (quarter) {
    case 1:
        console.log('jan, feb, march');
    case 2:
        console.log('april, may, june');
    case 3:
        console.log('july, aug, sept');
    case 4:
        console.log('oct, nov, dec');
    default:
        console.log('Invalid number');
}

//Q-4
let word = 'app';
if(word[0] === 'A' || word[0] === 'a' && word.length >= 5 ) {
   console.log('golen string');
} else {
    console.log('not golen string');
}

//Q-5
let a = 1;
let b = 2;
let c = 3;

if(a > b) {
    if(a > c) {
        console.log(a);
    } else {
        console.log(c);
    }   
} else {
    if(b > c) {
        console.log(b);
    } else {
        console.log(c);
    }
}

//Q-6
var num1 = 32;
var num2 = 47852;

if ((num1%10) == (num2%10)) {
    console.log(true);
} else {
    console.log(false);
}