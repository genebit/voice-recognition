
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition();
recognition.continuous = true;

let startButton = document.getElementById('start-button');
let stopButton = document.getElementById('stop-button');

startButton.onclick = function() {
     console.log("Listening...");
     recognition.start();
}
stopButton.onclick = function() {
     console.log("Recording Stopped.");
     recognition.stop();
}
