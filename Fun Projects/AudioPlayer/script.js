let audioSource = document.querySelector('#audioSource');
let playBtn = document.querySelector('#playBtn');

console.dir(audioSource)


playBtn.addEventListener('click' , e => {

    if(audioSource.paused){
        audioSource.play();
    }else{
        audioSource.pause();
    }
})