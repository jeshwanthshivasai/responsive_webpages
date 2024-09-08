let div = document.querySelector('div');
let ul = document.querySelector('ul');
let list = document.querySelector('li');

div.addEventListener('click', function() {
    console.log('div was clicked');
});

ul.addEventListener('click', function() {
    console.log('ul was clicked');
});

for(li of list) {
    li.addEventListener('click', function() {
        console.log('list item was clicked'); 
    });
}