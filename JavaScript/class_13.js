// let h1 = document.getElementsByTagName('h1');
// let clh = document.getElementsByClassName('myh');
// let inp = document.getElementsByName('something');

// // let h = document.querySelector('h1');
// let h = document.querySelectorAll('h1');

let display = document.getElementById("output");

// display.innerHTML = 'Display'

// display.innerHTML = '<h1>Display</h1>';
// display.style.color = 'red';
// display.style.fontSize = '2rem';

// console.dir(inp);

function changeColor(color) {
  // console.log(display);
  display.style.backgroundColor = color;
}

let red = 0;
let green = 0;
let blue = 0;

function inpColor(code, elm) {
  if (code == 1) {
    red = elm.value;
  }

  if (code == 2) {
    green = elm.value;
  }

  if (code == 3) {
    blue = elm.value;
  }

  display.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
