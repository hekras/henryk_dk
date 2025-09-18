window.addEventListener('load', function() {
      var mouse = {x:0, y:0};
      const canvas = document.getElementById('id99-canvas');
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
          this.color = '#a0a000';
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

          dc.fillStyle = this.color;
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

      class ParticleEx{
        constructor(x,y){
          this.x = x;
          this.y = y;
          this.color = '#a0a000';
          this.force = 5 + Math.random() * 20.5;
          this.angle = 6.28*Math.random();
          this.vx = this.force * Math.cos(this.angle);
          this.vy = this.force * Math.sin(this.angle);
          this.off = 'false';
        }
        draw(){
          dc.fillStyle = this.color;
          dc.beginPath();
          dc.arc(this.x, this.y, 5, 0, 6.22);
          dc.fill();
          dc.closePath();
        }
        update(){
          this.x += this.vx;
          this.y += this.vy;
          if ((this.x<0)||(this.x>canvas.width)||(this.y>(canvas.height/2+10))||(this.y<0)){
            this.off = 'true';
          }
        }
      }

      class ParticleRay{
        constructor(x,y,angle){
          this.x = x;
          this.y = y;
          this.color = '#ffa000';
          this.force = 5 + Math.random() * 10.5;
          this.angle = angle;
          this.vx = this.force * Math.cos(this.angle);
          this.vy = this.force * Math.sin(this.angle);
          this.off = false;
        }
        draw(){
          dc.fillStyle = this.color;
          dc.beginPath();
          dc.arc(this.x, this.y, 5, 0, 6.22);
          dc.fill();
          dc.closePath();
        }
        update(){
          this.x += this.vx;
          this.y += this.vy;
          if ((this.x<0)||(this.x>canvas.width)||(this.y>canvas.height)||(this.y<0)){
            this.off = true;
          }
        }
      }
      
      const madebytext = "Christmas, December 13th 2023 - drunken shooting stars";

      let state = 0;
      let tick;
      let madebytextXpos = canvas.width;
      let angle1 = 0;

      var ray = [];
      var smilys = [];
      var explosion = [];
      var partiklerbg = [];
      var starCounter = 10;

      function animate() {
        dc.fillStyle = "#000000ff";
        dc.fillRect(0,0,canvas.width, 85);

        var gradient = dc.createLinearGradient(0, 0, 0, 50);
        gradient.addColorStop(0, 'green');
        gradient.addColorStop(0.5, 'blue');
        gradient.addColorStop(1, 'green');
        dc.fillStyle = gradient;
        dc.font = "60px Russo One";
        dc.fillText(madebytext, madebytextXpos,70);
        madebytextXpos -= 3.5;
        if (madebytextXpos < -dc.measureText(madebytext).width-100){
          madebytextXpos = canvas.width + 100;
        }

        var fromdata = [];
        for(x = 0;x<canvas.width;x++){
          fromdata[x] = dc.getImageData(x,0,1,70);
        }

        var gradient = dc.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, 'black');
        gradient.addColorStop(0.5, '#0040a0');
        gradient.addColorStop(1, 'black');
        dc.fillStyle = gradient;
        dc.fillRect(0,0,canvas.width,canvas.height);

        starCounter--;
        if((partiklerbg.length < 20)&&(starCounter < 1)){
          partiklerbg.push(new Particle(canvas.width*Math.random(),canvas.height*Math.random()/2, 15+Math.random()*25, 5*Math.random()));
          starCounter = 20;
        }

        partiklerbg.forEach(e => {
          e.draw();
          e.update();
        });

        for(i=0;i<explosion.length;i++){
          var e = explosion[i];
          e.draw();
          e.update();

          if (e.off == true){
            explosion.splice(i,1);
            found = true;
          }
        }

        ray.forEach(e =>{
          e.draw();
          e.update();

          for(i = 0; i< partiklerbg.length; i++){
            var star = partiklerbg[i]
            var dist = Math.pow(star.x - e.x,2) + Math.pow(star.y - e.y,2);
            if (dist < 900){
              for(j=0;j<200;j++){
                explosion.push(new ParticleEx(e.x - 30 + 60*Math.random(),e.y - 30 + 60*Math.random()));
              }
              e.off = true;
              partiklerbg.splice(i,1);
            }
          };
  
  

        });

        for(i=0;i<ray.length;i++){
          if (ray[i].off){
            ray.splice(i,1);
          }
        }

        angle1 += 0.05;

          for(x = 0;x<canvas.width;x++){
            dc.putImageData(fromdata[x],x,60+50*Math.sin(x/100+angle1));
          }
          angle1 -=0.001;

          for(i = 0; i< smilys.length; i++){
            const e = smilys[i];
            e.draw();
            e.update();
            if ( e.off == true){
              smilys.splice(i,1);
            }
          };

          dc.strokeStyle = '#ff0000';
          dc.lineWidth = 5;
          dc.beginPath();
          dc.moveTo(mouse.x+10, mouse.y);
          dc.lineTo(mouse.x-10, mouse.y);
          dc.moveTo(mouse.x, mouse.y-10);
          dc.lineTo(mouse.x, mouse.y+10);
          dc.stroke();
          dc.closePath();

          var y = canvas.height/2;
          for(i=1;i<canvas.height-2;i++){
            const mirror = dc.getImageData(0,y-i,canvas.width,1);
            dc.putImageData(mirror,i*Math.cos(i/20+angle1)/10,y+i);
            dc.putImageData(mirror,i*Math.cos(i/20+angle1)/10,y-i);
          }
          tick++;
          requestAnimationFrame(animate);

      }
      animate();
  
      window.addEventListener('resize', function(){
        canvas.width = window.innerWidth-10;
        canvas.height = window.innerHeight-10;
      });

      function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }

      canvas.addEventListener('mousemove', function(evt){
        mouse = getMousePos(canvas, evt);
      });
      
      canvas.addEventListener('mousedown', function(evt){
        mouse = getMousePos(canvas, evt);
        var angle = Math.atan2(mouse.y-canvas.height/2, mouse.x-canvas.width/2);
        ray.push(new ParticleRay(canvas.width/2, canvas.height/2, angle));
    });
  });