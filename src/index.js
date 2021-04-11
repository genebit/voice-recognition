
var startButton = document.getElementsByClassName('start-button');
var stopButton = document.getElementsByClassName('stop-button');


startButton.onclick = sayHello();

function sayHello() {
     console.log('Hello!');
}
console.log(startButton);

// stopButton.onclick = function() {
//      console.log("You clicked stop button");
// }
