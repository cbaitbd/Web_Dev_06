// let demand = 5000;
// let jamaidice = 500;

// if(demand == jamaidice){
//     console.log("Get Cut!!");
// }else{
//     console.log("Get Cutis Na!!");
// }
// let readline = require('readline');
// let rl = readline.createInterface(process.stdin, process.stdout);
// let ourNumber = Math.round(Math.random() * 100);

// function guessNumber() {

//     rl.question('Enter A Number. ', input => {
//         if (input == ourNumber) {
//             console.log("Yes! You Win!")
//             rl.close();
//         } else if (input > ourNumber) {
//             console.log("Sorry! You Guess Big!");
//             guessNumber();
//         } else if (input < ourNumber) {
//             console.log("Sorry! You Guess Small!");
//             guessNumber();
//         }

//         // console.log(input);
//     })
// }

// guessNumber();


function factor(number){
    let f = 1;
    if(number === 1){
        f = 1;
    }else{
        f = number * factor(number - 1);
    }

    console.log(number);

    return f;
}

// result 3 -> 3 * 2 * 1 = 6;

// 3! => 3 * 2 * 1;
// 4! => 4 * 3 * 2 * 1;

factor(10)








