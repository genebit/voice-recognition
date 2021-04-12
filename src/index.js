const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition();
recognition.continuous = true;

let startButton = document.getElementById('start-button');
let stopButton = document.getElementById('stop-button');
let status = document.getElementById('status');

startButton.onclick = function () {
     status.innerHTML = "Status: Listening";
     recognition.start();
}
stopButton.onclick = function () {
     status.innerHTML = "Status: Stopped Listening";
     recognition.stop();
}
recognition.onresult = function (event) {
     var result = event.results[0][0].transcript;
};