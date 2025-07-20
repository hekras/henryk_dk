window.addEventListener('load', function() {
      var mouse = {x:0, y:0};
      const canvas = document.getElementById('id99-canvas');
      const dc = canvas.getContext('2d', {
        willReadFrequently: true
      });
 //     console.log(dc)
      canvas.width = window.innerWidth-10;
      canvas.height = window.innerHeight-10;

    
      class ParticleSmily{
        constructor(x,y){
          this.x = x;
          this.y = y;
          this.tick = 50;
          this.off = false;
        }
        draw(){
          
          dc.font = Math.floor(this.tick) +"px Arial";
          dc.fillStyle = 'yellow';
          dc.fillText('🥶', this.x, this.y);
        }
        update(){
          this.tick -= 0.2;
          if (this.tick <= 1){
            this.off = true;
          }
        }
      }
      class ParticleSne{
        constructor(x,y,gap,color){
          this.x = x;
          this.y = y;
          this.gap = gap;
          this.color = '#ffffff';
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
          if ((this.x<0)||(this.y<0)||(this.x>canvas.width)||(this.y>canvas.height)){
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
          if ((this.x<0)||(this.x>canvas.width)||(this.y>canvas.height)||(this.y<0)){
            this.off = 'true';
          }
        }
      }


      const madebytext = "Christmas, December 11th 2023";

      let state = 0;
      let tick;
      let madebytextXpos = canvas.width;
      let angle1 = 0;

      var smilys = [];
      var explosion = [];
      var partiklerbg = [];
      for(var a=0; a< 20; a++){
          partiklerbg.push(new Particle(canvas.width*Math.random(),canvas.height*Math.random()/2, 15+Math.random()*25, 5*Math.random()));
      }
      var partiklersne = [];


      function animate() {
        dc.fillStyle = "#000000ff";
        dc.fillRect(0,50- 30,canvas.width, 45);

        var gradient = dc.createLinearGradient(0, 0, 0, 50);
        gradient.addColorStop(0, 'green');
        gradient.addColorStop(0.5, 'blue');
        gradient.addColorStop(1, 'green');
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

        if(partiklersne.length < 20){
          partiklersne.push(new ParticleSne(canvas.width*Math.random(),0));
        }

        if(partiklerbg.length < 20){
          partiklerbg.push(new Particle(canvas.width*Math.random(),canvas.height*Math.random()/2, 15+Math.random()*25, 5*Math.random()));
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
          dc.font = "40px Arial";
          dc.fillText('👀',radius1-20,canvas.height - 2*(50 + 100 + 150));
          dc.fillStyle = "#000000";

          for(var a=-5;a<3;a++){
            dc.fillText('.', radius1 + (a*6) + 3*Math.cos(angle1*15 + a), canvas.height - 2*(50 + 100 + 150)+20 + 3*Math.cos(angle1*15 + a));
          }

          dc.fillStyle = "#000000";
          dc.beginPath();
          var yoff = canvas.height - 2*(50 + 100 + 150) + 80;
          for(var a=0;a<6;a++){
            var x = radius1; 
            var y = yoff + a*65 + 10*Math.cos(angle1*10+a*0.9);
            var gap = 15;
            dc.moveTo(x+gap,y)
            dc.arc(x, y, gap, 0, 6.28);
          }
          dc.fill();
          dc.closePath();

          for(x = 0;x<canvas.width;x++){
            dc.putImageData(fromdata[x],x,60+50*Math.sin(x/100+angle1));
          }
          angle1 -=0.001;

          partiklersne.forEach( e =>{
            e.draw();
            e.update();
          });

          for(i = 0; i< smilys.length; i++){
            const e = smilys[i];
            e.draw();
            e.update();
            if ( e.off == true){
              smilys.splice(i,1);
            }
          };



          dc.strokeStyle = '#ff0000';
          dc,lineWidth = 5;
          dc.beginPath();
          dc.moveTo(mouse.x+30, mouse.y,);
          dc.arc(mouse.x, mouse.y, 30, 0, 6.28);
          dc.stroke();
          dc.closePath();
  
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
        for(i = 0; i< partiklerbg.length; i++){
          var e = partiklerbg[i]
          var dist = Math.pow(e.x - mouse.x,2) + Math.pow(e.y - mouse.y,2);
          if (dist < 900){
            for(j=0;j<200;j++){
              explosion.push(new ParticleEx(e.x - 30 + 60*Math.random(),e.y - 30 + 60*Math.random()));
            }
            partiklerbg.splice(i,1);
          }
        };

        for(i = 0; i< partiklersne.length; i++){
          var e = partiklersne[i]
          var dist = Math.pow(e.x - mouse.x,2) + Math.pow(e.y - mouse.y,2);
          if (dist < 200){
              smilys.push(new ParticleSmily(e.x, e.y));
              partiklersne.splice(i,1);
          }
        };
    });
  });