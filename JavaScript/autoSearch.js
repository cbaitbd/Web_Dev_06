// source collection
// keyword detection
// filler data
// show to the dom

// const keywordsField = document.querySelector('#keywordsField');
// const input = document.querySelector('#input');
// const data = [];
// const length = keywordsField.children.length;

// for(let i = 0; i < length; i++){
//     // data[i] = keywordsField.children[i].innerHTML
//     // or
//     data.push(keywordsField.children[i].innerHTML)
// }

// input.addEventListener('keyup', (e) => {
//     let word = e.target.value.toLowerCase().trim();
//     let fltrData = data;
//     if(word){
//         fltrData = data.filter( (w)=> {
//             const lw = w.toLowerCase();
//             return lw.includes(word)
//         })
//     }
//     keywordsField.innerHTML = '';

//     fltrData.forEach(w => {
//         keywordsField.innerHTML += `<li>${w}</li>`
//     })
// })


function getDiscount(per){
    return function (amount){
        return per / 100 * amount;
    };
};


// console.log(getDiscount(20, 500));

// console.log(getDiscount(20)(500))

let twentyDiscount = getDiscount(20);
let thirtyDiscount = getDiscount(30);


console.dir(twentyDiscount);
