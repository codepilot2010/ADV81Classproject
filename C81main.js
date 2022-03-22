var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

colour="cyan";

ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
colour=document.getElementById("colour").value;
console.log(colour)

mouse_x=e.clientX-canvas.offsetLeft;
mouse_y=e.clientY-canvas.offsetTop;

console.log("x= "+mouse_x+"and y= "+mouse_y);
circle(mouse_x,mouse_y);

}

function circle(mouse_x,mouse_y)
{
    ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=2;
ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
ctx.stroke();
}

function clearcanvas()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
