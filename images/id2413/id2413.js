window.addEventListener('load', function() {
  var mouse = {x:0, y:0, down: false};
  const canvas = document.getElementById('id2413-canvas');
  const dc = canvas.getContext('2d', {
    willReadFrequently: true
  });
//     console.log(dc)
  canvas.width = window.innerWidth-10;
  canvas.height = window.innerHeight-10;
  var tick = 0;
  var textoff = 200;

  function animate() {
    const center = {
      x: canvas.width/2,
      y: canvas.height/2
    };
    dc.fillStyle = "rgb(255,255,255)";
    dc.fillRect(0,0,canvas.width,canvas.height);

    dc.fillStyle = "black";
    dc.font = "20px Russo One";
    dc.fillText("Scroller by henryk.dk, Denmark 2024", 10+textoff, 40);
    const imgData = dc.getImageData(10,25,500,20);

    dc.fillStyle = "rgb(255,255,255)";
    dc.fillRect(0,20,1000,25);


    const radius = 15 + 12 * Math.sin(tick/100);
    tick++;
    textoff -= (0.1 + 10/radius);
    if (textoff < -500) textoff = 200;
//    var d = 2+Math.floor(canvas.width / radius /2);
    var d = 101;
    var q = 21;
    dc.save();
    dc.translate(center.x+radius/2, center.y+radius/2);
    dc.rotate(tick/400);
    const xoff = canvas.width/2 - d * radius;
    for(var dy=-3; dy < 15; dy++){
      const yy = dy * radius*2 +radius;
      for(var dx = -134; dx < 135; dx++){
        const xx = dx * radius*2 +radius;
        pos = 4*((dy+4)*500+dx+134);
        const pix = imgData.data[pos]*imgData.data[pos+1]*imgData.data[pos+2];
        dc.fillStyle = (pix<200) ? "rgba(255,0,255,255)" : "rgba(0,0,255,255)";
        dc.beginPath();
        dc.moveTo(xx, yy);
        dc.arc(xx, yy,radius,0,6.28);
        dc.closePath();
        dc.fill();
      }
    }
    dc.restore();

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