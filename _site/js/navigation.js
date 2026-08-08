let pages=[];
let current=0;


window.addEventListener("DOMContentLoaded",()=>{


pages=[
...document.querySelectorAll(".page")
];


showPage(0);


document.querySelector(".nav-right")
.addEventListener("click",next);


document.querySelector(".nav-left")
.addEventListener("click",previous);


});


function showPage(i){

pages.forEach((page,index)=>{

page.style.display =
index===i ? "flex" : "none";

});


pages[i].classList.remove("fade");

void pages[i].offsetWidth;

pages[i].classList.add("fade");


current=i;

}



function next(){

if(current < pages.length-1){

showPage(current+1);

}

}



function previous(){

if(current>0){

showPage(current-1);

}

}



document.addEventListener(
"keydown",
(e)=>{

if(e.key==="ArrowRight")
next();


if(e.key==="ArrowLeft")
previous();


if(e.code==="Space")
next();

});



let startX=0;


document.addEventListener(
"touchstart",
(e)=>{

startX=e.changedTouches[0].screenX;

});


document.addEventListener(
"touchend",
(e)=>{

let endX=e.changedTouches[0].screenX;


if(startX-endX>50)
next();


if(endX-startX>50)
previous();


});