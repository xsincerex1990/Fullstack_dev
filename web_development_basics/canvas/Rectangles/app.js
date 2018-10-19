let canvas = document.querySelector('.myCanvas');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

// other context values you could choose webgl for WebGL, webgl2 for WebGL 2, etc
let ctx = canvas.getContext('2d');

 
// here it will show 50px away from top  & left; Remember "ctx.fillRect(0pxleft, 0pxtop, width, height);"
//the first two parameters are the coordinates of the rectangle's top left hand corner; the last two are the width and height you want the rectangle

// orange right
ctx.fillStyle = 'rgba(255, 104, 70)';
ctx.fillRect(300, 50, 100, 150);
//purple right
ctx.fillStyle = 'rgb(155, 25, 104)';
ctx.fillRect(275, 75, 100, 100);


//orange left
ctx.fillStyle = 'rgb(255, 104, 70)';
ctx.fillRect(50, 50, 100, 150);
// purple left
ctx.fillStyle = 'rgb(155, 25, 104)';
ctx.fillRect(75, 75, 100, 100);

//note the "a" for transparency the higher the value the more transparent.
//left pink bar
ctx.fillStyle = 'rgba(255, 0, 255, 0.75)';
ctx.strokeRect(100, 100, 250, 50);

