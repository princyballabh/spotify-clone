console.log('Welcome to Spotify');
//variables initialize
let songindex=0;
let audioelement=new Audio('songs\ 1.mp3');
let masterplay= document.getElementById('masterplay');
let progressbar= document.getElementById('progressbar');
let gif=document.getElementById('gif');
let songitem=Array.from(document.getElementsByClassName('songitem'));
let songs=[
    {songName:"Amplifier", filepath:"songs\ 1.mp3", coverpath:"cover.png"},
    {songName:"DesiKalakar", filepath:"songs\ 2.mp3", coverpath:"cover.png"},
    {songName:"Aao Milo Chale", filepath:"songs\ 3.mp3", coverpath:"cover.png"},
    {songName:"Bom Diggy Diggy", filepath:"songs\ 4.mp3", coverpath:"cover.png"},
    {songName:"Dil Dhadakane Do", filepath:"songs\ 5.mp3", coverpath:"cover.png"},
    {songName:"Ude dil befikre", filepath:"songs\ 6.mp3", coverpath:"cover.png"},
    {songName:"Hawaiyen", filepath:"songs\ 7.mp3", coverpath:"cover.png"}
];
songitem.forEach((element,i)=>{
    element.getElementsByClassName("songname")[0].innerText=songs[i].songName;
})
//audioelement.play();
 
//handle play/pause
masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0)
    {
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
audioelement.addEventListener('timeupdate',()=>{
    console.log('time update');
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    console.log('progress')
    progressbar.value=progress;
})
progressbar.addEventListener('change', ()=>{
audioelement.currentTime=progressbar.value*audioelement.duration/100;

})
const makeallplays= ()=>{
    Array.from(document.getElementsByClassName('songsitemsplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        mastername.innerText=songs[songindex].songName;
    })
}
Array.from(document.getElementsByClassName('songitemsplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplays();
        gif.style.opacity=1;
        mastername.innerText=songs[songindex].songName;
        songindex=parseInt(e.target.id);
        console.log(e.target);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioelement.src= `songs/${songindex+1}.mp3`;
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if (songindex>=9)
    {
        songindex=0;
    }
    else{
        songindex+=1;
    }
    audioelement.src= `songs/${songindex+1}.mp3`;
    mastername.innerText=songs[songindex].songName;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})
document.getElementById('prev').addEventListener('click',()=>{
    if (songindex<=0)
    {
        songindex=0;
    }
    else{
        songindex-=1;
    }
    audioelement.src= `songs/${songindex+1}.mp3`;
    mastername.innerText=songs[songindex].songName;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})