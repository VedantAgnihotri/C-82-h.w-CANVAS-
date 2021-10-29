canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');

var last_position_y; 
var last_position_x;

color = 'red';
width = 2;

canvas.addEventListener('mousedown',mousedown);

function mousedown(e){
    mouse_event = 'mousedown';
}

canvas.addEventListener('mouseup',mouseup);

function mouseup(e){
    mouse_event = 'mouseup';
}

canvas.addEventListener('mousemove',mousemove);

function mousemove(e){
   currentX = e.clientX-canvas.offsetLeft;
   currentY = e.clientY-canvas.offsetTop;

   if (mouse_event == 'mousedown'){
       ctx.beginPath();
       ctx.lineWidth=width;
       ctx.moveTo(last_position_x,last_position_y);
       ctx.lineTo(currentX,currentY);

       circle(currentX,currentY);
   }

   last_position_y = currentY;
   last_position_x = currentX;
}

function circle(mousex,mousey){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=3;
    ctx.arc(mousex,mousey ,40,0,2*Math.PI);
    ctx.stroke();
};