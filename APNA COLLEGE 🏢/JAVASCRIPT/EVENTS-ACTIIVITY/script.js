let button = document.querySelector('button');

button.addEventListener('click', function() {
    let h3 = document.querySelector('h3');
    let randomColor = randomColor();
    h3.innerText = randomColor;

    let div = document.querySelector('div');
    div.style.backgroundColor = randomColor;
    
    console.log('color updated');
});

function randomColor() {
    let red = Math.random() * 255;

    let green = Math.random() * 255;
    let blue = Math.random() * 255;

    let color = `(${red} ${green} ${blue})`;
    return color;
} 