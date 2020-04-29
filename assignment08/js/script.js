window.addEventListener('load', () => {
    

    //YOUR CODE SHOULD START BELOW THIS LINE
 let  myClock = new Clock;    
myClock.startClock();
const clock = document.getElementById('clock');
const context = clock.getContext('2d');
let radius = clock.height / 2;
context.translate(radius, radius);
radius = radius * 0.90;
drawClock();

function drawClock(){
    drawFace(context, radius);
    drawNumbers(context, radius);
    drawTime(context, radius);
}
function drawFace(context, radius) {
    let grad;
    context.beginPath();
    context.arc(0, 0, radius, 0, 2 * Math.PI);
    context.fillStyle = 'white';
    context.fill();

    grad = context.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    context.strokeStyle = grad;
    context.lineWidth = radius * 0.1;
    context.stroke();

    context.beginPath();
    context.arc(0, 0, radius, 0, 2 * Math.PI);
    context.fillStyle = 'white';
    context.fill();
}

function drawNumbers(context, radius) {
    let ang;
    let num;
    context.font = radius * 0.15 + "px arial";
    context.textBaseline = "middle";
    context.textAlign = "center";

    for(num = 1; num < 13; num ++){
        ang = num * Math.PI / 6;
        context.rotate(ang);
        context.translate(0, -radius * 0.85);
        context.rotate(-ang);
        context.fillText(num.toString(), 0, 0);
        context.rotate(ang);
        context.translate(0, radius * 0.85);
        context.rotate(-ang);
    }
}

function drawTime(context, radius) {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    hour = hour %12;
    hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
    drawHand(context, hour, radius * 0.5, radius * 0.07);

    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    drawHand(context, minute, radius * 0.8, radius * 0.07);

    second = (second * Math.PI / 30);
    drawHand(context, second, radius * 0.9, radius * 0.02);
}

function drawHand(context, position, length, width) {
    context.beginPath();
    context.lineWidth = width;
    context.lineCap = "round";
    context.moveTo(0, 0);
    context.rotate(position);
    context.lineTo(0, -length);
    context.stroke();
    context.rotate(-position);
}


});