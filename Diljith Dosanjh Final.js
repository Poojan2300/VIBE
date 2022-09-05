
let songnumber = 0;
let audioElement = new Audio('1.mp3');
let play = document.getElementById('play');
let musicbar = document.getElementById('musicbar');
let song = document.getElementById('song');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs3 = [
    {song: " Do You Know", filePath: "1.mp3"},
    {song: "Peaches", filePath: "/2.mp3"},
    {song: "Proper Patola", filePath: "../songs/songs-Diljith/3.mp3"},
    {song: "Lover", filePath: "../songs/songs-Diljith/4.mp3"},
    {song: "G.O.A.T", filePath: "../songs/songs-Diljith/5.mp3"},
    
]

songItems.forEach((element, i)=>{ 
    element.getElementsByClassName("song")[0].innerText = songs3[i].song; 
})
 

// Handle play/pause click
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
    musicbar.value = progress;
})

musicbar.addEventListener('change', ()=>{
    audioElement.currentTime = musicbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songnumber = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs3/${songnumber+1}.mp3`;
        song.innerText = songs3[songnumber].song;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        play.classList.remove('fa-play-circle');
        play.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songnumber>=4){
        songnumber = 0
    }
    else{
        songnumber += 1;
    }
    audioElement.src = `/${songnumber+1}.mp3`;
    song.innerText = songs3[songnumber].song;
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
    audioElement.src = `/${songnumber+1}.mp3`;
    song.innerText = songs3[songnumber].song;
    audioElement.currentTime = 0;
    audioElement.play();
    play.classList.remove('fa-play-circle');
    play.classList.add('fa-pause-circle');
})