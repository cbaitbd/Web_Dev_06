
window.onload = () => {

    window.audioSource = document.querySelector('#audioSource');
    let playBtn = document.querySelector('#playBtn');
    let durationField =  document.querySelector('.total');
    let currentField =  document.querySelector('.current');
    let liner = document.querySelector('.liner');
    let progress = document.querySelector('.progress');
    let nextBtn = document.querySelector('#nextBtn');
    let prevBtn = document.querySelector('#prevBtn');
    
    // console.dir(audioSource);
    let musicPlaying = null;
    let playNumber = 1;

    const palyNext = () => {

        playNumber === 4 ? playNumber = 0 : null;

        playNumber += 1;
        if(!audioSource.paused){
            audioSource.pause();
        }

        audioSource.src = `./musics/0${playNumber}.mp3`;
        audioSource.currentTime = 0;

        playBtn.click();

    }

    const palyPrev = () => {
        playNumber === 1 ? playNumber = 5 : null;

        playNumber -= 1;
        if(!audioSource.paused){
            audioSource.pause();
        }

        audioSource.src = `./musics/0${playNumber}.mp3`;
        audioSource.currentTime = 0;

        playBtn.click();
    }

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

    progress.addEventListener('click', (e) => {
        let offsetX = e.offsetX;
        let totaltime = audioSource.duration;
        let parcent = offsetX / 180;
        let currentTime = totaltime * parcent;

        audioSource.currentTime = currentTime;
 
        liner.style.width = offsetX + 'px';
    })

    nextBtn.addEventListener('click', palyNext)
    prevBtn.addEventListener('click', palyPrev)

    window.addEventListener('keydown', e => {
        
        if(e.key == ' '){
            playBtn.click();
        }
        
        if(e.key == 'ArrowRight'){
            nextBtn.click();
        }
        
        if(e.key == 'ArrowLeft'){
            prevBtn.click();
        }
           
    })
}

const mutag = window.mutag;

fetch('./musics/01.mp3').then(res => {
    console.log(res);
})





// 355 sec
//  180 px
// 90px;

// 90 / 180 * 100 = 50% -> .5
// 355 * .5 => 175
