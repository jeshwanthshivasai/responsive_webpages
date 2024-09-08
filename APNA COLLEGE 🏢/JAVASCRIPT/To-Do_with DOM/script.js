let button = document.querySelector('button');
let ul = document.querySelector('ul');
let input = document.querySelector('input');

button.addEventListener('click', function() {
    let item = document.createElement('li');
    item.textContent = input.value;

    let deleleteButton = document.createElement('button');
    deleleteButton.textContent = 'Delete';
    deleleteButton.classList.add('delete');

    item.appendChild(deleleteButton);
    ul.appendChild(item);
    input.value = '';

});

//with event delegation
ul.addEventListener('click', function () {
    console.log(event.target);
    console.log('button clicked');
}


//without event delegation
let deleteButtons = document.querySelector('.delete');
for(deleteButton of deleteButtons) {
    deleteButton.addEventListener('click', function() {
        let parent = this.parentElement;
        console.log(parent);
        parent.remove();
    });
}