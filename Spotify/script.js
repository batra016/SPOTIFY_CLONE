console.log("Welcome To Spotify");

let songIndex = 0;
let audioElement = new Audio("musics/1.mp3");
let masterPlay = document.getElementById("play");
let progress = document.getElementById("progress");
let songsName = document.getElementById("songsName");
let gif = document.getElementById("gif");
let side = document.getElementsByClassName("sidePlay");

let songs = [
    {songName: ' Despacito', filepath: 'musics/1.mp3', coverPath: 'images/c1.png'},
    {songName: ' Shape Of You', filepath: 'musics/2.mp3', coverPath: 'images/c2.jpg'},
    {songName: ' Mercy', filepath: 'musics/3.mp3', coverPath: 'images/c3.jpg'},
    {songName: ' Let Me Love You', filepath: 'musics/4.mp3', coverPath: 'images/c4.png'},
    {songName: ' Daru Badnaam', filepath: 'musics/5.mp3', coverPath: 'images/c5.jfif'},
    {songName: ' Backbone', filepath: 'musics/6.mp3', coverPath: 'images/c6.jpg'},
    {songName: ' 3 Peg', filepath: 'musics/7.mp3', coverPath: 'images/c7.cms'},
    {songName: ' Brown Munde', filepath: 'musics/8.mp3', coverPath: 'images/c8.jfif'},
    {songName: ' High Rated Gabru', filepath: 'musics/9.mp3', coverPath: 'images/c9.jpg'}
]

masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=> {
    songProgress = parseInt(audioElement.currentTime / audioElement.duration *100);      // percent of song played
    progress.value = songProgress;
})

progress.addEventListener('change', ()=>{
    audioElement.currentTime = progress.value * audioElement.duration /100;
})

const allPlay = ()=>{
    Array.from(document.getElementsByClassName('sidePlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('sidePlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        allPlay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `musics/${songIndex+1}.mp3`;
        songsName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >= 8)
    {
        songIndex = 0;
    }
    else
    {
        songIndex = songIndex + 1;
    }
    audioElement.src = `musics/${songIndex+1}.mp3`;
    songsName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 0)
    {
        songIndex = 0;
    }
    else
    {
        songIndex = songIndex - 1;
    }
    audioElement.src = `musics/${songIndex+1}.mp3`;
    songsName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})
