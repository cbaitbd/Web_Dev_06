
// window.addEventListener('load', function(e){
//     console.dir(e);
// });


// window.addEventListener('mousemove', consolAlert);

// function consolAlert(e){
//     console.log(e.x, e.y);
// };

// window.onclick = function(e){
//     console.dir(e);
// }

let parent = document.querySelector('.parent');
let point = document.querySelector('.point');
let isHiden = true;

// parent.addEventListener('mousemove', function(e){

// 	point.style.top = (e.y - 10) + 'px';
// 	point.style.left = (e.x - 10) + 'px';

// });

parent.addEventListener('click', function(){
	
	if(isHiden){
		point.className = 'point show';
		isHiden = false;
	}else{
		point.className = 'point';
		isHiden = true;
	}
	
})

parent.addEventListener('mouseenter', function(){
	point.className = 'point show';
	isHiden = false;
})

parent.addEventListener('mouseout', function(){
	point.className = 'point';
	isHiden = true;
})











