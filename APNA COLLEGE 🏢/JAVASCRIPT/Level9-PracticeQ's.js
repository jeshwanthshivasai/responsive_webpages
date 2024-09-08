//1
let input = document.createElement('input');
let button = document.createElement('button');

input.type = 'text';
button.textContent = 'Click Me';

document.body.appendChild(input);
document.body.appendChild(button);

//2
input.placeholder = 'username';
button.id = 'btn';

//or

button.setAttribute('id', 'btn');
input.setAttribute('placeholder', 'username');

//3
let background = document.querySelector('#btn');
background.style.backgroundColor = 'blue';
background.style.color = 'white';

//4
let heading1 = document.createElement('h1');
heading1.textContent = 'DOM Practice';
heading1.style.textDecoration = 'underline';
heading1.style.color = 'purple';

document.body.appendChild(heading1);

//5
let p = document.createElement('p');
p.innerHTML = 'Apna College <b>Delta</b> Practice';

document.body.append(p);