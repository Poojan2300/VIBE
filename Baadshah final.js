 
let songIndex = 0;
let audioElement = new Audio('../songs/songs-Baadshah/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
 
let song = document.getElementById('song');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs2 = [
    {song: "Jugnu", filePath: "../songs/songs-Baadshah/1.mp3", coverPath: "covers/1.jpg"},
    {song: "Paani Paani", filePath: "../songs/songs-Baadshah/2.mp3", coverPath: "covers/2.jpg"},
    {song: "Akh Lad Jave", filePath: "../songs/songs-Baadshah/3.mp3", coverPath: "covers/3.jpg"},
    {song: " Voodo", filePath: "../songs/songs-Baadshah/4.mp3", coverPath: "covers/4.jpg"},
    {song: "She Move It Like", filePath: "../songs/songs-Baadshah/5.mp3", coverPath: "covers/5.jpg"},
    
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs2[i].coverPath; 
    element.getElementsByClassName("song")[0].innerText = songs2[i].song; 
})
 

 
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
         
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        
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
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs2/${songIndex+1}.mp3`;
        song.innerText = songs2[songIndex].song;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=4){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `../songs/songs-Baadshah/${songIndex+1}.mp3`;
    song.innerText = songs2[songIndex].song;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `../songs/songs-Baadshah/${songIndex+1}.mp3`;
    song.innerText = songs2[songIndex].song;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})