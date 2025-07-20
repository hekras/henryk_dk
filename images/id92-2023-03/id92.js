window.addEventListener('load', function() {
    // canvas setup
      const canvas = document.getElementById('id92-canvas');
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

      const madebytext = "Made by henryk.dk, December 2023";

      let state = 0;
      let tick;
      let madebytextXpos = canvas.width;

      var partiklerfg = [];
      var partiklerbg = [];
      for(var a=0; a< 800; a++){
          partiklerfg.push(new Particle(canvas.width*Math.random(),canvas.height*Math.random(), 4+Math.random()*6, "white"));
          partiklerbg.push(new Particle(canvas.width*Math.random(),canvas.height*Math.random(), 2+Math.random()*2, "white"));
      }

      function animate() {
        dc.fillStyle = "#000040";
        dc.fillRect(0,0,canvas.width,canvas.height);

          partiklerbg.forEach(e => {
            e.draw();
            e.update();
          });

          dc.fillStyle = "#000000";
          dc.fillRect(0,50- 30,canvas.width, 45);

          dc.fillStyle = "red";
          dc.font = "28px Russo One";
          dc.fillText(madebytext, madebytextXpos,50);
          madebytextXpos -= 0.5;
          if (madebytextXpos < -dc.measureText(madebytext).width-100){
            madebytextXpos = canvas.width + 100;
          }
  
          partiklerfg.forEach(e => {
            e.draw();
            e.update();
          });

          requestAnimationFrame(animate);
      }
      animate();
  
      window.addEventListener('resize', function(){
        canvas.width = window.innerWidth-10;
        canvas.height = window.innerHeight-10;
      });
  });