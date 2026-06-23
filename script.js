const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01";
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = Array(Math.floor(columns)).fill(1);

function draw(){
ctx.fillStyle = "rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle = "#00ff88";
ctx.font = fontSize + "px monospace";

for(let i=0;i<drops.length;i++){
const text = letters[Math.floor(Math.random()*letters.length)];
ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize > canvas.height && Math.random()>0.98){
drops[i]=0;
}

drops[i]++;
}
}

setInterval(draw,40);

window.addEventListener("resize",()=>{
location.reload();
});
function copyEmail() {

    const email = document.getElementById("email");

    navigator.clipboard.writeText(email.value);

    alert("Email copiado al portapapeles");

}

document.getElementById("gmailBtn").addEventListener("click", function(e){

    e.preventDefault();

    const esMovil = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if(esMovil){
        window.location.href = "mailto:lautarobilinski01@gmail.com";
    }else{
        window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=lautarobilinski01@gmail.com",
            "_blank"
        );
    }

});
