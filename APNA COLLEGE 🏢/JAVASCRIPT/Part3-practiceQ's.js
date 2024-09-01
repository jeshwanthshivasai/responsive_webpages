//1
let msg = 'help!';
console.log(msg.trim().toUpperCase());

//2
let name = 'ApnaCollege';
console.log(name.slice(4, 9));
console.log(name.indexOf('na'));
console.log(name.replace("Apna", "Our"));

//3
console.log(name.slice(4).replace('l', 't').replace('l', 't'));

//4
let start = ['jan', 'feb', 'march', 'august'];
// final: ['july', 'june', 'march', 'august'];

console.log(start.shift['jan']);
console.log(start.unshift['july']);
console.log(start.shift['feb']);
console.log(start.unshift['june']);

//5
let start1 = ['jan', 'feb', 'march', 'august'];
// final = ['july', 'june', 'march', 'august'];

console.log(start1.splice(0, 2, 'july', 'june'));
console.log(start1);

//6
let lang = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
console.log(lang.reverse().indexOf('javascript'));

//7
let game = [['x', null, 0], [null, 'x', null], [0, null, 'x']];
console.log(game);