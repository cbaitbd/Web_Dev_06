// function log(ss){
//     console.log(ss);
// }

// Array

// let myArray = [5, 10, 36, 58, 69, 78];

// console.log(myArray[3])

// myArray[3] = 60;
// myArray[5] = 80;
// myArray[myArray.length] = 90;
// myArray[myArray.length] = 100;

// myArray.push(80)

// log(myArray)
// for(let i = 10; i > 0; i -= 3){
//     log(i);
// }
// let myArr = [];
// for(let i = 2; i <= 100; i += 2){
//     myArr.push(i);
// }


// log(myArr);

// function getOddOrEven(limit, isEven = true){
//     let result = [];
//     let start = 2;

//     if(isEven === false){
//         start = 1;
//     }

//     for(start; start <= limit; start +=2){
//         result.push(start)
//     }

//     return result
// }

// let odds = getOddOrEven(100, false);
// let evens = getOddOrEven(100)

// console.log(odds);
// console.log(evens);

// let total = 0;

// for(let i = 1; i <= 100; i++){
//     total += i;
// }

// console.log(total);

// break, continue


// for(let i = 1; i < 10; i ++){

//     if(i === 5){
//         continue;
//     }

//     console.log(i)
// }

// let i = 10;


// do {
//     console.log(i)
//     i++;    
// } while (i < 11);

// 5 * 1 = 5
// 5 * 2 = 10
// .....
// 5 * 10 = 50;

// let number = 15;

// for(let i = 1; i <= 10; i++){
//     console.log(`${number} * ${i} = ${number * i}`)
//     // console.log('' + number + ' * ' + i + ' = ' + (number * i));
// }