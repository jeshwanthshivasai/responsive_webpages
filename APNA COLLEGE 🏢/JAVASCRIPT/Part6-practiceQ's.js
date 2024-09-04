//1
function printPoem() {
    console.log('Hello world');
    console.log('how are you?');
}
printPoem();

//2
function diceRoll() {
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log(`Your dice roll is: ${diceRoll}`);
}
diceRoll();


//3
function avg(a, b, c) {
    let avg = (a + b + c) / 2;
    console.log(avg);
}
avg(2, 3, 4);

//4
function mtable(n) {
    for(let i = n; i < n * 10; i+=n) {
        log(i);
    }   
}
mtable(3);

//5
function getSum() {
    let sum = 0;
    for(let i=0; i<n; i++) {
        sum += i;
    }
    console.log(sum);
}
getSum(10);

//6
let str = ['hi', 'hello']
function concat_arr(str) {
    let result;
    for (const string of str) {
        result += str[i];
    }
    return result;
}

//7
let greet = 'hello'; //global scope
function changeGreet() {
    let greet = 'namaste'; //local scope
    console.log(greet);
    function innerGreet() {
        console.log(greet); //lexical scope
    }
}
console.log(greet);
changeGreet();



//building my own function from mdn webdocs
alert("this is a message");

function displayMessage(msgText, msgType) {
    //selects the body element by using DOM api 
    //(gets the body property of the global document object)
    //and assigning it to the a constant variable 'body'
    const body = document.body;
    //creates a new div element
    //assigns it to the a constant variable 'panel'
    //and adds the 'class' attribute with the value'msgBox' to it
    //then appends the 'panel' to the 'body' element using the 'appendChild' method
    const panel = document.createElement("div");
    panel.setAttribute("class", "msgBox");
    body.appendChild(panel);
    //creates a new paragraph element
    //assigns it to the a constant variable 'msg'
    //then assigns the text content to it with the value "This is a message box"
    //then appends the 'msg' to the 'panel' element using the 'appendChild' method
    //the 'textContent' property is used instead of 'innerHTML' because it preserves the text formatting in the input string,
    //while 'innerHTML' can escape HTML special characters and remove them when setting the textContent property. 
    const msg = document.createElement("p");
    msg.textContent = msgText;
    panel.appendChild(msg);
    //add a close button to the panel and create a new button element
    // and assign it to a constant variable 'closeBtn'
    //then assign the text content with the value "x"
    //then append the 'closeBtn' to the 'panel' element using the 'appendChild' method
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "x";
    panel.appendChild(closeBtn);
    //the 'addEventListener' method is used to add an event listener to the button,
    //which when clicked, will remove the panel from the DOM using the 'removeChild' method.
    //add the 'displayMessage' function as the event listener callback function for the 'click' event of the 'closeBtn' element.
    closeBtn.addEventListener("click", () =>
      panel.parentNode.removeChild(panel),
    );
}

const btn = document.querySelector("button");
btn.addEventListener("click", () =>
    displayMessage("Woo, this is a different message!"),
  );

displayMessage("Your inbox is almost full — delete some mails", "warning");
displayMessage("Brian: Hi there, how are you today?", "chat");