/*
 * Copyright (C) 2012 David Geary. This code is from the book
 * Core HTML5 Canvas, published by Prentice-Hall in 2012.
 *
 * License:
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation files
 * (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * The Software may not be used to create training material of any sort,
 * including courses, books, instructional videos, presentations, etc.
 * without the express written consent of David Geary.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
*/

var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    //animateButton = document.getElementById('animateButton'),
    robo1 = new Image(),
    robo2 = new Image(),
    robo3 = new Image(),
    robo4 = new Image(),
    robo5 = new Image(),
    robotsizeX = 150,
    robotsizey = 300,
    runnerCells = [
      { left: 0,   top: 0, width: 47, height: 64 },
      { left: 55,  top: 0, width: 44, height: 64 },
      { left: 107, top: 0, width: 39, height: 64 },
      { left: 150, top: 0, width: 46, height: 64 },
      { left: 208, top: 0, width: 49, height: 64 },
      { left: 265, top: 0, width: 46, height: 64 },
      { left: 320, top: 0, width: 42, height: 64 },
      { left: 380, top: 0, width: 35, height: 64 },
      { left: 425, top: 0, width: 35, height: 64 },
    ],
    sprite = new Sprite('runner', new SpriteSheetPainter(runnerCells)),
    interval,
    ammount,
    lastAdvance = 0,
    paused = false,
    height = window.innerHeight;
    width = window.innerWidth;
    PAGEFLIP_INTERVAL = 100;

// Functions.....................................................


function drawBackground() {
  	   // Get the canvas element form the page
	   var canvas = document.getElementById("canvas");

	   // Make a 2D context
	   var ctx = canvas.getContext("2d");

	   //resize the canvas to occupy the full page

	  // Get the widow width and height
    var W = window.innerWidth;
	  var H = window.innerHeight;

	   // Set the same to the canvas
     canvas.width = W;
	   canvas.height = H;
     ctx.fillStyle = "#00f05f";// this is the color for the background
           //ctx.fillstyle ='black'
	   ctx.fillRect(0,0,W,H);
           ctx.fillStyle = '#fff';



}

function pauseAnimation() {
   animateButton.value = 'Animate';
   paused = true;
}

function startAnimation() {
   animateButton.value = 'Pause';
   paused = false;
   lastAdvance = 0;
   window.requestNextAnimationFrame(animate);
}

// Draw................................................

function draw(withAnchors, withBorders,degrees) {
    // Get the canvas element form the page
    var canvas = document.getElementById("canvas");

    // Make a 2D context
    var ctx = canvas.getContext("2d");
    // clear the canvas
    ammount += 0.1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();

    ctx.translate(robo1X + robotsizeX/2, robo1Y + robotsizey/2);


    ctx.rotate((degrees * Math.PI / 180));


    ctx.translate(-(robo1X + robotsizeX/2), -(robo1Y + robotsizey/2));

    // draw the image
    ctx.drawImage(robo1,robo1X,robo1Y,robotsizeX,robotsizey);
    //Regain rotation
    ctx.restore();

    //ctx.drawImage(robo2,0,0 ,robotsizeX,robotsizey);

    // optionally draw the draggable anchors
    if (withAnchors) {
        drawDragAnchor(imageX, imageY);
        drawDragAnchor(imageRight, imageY);
        drawDragAnchor(imageRight, imageBottom);
        drawDragAnchor(imageX, imageBottom);
    }

    // optionally draw the connecting anchor lines
    if (withBorders) {
        ctx.beginPath();
        ctx.moveTo(imageX, imageY);
        ctx.lineTo(imageRight, imageY);
        ctx.lineTo(imageRight, imageBottom);
        ctx.lineTo(imageX, imageBottom);
        ctx.closePath();
        ctx.stroke();
    }

}


// Animation.....................................................

var degrees = 0;
  function dance(){
    //robo1Y += 1;
    //robo1X += 1;
    degrees += 1;
    console.log(degrees);

    //robo1X += 1;
    draw(false,false, degrees);
  }
// Initialization................................................


 robo1.src = 'Robot1.png';
robo1.onload = function(e) {
   //context.drawImage(robo1, robo1X, robo1Y, robotsizeX,robotsizey);
   setTimeout(function() {
       setInterval(function() {
         dance();
       },50)
     }, 0);

};
 robo2.src = 'Robot2.png';
robo2.onload = function(e) {
   //context.drawImage(robo2, 10, 0,robotsizeX,robotsizey);
};
 robo3.src = 'Robot3.png';
robo3.onload = function(e) {
   //context.drawImage(robo3, 20, 0,robotsizeX,robotsizey);
};
 robo4.src = 'Robot4.png';
robo4.onload = function(e) {
   //context.drawImage(robo4, 30, 0,robotsizeX,robotsizey);
};
 robo5.src = 'Robot5.png';
robo5.onload = function(e) {
   //context.drawImage(robo5, 40, 0,robotsizeX,robotsizey);
};

var robo1X = 100;
var robo1Y = 100;

sprite.left = 200;
sprite.top = 100;

context.strokeStyle = 'lightgray';
context.lineWidth = 0.5;

drawBackground();
