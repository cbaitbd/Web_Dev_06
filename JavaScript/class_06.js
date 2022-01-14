// let names = [
//   "Jamil",
//   "Sudipto",
//   "Rizvi",
//   "Maruf",
//   "Anas",
//   "Arafat",
//   "Shams Mahmud",
//   "Alomgir",
//   "Papul",
//   "Imran",
// ];

// function getBigName(arr){
//     let bigName = arr[0];

//     for(let i = 1; i < arr.length; i++){

//         if(bigName.length <= arr[i].length){
//             bigName = arr[i];
//         }
//     }
//     return bigName;
// }

// console.log(getBigName(names))


function getGrade(number){

    // number > 100 ? number = 100 : number;
    // number < 0 ? number = 0 : number;

    if(number >= 80){
        return 'A+';
    }

    if(number >= 70){
        return 'A'
    }

    if(number >= 60){
        return 'A-'
    }

    if(number >= 50){
        return 'B'
    }

    if(number >= 40){
        return 'C'
    }

    if(number >= 33){
        return 'D'
    }

    return 'F';
   
}

console.log(getGrade(90))