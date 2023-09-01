var mouseevent="";

var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");



canvas.addEventListener("mousedown",mymousedown);

function mymousedown(e){
    color= document.getElementById("cor").value;
    largura = document.getElementById("largura").value;
    mouseevent="mousedown";

}

canvas.addEventListener("mousemove", mymousemove);

function mymousemove(e){
    mouseXinicial=e.clientX - canvas.offsetLeft;
    mouseYinicial=e.clientY - canvas.offsetTop;

if(mouseevent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth = largura;
    ctx.moveTo(mouseXfinal, mouseYfinal);
    ctx.lineTo(mouseXinicial, mouseYinicial);
    ctx.stroke(); 
}
mouseXfinal=mouseXinicial;
mouseYfinal=mouseYinicial;
}
canvas.addEventListener("mouseup", mymouseup)

function mymouseup(e){
    mouseevent="mouseup";
}

function limparcanvas(){
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height)
}
novaTela = screen.width-70;
novaAltura = screen.height - 300;

if( width<992){
   document.getElementById("mycanvas").width=novaTela;
   document.getElementById("mycanvas").height=novaAltura;
document.body.style.overflow="hidden";

}
canvas.addEventListener("touchstart", mytouchstart);

function mymousemove(e){
    touchXinicial=e.touches[0].clientX - canvas.offsetLeft;
    touchYinicial=e.touches[0].clientY - canvas.offsetTop;
    color= document.getElementById("cor").value;
    largura = document.getElementById("largura").value;
}



canvas.addEventListener("touchmove", mytouchmove);

function mytouchmove(e){
    touchXfinal=e.clientX - canvas.offsetLeft;
    touchYfinaç=e.clientY - canvas.offsetTop;

if(mouseevent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth = largura;
    ctx.moveTo(mouseXfinal, mouseYfinal);
    ctx.lineTo(mouseXinicial, mouseYinicial);
    ctx.stroke(); 
}
mouseXfinal=mouseXinicial;
mouseYfinal=mouseYinicial;
}
   
