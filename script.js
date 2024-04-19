const pre = document.getElementById("pre");

document.addEventListener("mousemove",(e)=>{
    moveElement(e,pre);
})
function moveElement(event,element){
    // get mouse position
    const x = event.clientX;
    const y = event.clientY;

    //get the middle value
    const middleX = window.innerWidth /2;
    const middleY = window.innerHeight /2;

    // offset from middle
    const offsetX = ((x - middleX) / middleX)* 45;
    const offsetY = ((y - middleY) / middleY)* 45;

    element.style.setProperty("--rotateX", -1 * offsetY + "deg");
    element.style.setProperty("--rotateY", offsetX + "deg");
};

const cursor = document.querySelector(".cursor");
var timeout;
document.addEventListener("mousemove",(e)=>{     
   
    let x = e.clientX;
    let y = e.clientY;
    
    
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";


    function mouseStopped(){
        cursor.style.display = "none"
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped,1300);
});

var clicked = false;
const playBtn = document.getElementById("audioBtn")


playBtn.addEventListener("click",()=>{
    document.getElementById("doom").play();
    clicked = true;
})


const playBtn2 = document.getElementById("audioBtn2");

playBtn2.addEventListener("click",()=>{
   document.getElementById("doom").pause();
   clicked = pause
});