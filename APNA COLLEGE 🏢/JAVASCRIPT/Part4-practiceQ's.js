//print all odd numbers from 1-15
for(let i=1; i<=15; i+=2) {
    console.log(i);
}
//REVERSE
for(let i=15; i>=1; i-=2) {
    console.log(i);
}

//print even numbers 
for(let i=2; i<=10 ; i+=2) {
    console.log(i);
}
//REVERSE
for(let i=10; i>=2; i-=2) {
    console.log(i);
}

//multiplication table of 5
for(i=5; i<=50; i+=5) {
    console.log(i);
}
//by taking prompt
let n = prompt('write number');
n = parseInt(n);
for(let i = n; i<= n* 10; i =+ n) {
    console.log(n);
}

//nested for
for(let i = 1; i<=3; i++) {
    console.log(`outer loop ${i}`);
    for( let j = 1; j <= 3; j++) {
        console.log(j);
    }
}

//while
let i = 1;
while(i<=5) {
    console.log(i);
    i++;
}

//fav movie
let favMovie = 'life of pi'
let guess = prompt('guess movie name');

while((guess != favMovie) && (guess != 'quit')) {
    let guess = prompt('guess again')
}

if(guess === favMovie) {
    console.log('right guess');
} else {
    console.log('quit');
}

//break
let j = 1;
while(j <=5 ) {
    if(j===3) {
        break;
    }
    console.log(j);
    j++;
}

//loops with arrays
let arr = ['mango', 'apple', 'banana', 'grapes'] ;
for(let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}

//loops with nesteed arrays
let names = [['j', 'k', 'l'], ['a', 'b', 'c', 'd']];
for(let i=0; i<names.length; i++) {
    for(let j=0; j<names[i].length; j++) {
        console.log(names[i][j]);
    }
}

let marks = [['jess', 20], ['jesse', 90], ['messi', 40]];
for(let i=0; i<marks.length; i++) {
    for(let j=0; j<marks[i].length; j++) {
        console.log(marks[i][j]);
    }
}