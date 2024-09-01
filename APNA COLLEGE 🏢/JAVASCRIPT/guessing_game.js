//user enters a max number and then tries to guess a random generated number b/w 1 to max

let guess = prompt('enter a number');
let random = Math.floor(Math.random() * max) + 1;

let number = prompt('guess number');
while(true) {
    if(guess === 'quit') {
       break; 
    }

    if(guess === random) {
        console.log('perfecto!');
        break;
    } else if(guess < random) {
        console.log('close call! try again with a higher number!');
    } else {
        console.log('close call! try again with a smaller number!');
    }

    //or

    
    // } else {
    //     console.log('close call! try again!');
    // }
}