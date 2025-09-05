var video = document.getElementById("main-video");
console.dir(video);
console.log(Object.getOwnPropertyNames(HTMLVideoElement.prototype));

var playPausebtn = document.getElementById("play");
console.log(playPausebtn);
var stopbtn = document.getElementById("stop");
console.log(stopbtn);
var back10btn = document.getElementById("back10");
console.log(back10btn);
var back5btn = document.getElementById("back5");
console.log(back5btn);
var plus5btn = document.getElementById("forward5");
console.log(plus5btn);
var plus10btn = document.getElementById("forward10");
console.log(plus10btn);
var mutebtn = document.getElementById("mute");
console.log(mutebtn);
var volume = document.getElementById("volume");
console.log(volume);
var speed = document.getElementById("speed");
console.log(speed);
var fsBtn = document.getElementById("fullscreen");
console.log(fsBtn);

var seek =document.getElementById("seek");
console.dir(seek);
var time = document.getElementById("time");
console.log(time);


console.log(seek);



function formatTimeShort(seconds) {
    if (isNaN(seconds)) return "00:00";
    seconds = Math.floor(seconds);

    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    if (h > 0) {
        return `${h}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
    } else {
        return `${m}:${String(s).padStart(2,"0")}`;
    }
}


playPausebtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPausebtn.innerText="Pause";
        playPausebtn.style.backgroundColor="Red";
    }
    else {
        video.pause();
        playPausebtn.innerText="Play";
        playPausebtn.style.backgroundColor="darkcyan";
    }
    console.log(video.duration,typeof(video.duration));
    seek.max=video.duration;
});
video.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPausebtn.innerText="Pause";
        playPausebtn.style.backgroundColor="Red";
    }
    else {
        video.pause();
        playPausebtn.innerText="Play";
        playPausebtn.style.backgroundColor="darkcyan";
    }
    console.log(video.duration,typeof(video.duration));
    seek.max=video.duration;    
});
stopbtn.addEventListener('click',() => {
    video.pause();
    video.currentTime=0;
    seek.value = 0;
    playPausebtn.innerText="Play";
    playPausebtn.style.backgroundColor="darkcyan";
} );
back10btn.addEventListener('click', () => 
    video.currentTime = Math.max(0, video.currentTime - 10)
);
back5btn.addEventListener('click', () => 
    video.currentTime = Math.max(0, video.currentTime - 5)
);
plus5btn.addEventListener('click',()=>
    video.currentTime = Math.min(video.duration||0 , video.currentTime + 5 )
);
plus10btn.addEventListener('click',()=>
    video.currentTime = Math.min(video.duration||0 , video.currentTime + 10 )
);
video.addEventListener("timeupdate",()=>{    
    if(video.currentTime == video.duration ){
        video.pause();
        // video.currentTime=0;
        // seek.value = 0;
        playPausebtn.innerText="RePlay";
        playPausebtn.style.backgroundColor="darkcyan";
    }
    seek.value = video.currentTime;
    // console.log(seek.value);
    
    time.innerText=` ${formatTimeShort(video.currentTime)} / ${formatTimeShort(video.duration)} `;
});

seek.addEventListener("input",()=>{
    video.currentTime=seek.value;
});

mutebtn.addEventListener('click',() => {
    if(video.muted==false){
        video.muted=true;
        volume.value=0;
        mutebtn.innerText="Muted";
        mutebtn.style.backgroundColor="red";
    }
    else{
        video.muted=false;
        mutebtn.innerText="Mute";
        mutebtn.style.backgroundColor="darkcyan";
        if(video.volume != 0){
            volume.value=video.volume;
        }        
        else{
            video.volume=1;
            volume.value=video.volume;
        }
    }
});
volume.addEventListener('input', () => {
    console.log(volume.value);
    video.volume = parseFloat(volume.value);
    if(video.volume==0){
        video.muted=true;
        mutebtn.innerText="Muted";
        mutebtn.style.backgroundColor="red";
    }
    else{
        video.muted=false;
        mutebtn.innerText="Mute";
        mutebtn.style.backgroundColor="darkcyan";
    }
});

speed.addEventListener('change',()=>{
    video.playbackRate = speed.value;
    console.log(video.playbackRate);
});
fsBtn.addEventListener('click', () => {
    const container = video.parentElement;
    console.log(container);
    
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        if (container.requestFullscreen) container.requestFullscreen();
        else if (container.webkitRequestFullscreen) container.webkitRequestFullscreen(); // Safari
    }
});
video.addEventListener('dblclick', () => {
    const container = video.parentElement;
    console.log(container);
    
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        if (container.requestFullscreen) container.requestFullscreen();
        else if (container.webkitRequestFullscreen) container.webkitRequestFullscreen(); // Safari
    }
});