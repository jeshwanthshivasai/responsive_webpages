// IF

console.log('before if statement');
let age = 23;
if (age >= 18) {
    console.log('you are an adult');
    console.log('you can marry');
    console.log('you can vote');
    console.log('you can drive');
}
console.log('after if statement');

let myName = 'jesse';
if (myName == 'jesse') {
    console.log(`Hello ${myName}`);
}

let color = 'red';

if(color === 'red') {
    console.log('The color is red');
}
if(color === 'green') {
    console.log('The color is green');
}
if(color === 'orange') {
    console.log('The color is orange');
}


// ELSE-IF
console.log('before if statement');
let myAge = 23;
if (age >= 18) {
    console.log('you are an adult');
}
else if (age < 18) {
    console.log('you are a teenager');
}
console.log('after if statement');

let marks = 80;
if (marks >= 80) {
    console.log('Grade A');
} else if (marks <= 60) {
    console.log('Grade B');
} else if (marks <= 40) {
    console.log('Grade C');
} else if (marks <=20) {
    console.log('Grade D');
}


// ELSE

console.log('before if statement');
let yourName = 'jesse';
if (yourName == 'jesse') {
    console.log(`Hello ${yourName}`);
} else {
    console.log('Hello guest');
}

let size = 'S';
if (size === 'XL') {
    console.log('250rs');
} else  if (size === 'L') {
    console.log(('200Rs'));
} else if (size === 'M') {
    console.log('100Rs');
} else if (size === 'S') {
    console.log('50Rs');
}


// NESTED IF-ELSE

console.log('before if statement');
let myMarks = 45;

if (myMarks >= 20) {
    if (marks >= 80) {
        console.log('Grade A');
    } else if (marks >= 60) {
        console.log('Grade B');
    } else {
        console.log('Grade C');
    }
} else {
    console.log('Failed');
}

// SWITCH-CASE

let Color = 'red';

switch (color) {
    case 'red':
        console.log('stop');
        break;
    case 'orange':
        console.log('slow down');
        break;
    case 'green':
        console.log('go');
        break;
    default:
        console.log('not working traffic lights');
}

let day = 1;

switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid day');
}


// LOGICAL OPERATORS
// AND
console.log('before if statement');
let myNumber = 5;
if (myNumber % 2 === 0 && myNumber > 0) {
    console.log('The number is even and positive');
} else if (myNumber % 2 !== 0 && myNumber > 0) {
    console.log('The number is odd and positive');
} else if (myNumber < 0) {
    console.log('The number is negative');
} else {
    console.log('The number is 0');
}

// OR

console.log('before if statement');
let Age = 25;
if (Age >= 18 || Age >= 60) {
    console.log('You are an adult or senior citizen');
} else {
    console.log('You are a teenager');
}

// NOT

console.log('before if statement');
let MyAge = 23;
if (!(MyAge >= 18 && MyAge <= 65)) {
    console.log('You are not between 18 and 65');
} else {
    console.log('You are between 18 and 65');
}

//good string
var string = 'jess';
if (string[0] === 'j' && string.length === 4) {
    console.log('The string is good string');
} else {
    console.log('The string is not good string');
}


// ALERT

alert('ERROR 404');
console.log('simple log');
console.error('error log');
console.warn('warning log');

// PROMPT

let nee_peru = prompt('enter your name: ');
console.log(nee_peru);
