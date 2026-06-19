const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01";
const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = Array(Math.floor(columns)).fill(1);

/* MATRIX */
function draw(){
ctx.fillStyle = "rgba(0,0,0,0.06)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle = "#00ff88";
ctx.font = fontSize + "px monospace";

for(let i=0;i<drops.length;i++){
const text = letters[Math.floor(Math.random()*letters.length)];
ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize > canvas.height && Math.random()>0.975){
drops[i]=0;
}
drops[i]++;
}
}

setInterval(draw,30);

/* LOADER */
window.addEventListener("load",()=>{
setTimeout(()=>{
document.getElementById("loader").style.display="none";
},1200);
});

/* TYPING */
const title = document.querySelector(".typing");
const text = "Hola, soy Tu Nombre";
let i=0;

function type(){
if(i<text.length){
title.innerHTML += text.charAt(i);
i++;
setTimeout(type,80);
}
}

title.innerHTML="";
type();

/* SCROLL REVEAL */
const elements = document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{
elements.forEach(el=>{
const top = el.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
el.classList.add("active");
}
});
});

/* RESIZE */
window.addEventListener("resize",()=>{
location.reload();
});
