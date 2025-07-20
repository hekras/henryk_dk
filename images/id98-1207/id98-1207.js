var mouse = {x:0, y:0};

window.addEventListener('load', function() {
    // canvas setup
      const canvas = document.getElementById('id98-canvas');
      const dc = canvas.getContext('2d', {
        willReadFrequently: true
      });
 //     console.log(dc)
      canvas.width = window.innerWidth-10;
      canvas.height = window.innerHeight-10;

      class Particle{
        constructor(x,y,gap,dangle){
          this.x = x;
          this.y = y;
          this.gap = gap;
          this.r1 = gap;
          this.r2 = gap*0.4;
          this.force = Math.random() + 0.5;
          this.dangle = dangle;
          this.angle = 0.57+Math.random()*2.0;
          this.vx = this.force * Math.cos(this.angle);
          this.vy = this.force * Math.sin(this.angle);
        }
        draw(){
          dc.fillStyle = 'white';
          dc.beginPath();
          var start_ang = 3.14*Math.sin((this.angle)/150);
          var ang=2*Math.PI+start_ang;
          dc.moveTo(3+this.x+this.r1*Math.cos(ang),3+this.y-this.r1*Math.sin(ang));
          for(var a=0;a<15;a+=2){
              var ang=2*Math.PI*a/14+start_ang;
              dc.lineTo(3+this.x+this.r1*Math.cos(ang),3+this.y-this.r1*Math.sin(ang));
              var ang=2*Math.PI*(a+1)/14+start_ang;
              dc.lineTo(3+this.x+this.r2*Math.cos(ang),3+this.y-this.r2*Math.sin(ang));
          }
          dc.fill();
          dc.closePath();

          dc.fillStyle = '#a0a000';
          dc.beginPath();
          var start_ang = 3.14*Math.sin((this.angle)/150);
          var ang=2*Math.PI+start_ang;
          dc.moveTo(this.x+this.r1*Math.cos(ang),this.y-this.r1*Math.sin(ang));
          for(var a=0;a<15;a+=2){
              var ang=2*Math.PI*a/14+start_ang;
              dc.lineTo(this.x+this.r1*Math.cos(ang),this.y-this.r1*Math.sin(ang));
              var ang=2*Math.PI*(a+1)/14+start_ang;
              dc.lineTo(this.x+this.r2*Math.cos(ang),this.y-this.r2*Math.sin(ang));
          }
          dc.fill();
          dc.closePath();

          
        }
        update(){
          this.angle += this.dangle;
        }
      }

      const madebytext = "Christmas, December 7th 2023";

      let state = 0;
      let tick;
      let madebytextXpos = canvas.width;
      let angle1 = 0;

      var partiklerbg = [];
      for(var a=0; a< 20; a++){
          partiklerbg.push(new Particle(canvas.width*Math.random(),canvas.height*Math.random()/2, 15+Math.random()*25, 5*Math.random()));
      }

      function animate() {
        dc.fillStyle = "#000000ff";
        dc.fillRect(0,50- 30,canvas.width, 45);

        var gradient = dc.createLinearGradient(0, 0, 0, 50);
        gradient.addColorStop(0, 'yellow');
        gradient.addColorStop(0.5, 'red');
        gradient.addColorStop(1, 'yellow');
        dc.fillStyle = gradient;
        dc.font = "28px Russo One";
        dc.fillText(madebytext, madebytextXpos,50);
        madebytextXpos -= 5.5;
        if (madebytextXpos < -dc.measureText(madebytext).width-100){
          madebytextXpos = canvas.width + 100;
        }

        var fromdata = [];
        for(x = 0;x<canvas.width;x++){
          fromdata[x] = dc.getImageData(x,20,1,45);
        }

        var gradient = dc.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, 'black');
        gradient.addColorStop(0.5, '#0040a0');
        gradient.addColorStop(1, 'black');
        dc.fillStyle = gradient;
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

          tick++;
          requestAnimationFrame(animate);

      }
      animate();
  
      window.addEventListener('resize', function(){
        canvas.width = window.innerWidth-10;
        canvas.height = window.innerHeight-10;
      });
  });