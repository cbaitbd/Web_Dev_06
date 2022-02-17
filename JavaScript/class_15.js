
let ball = document.querySelector('#inner');
let food = document.querySelector('#food');
let scoreField = document.querySelector('#score');
let playbtn = document.querySelector('#playbtn');
let leftPos = 0;
let topPos = 0;
let direction = 1; // 1=>Right, 2=>left, 3=>down, 4=>up;
let foodLeft = 0;
let foodTop = 0;
let score = 0;
let timer = null;

let audio = new Audio('./music.mp3');

function printFood(){
    foodLeft = Math.round(Math.random() * 17) * 20;
    foodTop = Math.round(Math.random() * 17) * 20;

    food.style.left = foodLeft + 'px';
    food.style.top = foodTop + 'px';
}

function moveRight(){
    leftPos += 20;
    if(leftPos > 340){
        leftPos = 0;
    }
    ball.style.left = leftPos + 'px';
}

function moveLeft(){
    leftPos -= 20;
    if(leftPos < 0){
        leftPos = 340;
    }
    ball.style.left = leftPos + 'px';
}

function moveDown(){
    topPos += 20;
    if(topPos > 340){
        topPos = 0;
    }
    ball.style.top = topPos + 'px';
}

function moveUp(){
    topPos -= 20;
    if(topPos < 0){
        topPos = 340;
    }
    ball.style.top = topPos + 'px';
}

function move(){

    if(direction == 1){
        moveRight();
    }
    if(direction == 2){
        moveLeft();
    }

    if(direction == 3){
        moveDown();
    }
    if(direction == 4){
        moveUp();
    }

    collition();
}

function changeDirection(dir){
    direction = parseInt(dir);
}

function collition(){
    if(topPos == foodTop && leftPos == foodLeft){
        printFood();
        scoreField.innerText = ++score;
        audio.play();
    }
}

function start(elm){
    if(!timer){
       timer = setInterval(move, 500);
       elm.innerHTML = '&#x23F8;' // Pause Symbol
    }else{
        clearInterval(timer);
        timer = null;
        elm.innerHTML = '&#9654;' // Play Symbol
    }
}
printFood();


window.addEventListener('keydown', function(event){
    if(event.key === ' '){
        start(playbtn);
    }

    if(event.key === 'ArrowUp'){
        changeDirection(4);
    }
    if(event.key === 'ArrowDown'){
        changeDirection(3);
    }
    if(event.key === 'ArrowLeft'){
        changeDirection(2);
    }
    if(event.key === 'ArrowRight'){
        changeDirection(1);
    }
})


