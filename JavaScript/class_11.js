


// function initDate(){

//     let date = new Date();
//     // let minute = date.getMinutes();
//     // let second = date.getSeconds();
//     // let hour = date.getHours();

//     document.body.innerText = "";

//     // let localDate = date.toLocaleTimeString('bn-bd');

//     document.write(date.getTime());
// }


// initDate();

// setInterval(initDate, 1000);

// // getDate() -> 1 - 31;
// // getDay() -> 

// // console.dir(date.getDate());

let targetDate = new Date('23 Jan 2022');
let targetTime = targetDate.getTime();
let intrvl;

function getDifferance(target){
    let current = Date.now();
    let day = 0;
    let hour = 0;
    let minute = 0;
    let second = 0;

    let dif = target - current;

    if(dif > 0){
        day = Math.floor(dif / ( 24 * 60 * 60 * 1000 ) );
        dif %= ( 24 * 60 * 60 * 1000 ) ;
        
        hour = Math.floor(dif / (60 * 60 * 1000));
        dif %= (60 * 60 * 1000 ) ;
    
        minute = Math.floor(dif / (60 * 1000));
        dif %= (60 * 1000 ) ;
    
        second = Math.floor(dif / 1000);
    }else{
        clearInterval(intrvl);
    }
    

    document.body.innerText = "";

    document.write(`Day: ${day}, Hour: ${hour}, Minute: ${minute}, Second: ${second}`);


}

getDifferance(targetTime);

intrvl = setInterval(function(){
    getDifferance(targetTime);
}, 1000);

