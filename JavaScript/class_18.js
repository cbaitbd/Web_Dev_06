// let myelm = document.querySelector('#myelm');



// myelm.appendChild( makeButton('B 1') );
// myelm.appendChild( makeButton('B 2') );
// myelm.appendChild( makeButton('B 3') );
// myelm.appendChild( makeButton('B 4') );

// function changeColor(e){
//     e.target.style.backgroundColor = "red";
// }

// function clearColor(e){
//     e.target.style.backgroundColor = 'initial';
// }

// function makeButton(text) {
//     let btn = document.createElement('button');
//     btn.innerText = text;
//     btn.addEventListener('mouseover', changeColor)
//     btn.addEventListener('mouseout', clearColor);
//     return btn;
// }

// let nameInput = document.querySelector('#nameInput');
// let nameOutput = document.querySelector('#nameOutput');

// nameInput.addEventListener('keypress', function(e){
//     if(e.key === 'Enter'){
//         let name = e.target.value;

//         // name.length && insertName(name);
//         if(name.length){
//             insertName(name);
//         }
//         e.target.value = '';
        
//     }
// });

// function insertName(name){
//     let li = document.createElement('li');
//     let btn = document.createElement('button');
//     btn.innerText = 'x';
//     btn.style.marginLeft = '100px';

//     btn.addEventListener('click',function(e){

//         li.classList.add('anim');

//         setTimeout(function(){
//             li.remove();
//         }, 1000);
        
//     });
   

//     li.innerText = name;
//     li.style.transition = '1s';

//     li.appendChild(btn);
//     nameOutput.appendChild(li);
// }

let headline = document.querySelector('#headline');
let startbtn = document.querySelector('#startbtn');
let text = headline.innerText;
headline.innerText = '';

let timer = null;
let counter = 0;


startbtn.addEventListener('click', function() {

    if(timer){
        clearInterval(timer);
        timer = null;
        startbtn.innerHTML = "Resume"
    }else{
        startbtn.innerHTML = "Pause"
        timer = setInterval(function(){
           
            headline.innerText = text.substr(0, counter);
            if(counter == text.length){
                counter = -1;
            }
            counter++;

        }, 300)
    }
    
})

