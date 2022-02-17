let display = document.querySelector('.display');
let action = null;
let num1 = 0;
let actionClicked = false;

function printDisplay(number){
    let prev = display.innerText;

    if(actionClicked){
        prev = 0;
        actionClicked = false;
    }

    if(prev.length >= 12){
        alert("Limit Cross!!");
        return;
    }

    if(prev[0] == 0 && number != '.' && prev.indexOf('.' ) < 0){
        prev = '';
    }

    if(number == '.' && prev.indexOf('.') != -1){
        number = '';
    }

    display.innerText = prev + number;
}

function allClear(){
    display.innerText = 0;
}

function del(){
    let txt = display.innerText;
    txt = txt.substr(0, txt.length - 1);
    display.innerText = txt ? txt : 0;
}

function setAction(ac){
    action = ac;
    num1 = Number(display.innerText);
    actionClicked = true;
}


function calculate(){
    switch(action){
        case '+':
            add();
            break;
        default:
            return;

    }
    actionClicked = true;
}

function add(){
    let result = num1 + Number(display.innerText);
    display.innerText = result;
}