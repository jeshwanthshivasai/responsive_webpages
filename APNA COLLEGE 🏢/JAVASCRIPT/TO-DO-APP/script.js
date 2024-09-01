let todo = [];
let entry = prompt('Enter your action');
// console.log(entry);

while(true) {
    if(entry === 'quit'){
        console.log('quitting app');
        break;
    }
    if(req === 'list') {
        console.log('----------------------------');
        for(let i=0; i<todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log('----------------------------');   
    } else if (req === 'add') {
        let add = prompt('enter the task to be added');
        todo.push(add);
        console.log('the task has been added');
    } else if (req === 'delete') {
        let del = prompt('enter the task you want to delete');
        todo.splice(del, 1);
        console.log('the task has been deleted');   
    } else {
        console.log('wrong request');
    }
    req = prompt('enter your request');
}