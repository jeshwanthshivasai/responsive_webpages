//1

//2
let button = document.createElement('button');
button.textContent = 'Click Me';
document.body.append(button);

button.addEventListener('click', () => {
    button.style.backgroundColor = 'green';
});

//3
let input = document.createElement('input');
input.placeholder = 'enter your name';
document.body.append(input);

input.addEventListener('input', () => {
    const inputValue = input.value;
    const validName = /^[a-zA-Z ]+$/;

    if (validName.test(inputValue)) {
        
}
