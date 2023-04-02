const uPaddle = document.getElementById('upaddle');
const gameBox = document.getElementById('plot');
var wpress = false;
var spress = false;
console.log(uPaddle.offsetHeight);
console.log(plot.offsetHeight);
document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

function keyDownHandler(e) {
    if (e.key == 'w') {
        wpress = true;
    } else if (e.key == 's') {
        spress = true;
    }
}
function keyUpHandler(e) {
    if (e.key == 'w') {
        wpress = false;
    } else if (e.key == 's') {
        spress = false;
    }
}
function gameLoop() {
    if (wpress && uPaddle.offsetTop > 55) {
        uPaddle.style.top = uPaddle.offsetTop - 5 + "px";
    }
    if (spress && uPaddle.offsetTop < plot.offsetHeight - uPaddle.offsetHeight + 45) {
        uPaddle.style.top = uPaddle.offsetTop + 5 + "px";
    }
    requestAnimationFrame(gameLoop);
}

gameLoop();