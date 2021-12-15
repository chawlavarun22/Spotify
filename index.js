//masterPlay = document.getElementById("masterPlay");
let myprogressBar = document.getElementById("myprogressBar");
let audioElement = new Audio("");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("col-md-3"));
let songIndex = 0;
let songItemPlay = document.getElementsByClassName("songItemPlay");
let you = document.getElementById("varun");


let songs = [
    {songName:"Chaka Chak Atrangi Re 320 Kbps.mp3" , FilePath:"1.mp3" , CoverPath:"chaka-chak-atrangi-re-500-500.jpg "},
    {songName:"Kusu Kusu.mp3" , FilePath:"2.mp3", CoverPath:"Kusu-Kusu-Satyameva-Jayate-2-500-500.jpg"},
    {songName:"Luv Ju Bunty Aur Babli 2 320 Kbps.mp3" , FilePath:"3.mp3" , CoverPath:"Luv-Ju-Bunty-Aur-Babli-2-500-500.jpg"},
    {songName:"Mehram Jersey 2021.mp3" , FilePath:"4.mp3" , CoverPath:"jersey-2021-500-500.jpg"},
    {songName:"Najaa Sooryavanshi 320 Kbps.mp3" , FilePath:"5.mp3" , CoverPath:"sooryavanshi-2021-500-500.jpg"},
    {songName:"Slow Slow Badshah 320 Kbps.mp3" , FilePath:"6.mp3" , CoverPath:"128Slow Slow - Badshah 128 Kbps.jpg"},
    {songName:"Tip Tip Sooryavanshi 320 Kbps.mp3" , FilePath:"7.mp3" , CoverPath:"sooryavanshi-2021-500-500.jpg"},
    {songName:"Tu Mera Ho Gaya Hai Tadap.mp3" , FilePath:"8.mp3" ,CoverPath:"tadap-2021-500-500.jpg"},
    {songName:"Tumse Bhi Zyada Tadap 320 Kbps.mp3" , FilePath:"9.mp3" ,CoverPath:"tadap-2021-500-500.jpg"}

]





songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src=songs[i].CoverPath;
    element.getElementsByTagName("span")[0].innerText=songs[i].songName;
    
});

/*masterPlay.addEventListener("click",  ()=>{
    if (audioElement.paused || audioElement.currentTIME <= 0
    ) {
       audioElement.play();
       masterPlay.classList.remove("fa-play-circle");
       masterPlay.classList.add("fa-pause-circle");
      
        
    }else{
        audioElement.pause();
        masterPlay.classList.add("fa-play-circle");
        masterPlay.classList.remove("fa-pause-circle");
        
    }
}); */ 





  

const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
          element.classList.remove("fa-pause-circle");  
          element.classList.add("fa-play-circle");
            
        })
    }
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        makeAllPlays();
       index = parseInt(e.target.id)
       audioElement.src=`${index}.mp3`;
       audioElement.currentTime=0;
       audioElement.play(); 
    })
})

Array.from(document.getElementsByClassName("varunChawla")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
     if (audioElement.paused || audioElement.currentTIME <= 0) {
        audioElement.play();
     } else {
        audioElement.pause();   
     }
        
    })
})





