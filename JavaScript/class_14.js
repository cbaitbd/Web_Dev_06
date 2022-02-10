// let output = document.querySelector('#output');

// function changeValue(elm) {
//     output.innerText = elm.value;
// }


// let para = document.querySelector('#myP');
// let paras = document.querySelectorAll('p');

// para.innerHTML = 'Changed!';

// paras.innerHTML = "Something Changed!";

// console.log(paras[4].innerHTML = "Ja iccha tai");

// for(let i = 0; i < paras.length; i++){
//     paras[i].innerText = "All changed"
// }

// console.log(paras)

// let ball = document.querySelector('#inner');
// let leftPossition = 0;
// let topPossition = 0;

// function moveRight(){
//     leftPossition += 20;
//     if(leftPossition > 340){
//         leftPossition = 0;
//     }
//     ball.style.left = leftPossition + 'px';
// }

// function moveDown(){
//     topPossition += 20;
//     if(topPossition > 340){
//         topPossition = 0;
//     }
//     ball.style.top = topPossition + 'px';
// }

// function moveLeft(){
//     leftPossition -= 20;
//     if(leftPossition < 0){
//         leftPossition = 340;
//     }
//     ball.style.left = leftPossition + 'px';
// }

// function moveUp(){
//     topPossition -= 20;
//     if(topPossition < 0){
//         topPossition = 340;
//     }
//     ball.style.top = topPossition + 'px';
// }

let ball = document.querySelector('#inner');
let food = document.querySelector('#food');
let scoreField = document.querySelector('#score');
let leftPos = 0;
let topPos = 0;
let direction = 1; // 1=>Right, 2=>left, 3=>down, 4=>up;
let foodLeft = 0;
let foodTop = 0;
let score = 0;

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
    }
}

printFood()
setInterval(move, 500);