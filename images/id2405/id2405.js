window.addEventListener('load', function() {
      var mouse = {x:0, y:0, down: false};
      const canvas = document.getElementById('id2405-canvas');
      const dc = canvas.getContext('2d', {
        willReadFrequently: true
      });
 //     console.log(dc)
      canvas.width = window.innerWidth-10;
      canvas.height = window.innerHeight-10;

      var startangle = 0;

      function animate() {
        dc.fillStyle = "#000000ff";
        dc.fillRect(0,0,canvas.width, canvas.height);
        requestAnimationFrame(animate);

        var x = canvas.width/2;
        var y = canvas.height/2;
        var angle = startangle;
        startangle += 0.05;
        var dx = 20;
        var dy = 0;
        dc.beginPath();
        dc.lineWidth = 5;
        dc.strokeStyle = "white";
        var ddy = 20 * Math.sin(angle);
        var ddx = 20 * Math.cos(angle);
        dc.moveTo(x+ddx, y-ddy);
        var first = true;
        for(var i=0;i<60;i++){
          angle += 0.45;
          if (!first){
            dc.lineTo(x+dx+ddx,y-dy);
          }
          dy += 20;
          var ddy = 20 * Math.sin(angle);
          var ddx = 20 * Math.cos(angle);
          if (!first){
            dc.lineTo(x+dx+ddx,y+dy+ddy);
          }
          else{
            dc.moveTo(x+dx+ddx,y+dy+ddy);
            first = false;
          }
          dc.lineTo(x-dx-ddx,y+dy+ddy);
          dc.lineTo(x-dx-ddx,y-dy);
          dx += 20;
          if ((dx>canvas.width/2)&&(dy>canvas.height>2)) break;
        }
        dc.stroke();
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