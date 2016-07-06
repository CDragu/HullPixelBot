/*
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

  function draw(withAnchors, withBorders,robo1degrees) {
      // Get the canvas element form the page
      var canvas = document.getElementById("canvas");

      // Make a 2D context
      var ctx = canvas.getContext("2d");
      // clear the canvas
      ammount += 0.1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.save();

      ctx.translate(robo1X + robotsizeX/2, robo1Y + robotsizey/2);


      ctx.rotate((robo1degrees * Math.PI / 180));


      ctx.translate(-(robo1X + robotsizeX/2), -(robo1Y + robotsizey/2));

      // draw the image
      ctx.drawImage(robo1,robo1X,robo1Y,robotsizeX,robotsizey);
      //ctx.drawImage(robo2,robo2X,robo2Y,robotsizeX,robotsizey);
      //Regain rotation
      ctx.restore();

      //For the second robot


      ctx.save();

      ctx.translate(robo2X + robotsizeX/2, robo2Y + robotsizey/2);


      ctx.rotate((robo2degrees * Math.PI / 180));


      ctx.translate(-(robo2X + robotsizeX/2), -(robo2Y + robotsizey/2));

      // draw the image
      ctx.drawImage(robo2,robo2X,robo2Y,robotsizeX,robotsizey);
      //Regain rotation
      ctx.restore();


      //For the third robot
      ctx.save();

      ctx.translate(robo3X + robotsizeX/2, robo3Y + robotsizey/2);


      ctx.rotate((robo3degrees * Math.PI / 180));


      ctx.translate(-(robo3X + robotsizeX/2), -(robo3Y + robotsizey/2));

      // draw the image
      ctx.drawImage(robo3,robo3X,robo3Y,robotsizeX,robotsizey);
      //Regain rotation
      ctx.restore();


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
var robo1stages = 0;
  function dancerobo1(){
    //robo1Y += 1;
    //robo1X += 1;
    //degrees += 1;
    //console.log(degrees);

    if(robo1stages == 0){
      robo1Y++;
      //console.log(robo1Y);
      if(robo1Y > 40)
      robo1stages++;
    }
    if(robo1stages == 1){
      robo1degrees++;
      if(robo1degrees >= 90){
        robo1stages++;
      }
    }
    if(robo1stages == 2)
    {
      robo1X++;
      if(robo1X > 200)
      robo1stages++;
    }
    if(robo1stages == 3){
      robo1degrees--;
      if(robo1degrees <  1){
        robo1stages++;

      }
    }
    if(robo1stages == 4)
    {
      robo1Y--;
      if(robo1Y < 20)
      robo1stages++;
    }
    if(robo1stages == 5){
      robo1degrees--;
      //console.log(robo1degrees);
      if(robo1degrees <  -90 ){
        robo1stages++;

      }
    }
    if(robo1stages == 6)
    {
      robo1X--;
      if(robo1X < 100)
      robo1stages++;
    }
    if(robo1stages == 7){
      robo1degrees++;
      //console.log(robo1degrees);
      if(robo1degrees >=  0 ){
        robo1stages=1;

      }
    }
    //robo1X += 1;
    draw(false,false, robo1degrees);
  }

var robo2stages = 0;
  function dancerobo2(){

    if(robo2stages == 0){
      robo2degrees++;
      if(robo2degrees >= 135){
        robo2stages++;
      }
    }

    if(robo2stages == 1){
      robo2Y++;
      robo2X++;
      if(robo2Y > 650)
      robo2stages++;
    }
    if(robo2stages == 2){
      robo2degrees--;
      if(robo2degrees < 90){
        robo2stages++;
      }
    }
    if(robo2stages == 3)
    {
      robo2X++;
      if(robo2X > 1000)
      robo2stages++;
    }
    if(robo2stages == 4)
    {
      robo2degrees--;
      console.log(robo2Y);
      if(robo2degrees < 45){
        robo2stages++;
      }
    }
    if(robo2stages == 5){
      robo2X++;
      robo2Y--;
      if(robo2Y < 500)
        robo2stages++;
    }
    if(robo2stages == 6){
      robo2degrees++;
      console.log(robo2X);
      if(robo2degrees > 90){
        robo2stages++;
      }
    }
    if(robo2stages == 7){
      robo2X++;
      if(robo2X > 1250){
        robo2stages++;
      }
    }
    if(robo2stages == 8){
      robo2degrees--;
      if(robo2degrees == -90){
        robo2stages++;
      }
    }
    if(robo2stages == 9){
      robo2X--;
      if(robo2X < 1153){
        robo2stages = 6;
      }
    }
  }

  var robo3stages = 0;
    function dancerobo3(){
      if(robo3stages == 0){
        robo3degrees++;
        console.log(robo2X);
        if(robo3degrees > 90){
          robo3stages++;
        }
      }
      if(robo3stages == 1){
        robo3X++;
        if(robo3X > 1150){
          robo3stages++;
        }
      }
      if(robo3stages == 2){
        robo3degrees--;
        if(robo3degrees == -90){
          robo3stages++;
        }
      }
      if(robo3stages == 3){
        robo3X--;
        if(robo3X < 1000){
          robo3stages = 0;
        }
      }
    }

  // Initialization................................................


   robo1.src = 'Robot1.png';
  robo1.onload = function(e) {
     //context.drawImage(robo1, robo1X, robo1Y, robotsizeX,robotsizey);
     setTimeout(function() {
         setInterval(function() {
           dancerobo1();
         },50)
       }, 0);

  };
   robo2.src = 'Robot2.png';
  robo2.onload = function(e) {
     //context.drawImage(robo2, 10, 0,robotsizeX,robotsizey);
     setTimeout(function() {
         setInterval(function() {
           dancerobo2();
         },50)
       }, 0);
  };
   robo3.src = 'Robot3.png';
  robo3.onload = function(e) {
     //context.drawImage(robo3, 20, 0,robotsizeX,robotsizey);
     setTimeout(function() {
         setInterval(function() {
           dancerobo3();
         },50)
       }, 0);
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
  var robo1Y = 0;
  var robo1degrees = 0;

  var robo2X = 500;
  var robo2Y = 500;
  var robo2degrees = 0;

  var robo3X = 1000;
  var robo3Y = 10;
  var robo3degrees = 0;

  var robo4X = 100;
  var robo4Y = 100;
  var robo4degrees = 0;

  var robo5X = 100;
  var robo5Y = 100;
  var robo5degrees = 0;


//I do not know what is whit this things
  sprite.left = 200;
  sprite.top = 100;

  context.strokeStyle = 'lightgray';
  context.lineWidth = 0.5;

  drawBackground();
