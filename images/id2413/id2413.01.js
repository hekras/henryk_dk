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
  
    function animate() {
      const center = {
        x: canvas.width/2,
        y: canvas.height/2
      };
        dc.fillStyle = "rgb(255,255,255)";
      dc.fillRect(0,0,canvas.width,canvas.height);
  
      const radius = 50 + 40 * Math.sin(tick/100);
      tick++;
  //    var d = 2+Math.floor(canvas.width / radius /2);
      var d = 101;
      var q = 21;
      const xoff = canvas.width/2 - d * radius;
      for(var dy=0; dy < q; dy++){
        const yoff = canvas.height/2 - q * radius;
        const yy = yoff + dy * radius*2 +radius;
        for(var dx = 0; dx < d; dx++){
          const xx = dx * radius*2 +radius;
          if ((xoff+xx-radius > -radius*2)&&(xoff+xx+radius < canvas.width)&&
              (yy-radius > -radius*2)&&(yy+radius < canvas.height))
          dc.fillStyle = "rgba(0,0,255,255)";
          dc.beginPath();
          dc.moveTo(xoff+xx, yy);
          dc.arc(xoff+xx, yy,radius,0,6.28);
          dc.closePath();
          dc.fill();
        }
      }
  
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