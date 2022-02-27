
window.onload = () => {

    window.audioSource = document.querySelector('#audioSource');
    let playBtn = document.querySelector('#playBtn');
    let durationField =  document.querySelector('.total');
    let currentField =  document.querySelector('.current');
    let liner = document.querySelector('.liner');
    
    // console.dir(audioSource);
    let musicPlaying = null;


    const getTime = time => {
        let hour = Math.floor(time / ( 60 * 60))
        time = time % (60 * 60 );
        let minute = Math.floor(time / 60);
        let sec = Math.ceil(time % 60);

        return `${hour ? hour + ':' : ''}${minute}:${sec}`;
    }

    const updateLiner = (src) => {
        let current = src.currentTime;
        let total = src.duration;
        let width = Math.round(current / total * 100);
        liner.style.width = `${width}%`;
    }

    const updateTimer = (src) => {
        durationField.innerHTML = getTime(src.duration);
        currentField.innerHTML = getTime(src.currentTime);
    }
    

    const playMusic = () => {
        if(audioSource.paused){

            audioSource.play();
            playBtn.innerHTML = '<i class="fas fa-pause"></i>'
            musicPlaying  = setInterval( () => {
                // console.dir(audioSource);
                updateLiner(audioSource);
                updateTimer(audioSource);
            }, 100)
           
        }else{
            audioSource.pause();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
            clearInterval(musicPlaying);
            musicPlaying = null;
            
        }
    }

    durationField.innerHTML = getTime(audioSource.duration);
    liner.style.width = 0;
    
    playBtn.addEventListener('click' , playMusic)
    
    // audioSource.addEventListener('playing', e => {
    //     console.log(e);
    // })

    window.addEventListener('keypress', e => {
        console.log(e.key);
        if(e.key === ' '){
            playBtn.click();
        }
    })

    
}




