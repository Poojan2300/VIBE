let songnumber = 0;
let audioElement = new Audio('../songs/songs-second-5/3.mp3');
let play = document.getElementById('play');
let myProgressBar = document.getElementById('myProgressBar');
let song = document.getElementById('song');
let songmains = Array.from(document.getElementsByClassName('songmain'));

let songs = [
    {song: "Kesariya", filePath: "../songs/songs-second-5/3.mp3" },
     
    
]


play.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        play.classList.remove('fa-play-circle');
        play.classList.add('fa-pause-circle');
        
    }
    else{
        audioElement.pause();
        play.classList.remove('fa-pause-circle');
        play.classList.add('fa-play-circle');
        
    }
})

audioElement.addEventListener('timeupdate', ()=>{ 
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('music')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('music')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songnumber = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songk1/${songnumber+1}.mp3`;
        song.innerText = songk1[songnumber].song;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        play.classList.remove('fa-play-circle');
        play.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songnumber>=0){
        songnumber = 0
    }
    else{
        songnumber += 1;
    }
    audioElement.src = `../songs/songs-second-5/.mp3`;
    song.innerText = songk1[songnumber].song;
    audioElement.currentTime = 0;
    audioElement.play();
    play.classList.remove('fa-play-circle');
    play.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songnumber<=0){
        songnumber = 0
    }
    else{
        songnumber -= 1;
    }
    audioElement.src = `../songs/songs-second-5/${songnumber+1}.mp3`;
    song.innerText = songk1[songnumber].song;
    audioElement.currentTime = 1;
    audioElement.play();
    play.classList.remove('fa-play-circle');
    play.classList.add('fa-pause-circle');
})
