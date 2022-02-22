// let headline = document.querySelector('#headline');
// let startbtn = document.querySelector('#startbtn');
// let text = headline.innerText;
// headline.innerText = '';

// let timer = null;
// let counter = 0;


// startbtn.addEventListener('click', function() {

//     if(timer){
//         clearInterval(timer);
//         timer = null;
//         startbtn.innerHTML = "Resume"
//     }else{
//         startbtn.innerHTML = "Pause"
//         timer = setInterval(function(){
           
//             headline.innerHTML += `<span style="color: ${getColor()}" >${text[counter]}</span>`;
//             if(counter == text.length){
//                 counter = -1;
//                 headline.innerHTML = ""
//             }
//             counter++;

//         }, 100)
//     }
    
// })

// function getColor(){
//     let red = Math.round(Math.random() * 255);
//     let green = Math.round(Math.random() * 255);
//     let blue = Math.round(Math.random() * 255);

//     return `rgb(${red}, ${green}, ${blue})`;
// }




// count.addEventListener('click', function(){
//     let p = para.value;
//     let words = p.split(' ');

//     output.innerHTML = "Words: " + words.length;
// })

// let obj = {
//     name: "Imran",
//     age: 29,
//     skills: [
//         'HTML', 'CSS', 'JS'
//     ]
// }

// let jsonString = `[
//     {
//       "word": "hello",
//       "phonetic": "həˈləʊ",
//       "phonetics": [
//         {
//           "text": "həˈləʊ",
//           "audio": "//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3"
//         },
//         {
//           "text": "hɛˈləʊ"
//         }
//       ],
//       "origin": "early 19th century: variant of earlier hollo ; related to holla.",
//       "meanings": [
//         {
//           "partOfSpeech": "exclamation",
//           "definitions": [
//             {
//               "definition": "used as a greeting or to begin a phone conversation.",
//               "example": "hello there, Katie!",
//               "synonyms": [],
//               "antonyms": []
//             }
//           ]
//         },
//         {
//           "partOfSpeech": "noun",
//           "definitions": [
//             {
//               "definition": "an utterance of ‘hello’; a greeting.",
//               "example": "she was getting polite nods and hellos from people",
//               "synonyms": [],
//               "antonyms": []
//             }
//           ]
//         },
//         {
//           "partOfSpeech": "verb",
//           "definitions": [
//             {
//               "definition": "say or shout ‘hello’.",
//               "example": "I pressed the phone button and helloed",
//               "synonyms": [],
//               "antonyms": []
//             }
//           ]
//         }
//       ]
//     }
//   ]`

//   let jsObj = JSON.parse(jsonString)

// console.log(JSON.stringify(obj));
// console.log(jsObj);

// let para = document.querySelector('#para');
// let count = document.querySelector('#count');
// let output = document.querySelector('#output');

// console.log(localStorage);

// let name = "Sudipta";
// let name2 = "Mustafiz";

// localStorage.setItem('s', name);
// localStorage.setItem('m', name2);

// let name = localStorage.getItem('m');

// localStorage.removeItem('m')
// console.log(localStorage);

// localStorage.clear();

let nameInput = document.querySelector('#nameInput');
let nameOutput = document.querySelector('#nameOutput');

nameInput.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        let name = e.target.value;

        // name.length && insertName(name);
        if(name.length){
            insertName(name);
            saveName(name);
        }
        e.target.value = '';
        
    }
});

function insertName(name){
    let li = document.createElement('li');
    let btn = document.createElement('button');
    btn.innerText = 'x';
    btn.style.marginLeft = '100px';

    btn.addEventListener('click',function(e){

        li.classList.add('anim');

        setTimeout(function(){
            li.remove();
            removeName(name)
        }, 1000);
        
    });
   

    li.innerText = name;
    li.style.transition = '1s';

    li.appendChild(btn);
    nameOutput.appendChild(li);
}

function saveName(newName){

    let names = localStorage.getItem('names') || '[]';
    names = JSON.parse(names);

    let jsonNames = JSON.stringify([...names, newName]);
    localStorage.setItem('names', jsonNames)
}

function removeName(name){
    let jNames = localStorage.getItem('names');
    let names = JSON.parse(jNames);

    names = names.filter(function(el){
        return el !== name;
    })

    localStorage.setItem('names', JSON.stringify(names));
    setNames();
}

function setNames(){
    nameOutput.innerHTML = "";
    let jNames = localStorage.getItem('names');

    if(jNames){
        let names = JSON.parse(jNames);

        names.forEach( function(name){
            insertName(name);
        })
    }
}

setNames();