window.addEventListener('load', function() {
  var mouse = {x:0, y:0, down: false};
  const canvas = document.getElementById('id2406-canvas');
  const dc = canvas.getContext('2d', {
    willReadFrequently: true
  });
//     console.log(dc)
  canvas.width = window.innerWidth-10;
  canvas.height = window.innerHeight-10;

  var startangle = 0;
  var img = new Image();
  img.src = "./p02.png";

  var statemachine = 0;
  var tick = 0;
  var angle = 0;
  var linex = 0;
  var liney = 0;
  var balls = [];


  function animate() {
    dc.fillStyle = "#000000ff";
    dc.fillRect(300,0,img.width*4, img.height*4);
    dc.fillStyle = "#00000010";
    dc.fillRect(0,600,img.width, img.height);

    dc.drawImage(img, 0, 0, img.width, img.height);

    if ((img.width>0)&&(img.height>0)){
      var iimageData = dc.getImageData(0, 0, img.width, img.height);
      var ipixels = iimageData.data;
      var oimageData = dc.getImageData(300,0,img.width*4, img.height*4);
      var opixels = oimageData.data;

      switch(statemachine){
        case 0:
          dc.strokeStyle = "#00ff00ff";
          dc.lineWidth = 2;
          dc.beginPath();
          dc.moveTo(150, 750);
          dc.lineTo(150+200*Math.cos(angle),750+200*Math.sin(angle) );
          dc.stroke();
          angle += 0.01;
          tick++;
          if (tick > 500){
            statemachine = 1;
            tick = 0;
          }
          break;
        case 1:
          tick++;
          if (tick > 50){
            statemachine = 2;
            tick = 0;
          }
          break;
        case 2:
          dc.strokeStyle = "#00ff00ff";
          dc.lineWidth = 10;
          dc.beginPath();
          dc.moveTo(150, 750);
          dc.lineTo(150+200*Math.cos(angle),750+200*Math.sin(angle) );
          dc.stroke();
          angle += 0.05;
          tick++;
          if (tick > 500){
            statemachine = 3;
            tick = 0;
          }
          break;
        case 3:
          tick++;
          if (tick > 50){
            statemachine = 4;
            tick = 0;
          }
          break;
        case 4:
          dc.lineWidth = 10;
          if ((tick % 10) === 0){
            dc.fillStyle = "#00ff00ff";
            var radius = 5 + Math.random() * 100;
            var x = Math.random() * 300;
            var y = Math.random() * 300;
            dc.beginPath();
            dc.arc(x,600+y,radius,0,6.28);
            dc.closePath();
            dc.fill();
          }
          tick++;
          if (tick > 500){
            statemachine = 5;
            tick = 0;
          }
          break;
        case 5:
          tick++;
          if (tick > 50){
            statemachine = 6;
            tick = 0;
            linex = 6.28 * Math.random();
            liney = 6.28 * Math.random();
          }
          break;
        case 6:
          dc.lineWidth = 10;
          var x = 150 + 150 * Math.cos(linex); 
          var y = 750 + 150 * Math.cos(liney); 
          dc.strokeStyle = "#00ff00ff";
          dc.beginPath();
          dc.moveTo(x,600);
          dc.lineTo(x,900);
          dc.moveTo(0,y);
          dc.lineTo(300,y);
          dc.stroke();
          linex += 0.01;
          liney += 0.01;
          tick++;
          if (tick > 500){
            statemachine = 7;
            tick = 0;
          }
          break;
        case 7:
          tick++;
          if (tick > 50){
            statemachine = 8;
            tick = 0;
          }
          break;
        case 8:
          if ((tick % 10) === 0){
            dc.lineWidth = 10+50*Math.random();
            var x1 = 300 * Math.random();
            var y1 = 600+300 * Math.random();
            var x2 = 300 * Math.random();
            var y2 = 600+300 * Math.random();
            dc.strokeStyle = "#00ff00ff";
            dc.beginPath();
            dc.moveTo(x1,y1);
            dc.lineTo(x2,y2);
            dc.stroke();
          }
          tick++;
          if (tick > 500){
            statemachine = 9;
            tick = 0;
          }
          break;
        case 9:
          tick++;
          if (tick > 50){
            statemachine = 10;
            tick = 0;
            balls = [];
            for(var i=0;i<20;i++){
              var ang = 6.28*Math.random();
              var vel = 0.2+4*Math.random();

              balls.push({
                x: 20+260*Math.random(),
                y: 20+260*Math.random(),
                dx: vel*Math.cos(ang),
                dy: vel*Math.sin(ang),
                r: 2 + 50 * Math.random(),
              });
            }
          }
          break;
        case 10:
          dc.fillStyle = "#00ff00ff";
          dc.beginPath();
          balls.forEach(e=>{
            dc.moveTo(e.x,e.y+600);
            dc.arc(e.x,e.y+600,e.r,0,6.28);
            e.x += e.dx;
            if ((e.x < 0)||(e.x>300)){
              e.dx = -e.dx;
            }
            e.y += e.dy;
            if ((e.y < 0)||(e.y>300)){
              e.dy = -e.dy;
            }
          });
          dc.fill();
          tick++;
          if (tick > 500){
            statemachine = 11;
            tick = 0;
          }
          break;
        case 11:
          tick++;
          if (tick > 50){
            statemachine = 0;
            tick = 0;
          }
          break;
        }
  
      var rimageData = dc.getImageData(0,600,img.width,img.height);
      var rpixels = rimageData.data;
      for(var y=0;y<img.height;y++){
        for(var x=0;x<img.width;x++){
          var i = 4*(y*img.width+x);
          var o = 4*(4*y*img.width*4+x*4);
          
          if (rpixels[i+1]>8){
            for(var j=0;j<4;j++){
              for(var k=0;k<4;k++){
                var oo = 4*j + o + k*img.width*4*4;
                opixels[oo] = ipixels[i];
                opixels[oo+1] = ipixels[i+1];
                opixels[oo+2] = ipixels[i+2];
                opixels[oo+3] = rpixels[i+1];
              } 
            }
          }
          else{
            rpixels[i] = rpixels[i+1] = rpixels[i+1] = rpixels[i+3] = 0;
          }
        }
      }
      dc.fillStyle = "#000000ff";
      dc.fillRect(0,0,img.width, canvas.height);
      dc.putImageData(oimageData, 300, 0);
      dc.putImageData(rimageData, 0, 600);
    }

    dc.fillStyle = "orange";
    dc.font = "33px Russo One";
    dc.fillText("Francoise Hardy, Germany 1966", 330, 1000);

    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener('resize', function(){
    canvas.width = window.innerWidth-10;
    canvas.height = window.innerHeight-10;
  });

  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
      mouse.x = evt.clientX - rect.left;
      mouse.y = evt.clientY - rect.top;
  }

  canvas.addEventListener('mousemove', function(evt){
    getMousePos(canvas, evt);
  });
  
  canvas.addEventListener('mousedown', function(evt){
    mouse.down = true;
  });

  canvas.addEventListener('mouseup', function(evt){
    mouse.down = false;

  });
});