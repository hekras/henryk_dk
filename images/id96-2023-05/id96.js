window.addEventListener('load', function() {
    // canvas setup
      const canvas = document.getElementById('id96-canvas');
      const dc = canvas.getContext('2d', {
        willReadFrequently: true
      });
 //     console.log(dc)
      canvas.width = window.innerWidth-10;
      canvas.height = window.innerHeight-10;

      class Particle{
        constructor(x,y,gap,color){
          this.x = x;
          this.y = y;
          this.gap = gap;
          this.color = color;
          this.force = Math.random() + 0.5;
          this.angle = 0.57+Math.random()*2.0;
          this.vx = this.force * Math.cos(this.angle);
          this.vy = this.force * Math.sin(this.angle);
        }
        draw(){
          dc.fillStyle = this.color;
          dc.beginPath();
          dc.arc(this.x, this.y, this.gap, 0, 6.22);
          dc.fill();
          dc.closePath();
        }
        update(){
          this.x += this.vx;
          this.y += this.vy;
          if ((this.x<0)||(this.x>canvas.width)||(this.y>canvas.height)){
            this.x = canvas.width*Math.random();
            this.y = 0;
            this.gap = 2 + 8*Math.random();
            this.force = Math.random() + 0.5;
            this.angle = 0.57+Math.random()*2.0;
            this.vx = this.force * Math.cos(this.angle);
            this.vy = this.force * Math.sin(this.angle);
          }
        }
      }

      const madebytext = "henryk.dk, December 2023";

      let state = 0;
      let tick;
      let madebytextXpos = canvas.width;
      let angle1 = 0;

      var partiklerfg = [];
      var partiklerbg = [];
      for(var a=0; a< 100; a++){
          partiklerfg.push(new Particle(canvas.width*Math.random(),canvas.height*Math.random(), 4+Math.random()*6, "white"));
          partiklerbg.push(new Particle(canvas.width*Math.random(),canvas.height*Math.random(), 2+Math.random()*2, "white"));
      }

      function animate() {
        dc.fillStyle = "#000000";
        dc.fillRect(0,50- 30,canvas.width, 45);

        dc.fillStyle = "red";
        dc.font = "28px Russo One";
        dc.fillText(madebytext, madebytextXpos,50);
        madebytextXpos -= 0.5;
        if (madebytextXpos < -dc.measureText(madebytext).width-100){
          madebytextXpos = canvas.width + 100;
        }

        var fromdata = [];
        for(x = 0;x<canvas.width;x++){
          fromdata[x] = dc.getImageData(x,20,1,45);
        }

        dc.fillStyle = "#000040";
        dc.fillRect(0,0,canvas.width,canvas.height);

          partiklerbg.forEach(e => {
            e.draw();
            e.update();
          });

          dc.fillStyle = "#dddddd";
          dc.beginPath();
          var radius1 = canvas.width/2;
          var radius2 = canvas.height/2;
          var radius = (radius1 < radius2) ? radius1 : radius2;
          radius *= 0.8;
          var yoff = canvas.height - 2*(50 + 100 + 150);
          for(var a=1;a<4;a++){
            var x = radius1; 
            var y = yoff;//+ radius*Math.sin(6.22*tick/50 + a*3.14/3); 
            var gap = 50 * a;
            yoff += 2*gap+20;
            dc.moveTo(x+gap,y)
            dc.arc(x, y, gap, 0, 6.28);
          }
          dc.fill();
          dc.closePath();
          angle1 += 6.28/300;
          dc.fillRect(0,canvas.height - 150, canvas.width, 50);

          for(x = 0;x<canvas.width;x++){
            dc.putImageData(fromdata[x],x,60+50*Math.sin(x/100+angle1));
          }
          angle1 -=0.001;

          partiklerfg.forEach(e => {
            e.draw();
            e.update();
          });

          tick++;
          requestAnimationFrame(animate);

      }
      animate();
  
      window.addEventListener('resize', function(){
        canvas.width = window.innerWidth-10;
        canvas.height = window.innerHeight-10;
      });
  });