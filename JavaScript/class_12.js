// // // let arr = ['I', 'M', 'R', 'A', 'N']

// // // function checkLatter (l) {
// // //     return l == 'M';

// // // }

// // // console.log(arr.findIndex(checkLatter))
// // // console.log(arr.indexOf({age: 5}))

// // let arr = [
// //     {
// //         name: 'Imran',
// //         age: 25
// //     },
// //     {
// //         name: 'Alomgir',
// //         age: 12
// //     },
// //     {
// //         name: 'sudipto',
// //         age: 5
// //     }
// // ]

// // function check(a, b){
// //     console.log('OK')
// //     return b - a;
// // }

// // console.log(arr.findIndex(check))

// // let numbers = [11, 25, 120, 589, 745, 40]


// //  console.log(numbers.reverse())

// let names = ['Alamgir', 'papul', 'atik', 'anas', 'maruf', 'mustafizur', 'Jamil', 'roman', 'sudipta', 'imran'];

// // console.log(names.sort(function(a, b){
// //     return  a.length - b.length

// // }))

// // names.forEach(function(e){


// //     console.log(e)
// // })

// let numbers = [12, 16, 25, 98, 58];

// console.log(names.map(function(e){
//     if(e === 'sudipta'){
//         return `Sri Sri ${e}`;
//     }
//     return `Md. ${e}`;
// }))


let nameInput = document.getElementById('inp');
let nameOutput = document.getElementById('out');

function printName(){
    let name = nameInput.value;
    if(!name){
        return;
    }
    nameOutput.innerHTML += `<li>${name}</li>` ;
    nameInput.value = "";
}