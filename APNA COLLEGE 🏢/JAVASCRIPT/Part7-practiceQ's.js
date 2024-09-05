//1
// arrow function that returns sqaure of a number 'n'
let sqaure = (n) => (n*n);

//2
let id = setInterval(() => {
    console.log('hello world!');
}, 2000);

setTimeout(() => {
    clearInterval(id);
}, 10000);
