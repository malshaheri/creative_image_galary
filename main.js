let content = document.querySelectorAll(".content li");
let bg = document.querySelector(".bg img");
let icon = document.querySelector(".fa-solid");
let audio = document.querySelector("audio");

content.forEach((el)=>{
    el.addEventListener("click", (e)=>{
        bg.src = e.target.dataset.image;
        audio.src = e.target.dataset.sound;
        icon.className = "fa-solid fa-pause";
    })
})

icon.onclick = ()=>{
   if(audio.src){
    if(icon.className == "fa-solid fa-play"){
        audio.play();
        icon,className = "fa-solid fa-pause"
    }else{
        audio.pause();
        icon,className = "fa-solid fa-play"
    }
   }else{
    alert("You have to click on sound track first");
   }
}