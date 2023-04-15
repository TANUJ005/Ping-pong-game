const uPaddle = document.getElementById('upaddle');
const gameBox = document.getElementById('plot');
const cPaddle = document.getElementById('cpu-paddle');
var ball = document.getElementById('ball');
var wpress = false;
var spress = false;
var opress = false;
var lpress = false;
document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);
var x = 5;
var y = 3;
var rV = Math.sqrt(Math.pow(x,2) + Math.pow(y ,2));
console.log(ball.offsetWidth)
function keyDownHandler(e) {
    if (e.key == 'w') {
        wpress = true;
    } else if (e.key == 's') {
        spress = true;
    }
    else if(e.key == 'o'){
        opress = true;
    }
    else if(e.key == 'l'){
        lpress = true;
    }
}
function keyUpHandler(e) {
    if (e.key == 'w') {
        wpress = false;
    } else if (e.key == 's') {
        spress = false;
    }
    else if (e.key == 'o') {
        opress = false;
    }
    else if (e.key == 'l') {
        lpress = false;
    }
}
function gameLoop() {
    if(ball.offsetLeft < 0 ){
        x = -x;
    }
    if(ball.offsetLeft > gameBox.offsetWidth - ball.offsetWidth){
        x =-x;
    }
    if(ball.offsetTop < 0 ){
        y = -y;
    }
    if(ball.offsetTop > gameBox.offsetHeight - ball.offsetHeight){
        y =-y;
    }
    ball.style.left = ball.offsetLeft + x + "px";
    ball.style.top = ball.offsetTop + y +"px";
    



    if (wpress && uPaddle.offsetTop > 55) {
        uPaddle.style.top = uPaddle.offsetTop - 5 + "px";
    }
    if (spress && uPaddle.offsetTop < plot.offsetHeight - uPaddle.offsetHeight + 45) {
        uPaddle.style.top = uPaddle.offsetTop + 5 + "px";
    }
    if (opress && cPaddle.offsetTop > 55) {
        cPaddle.style.top = cPaddle.offsetTop - 5 + "px";
    }
    if (lpress && cPaddle.offsetTop < plot.offsetHeight - cPaddle.offsetHeight + 45) {
        cPaddle.style.top = cPaddle.offsetTop + 5 + "px";
    }
    
    requestAnimationFrame(gameLoop);
}

gameLoop();