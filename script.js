// function setup() {
//     createCanvas(400, 400);
// }
// function draw() {
//     background(220);
// }
// function preload() {
//     console.log("Window is loaded");
// }
// var clickCount = 0;
// function clickHandler(evt) {
//     clickCount++;
//     console.log(evt);
//     var str = "Thanks for clicking " + clickCount;
//     this.innerText = str;
// }
// var p = document.getElementById("pElement");
// p.addEventListener("click", clickHandler);
// function mouseClicked() {
//     console.log(mouseX, mouseY);
// }
// function keyPressed() {
//     console.log(key);
//  }

// function main() {
//     var socket = io();
//     var chatDiv = document.getElementById('chat');
//     var input = document.getElementById('message');
//     var button = document.getElementById('submit');
 
//     function handleSubmit(evt) {
//         var val = input.value;
//         if (val != "") {
//             socket.emit("send message", val);
//         }
//     }
//     button.onclick = handleSubmit;
//     function handleMessage(msg) {
//         var p = document.createElement('p');
//         p.innerText = msg;
//         chatDiv.appendChild(p);
//         input.value = "";
// }

// socket.on('display message', handleMessage);
// } 

// window.onload = main;   



