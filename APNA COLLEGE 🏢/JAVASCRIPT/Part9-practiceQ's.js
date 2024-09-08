let redPara = document.createElement('p');
redPara.textContent = `Hey I'm Red`;
redPara.style.color = 'red';
document.querySelector('body').appendChild(redPara);

let blueHead = document.createElement('h3');
blueHead.textContent = `Hey I'm Blue`;
blueHead.style.color = 'blue';
document.querySelector('body').appendChild(blueHead);

let div = document.createElement('div');
div.style.border =  'black';
div.style.backgroundColor = 'pink';
document.querySelector('body').appendChild(div);

let h1 = document.createElement('h1');
h1.textContent = `Hey I'm in a div`;
div.appendChild(h1);

let p = document.createElement('p');
p.textContent = `Me Too!`;
div.appendChild(p);

document.querySelector('body').appendChild(div);