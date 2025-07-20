window.addEventListener('load', function() {
      var mouse = {x:0, y:0, down: false};
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
      class Alien{
        constructor(x,y,scale,angle,color){
          this.x = x;
          this.y = y;
          this.angle = angle;
          this.scale = scale;
          this.color = color;
        }
        draw(){
          dc.save();
          var s = 5;
          dc.translate(this.x, this.y); // center of window
          dc.scale(this.scale, this.scale);
          dc.rotate(this.angle);
          dc.fillStyle = this.color;
          dc.fillRect(-4 * s, -6 * s, 8 * s, 2 * s);
          dc.fillRect(-5 * s, -5 * s, 10 * s, 9 * s);
          var xx = s * 3 * Math.sin(angle1) - 5 * s;
          dc.fillRect(xx, 2 * s, 4 * s, 5 * s);
          dc.fillRect(xx + 6 * s, 2 * s, s * 4, s * 5);
          dc.fillStyle = "WHITE";
          dc.fillRect(-3 * s, -4 * s, 2 * s, 4 * s);
          dc.fillRect(1 * s, -4 * s, 2 * s, 4 * s);
          dc.fillStyle = "BLACK";
          dc.fillRect(-3 * s, -2 * s, s, 2 * s);
          dc.fillRect(1 * s, -2 * s, s, 2 * s);
          dc.restore();
        }
        update(){

        }
      }
      class MadeBy{
        constructor(text,x,y){
          this.text = text;
          this.speed = 1 + 5*Math.random();
          this.state = 0;
          this.x = x;
          this.y = y;
        }
        draw(){
          var gradient = dc.createLinearGradient(0, 0, 0, canvas.height);
          gradient.addColorStop(0, '#004000');
          gradient.addColorStop(0.5, '#808000');
          gradient.addColorStop(1, '#202020');
          dc.fillStyle = gradient;
          dc.font = "60px Russo One";
          dc.fillText(this.text, this.x,this.y);
        }
        update(){
          switch(this.state){
            case 0: // top right to left
            this.x -= this.speed;
              if (this.x < 20){
                this.state = 1;
              }
              break;
            case 1: // left top to bottom
            this.y += this.speed;
              if (this.y > canvas.height-100){
                this.state = 2;
              }
              break;
            case 2: // bottom left right
            this.x += this.speed;
              if (this.x > canvas.width - dc.measureText(this.text).width - 20){
                this.state = 3;
              }
              break;
            case 3: // right bottom to top
            this.y -= this.speed;
              if (this.y < 70){
                this.state = 0;
              }
              break;
          }
  
        }
      }
      class ParticleEx{
        constructor(x,y,color){
          this.x = x;
          this.y = y;
          this.color = color;
          this.force = 5 + Math.random() * 20.5;
          this.angle = 6.28*Math.random();
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
      class ParticleSnow{
        constructor(x,y){
          this.x = x;
          this.y = y;
          this.color = 'white';
          this.force = 0.2+Math.random();
          this.angle = 6.28*Math.random();
          this.vx = this.force * Math.cos(this.angle);
          this.vy = this.force * Math.sin(this.angle);
        }
        draw(){
          dc.fillStyle = this.color;
          dc.beginPath();
          dc.arc(this.x, this.y, this.force*3, 0, 6.22);
          dc.fill();
          dc.closePath();
        }
        update(){
          this.x += this.vx;
          this.y += this.vy;
          if ((this.x<0)||(this.x>canvas.width)||(this.y>canvas.height)||(this.y<-20)){
            this.y = -10;
            this.color = 'white';
            this.force = 0.2+Math.random();
            this.angle = 6.28*Math.random();
            this.vx = this.force * Math.cos(this.angle);
            this.vy = this.force * Math.sin(this.angle);
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
      
      let state = 0;
      let tick = 0;
      var madeby = [
        new MadeBy("December 21th 2023",canvas.width + 600, 140),
      ];
      /*
        new MadeBy("Glæde",canvas.width + 600, 210),
        new MadeBy("Hygge",canvas.width + 600, 280),
        new MadeBy("Juletræ",canvas.width + 600, 350),
        new MadeBy("Gaver",canvas.width + 600, 420),
        new MadeBy("Sne",canvas.width + 400, 140),
        new MadeBy("Julemad",canvas.width + 400, 210),
        new MadeBy("Julepynt",canvas.width + 400, 280),
        new MadeBy("Familie",canvas.width + 400, 350),
        new MadeBy("Nisse",canvas.width + 400, 420),
        new MadeBy("Julesang",canvas.width, 140),
        new MadeBy("Julestemning",canvas.width, 210),
        new MadeBy("Lys",canvas.width, 280),
        new MadeBy("Pebernødder",canvas.width, 350),
        new MadeBy("Risengrød",canvas.width, 420),
        new MadeBy("Juleaften",canvas.width + 800, 140),
        new MadeBy("Kærlighed",canvas.width + 800, 210),
        new MadeBy("Julekort",canvas.width + 800, 280),
        new MadeBy("Julekalender",canvas.width + 800, 350),
        new MadeBy("Snefnug",canvas.width + 800, 420),
        new MadeBy("Hjerter",canvas.width + 800, 490),
      ];
      */
      var alien = [];
      var pos = {x:50, y:50};

      let angle1 = 0;

      var snow = [];
      var bullit = [];
      var explosion = [];
      var explosion2 = [];
      var partiklerbg = [];
      var starCounter = 10;
      var love = {x: canvas.width/2-50, y:50, size:3, angle:3.14, mangle:3.14};
      var ycount = 0;
      var yspeed = 1;
      var xmax = 0;
      var xspeed = 5;

      function animate() {
        dc.fillStyle = "#000000ff";
        dc.fillRect(0,0,canvas.width, 85);

        var gradient = dc.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, 'black');
        gradient.addColorStop(0.5, '#0040a0');
        gradient.addColorStop(1, 'black');
        dc.fillStyle = gradient;
        dc.fillRect(0,0,canvas.width,canvas.height);

        /*
        var angle = tick / 2;
        dc.save();
        dc.translate(love.x, love.y); // center of window
        dc.rotate(love.mangle);
        var scale = love.size * (1 + Math.sin(love.angle + angle/100));
        dc.scale(scale, scale);
        dc.fillStyle = "#FF0000"; //gc.setFill(Color.RED); 
        dc.strokeStyle = "#FFFFFF"; //gc.setFill(Color.RED); 
        dc.lineWidth = 1;
        dc.beginPath();

        // init shape coordinates
        var dmyt = 6.0 / 20.0;
        var index = 0;
        for (var myt = -3.5; myt < 3; myt += dmyt) {
            var x = 18 * Math.pow(Math.sin(myt), 3);
            var y = 14 * Math.cos(myt) - 5 * Math.cos(2 * myt) - 3 * Math.cos(3 * myt) - Math.cos(4 * myt);
            dc.lineTo(x, y);
            index++;
        }
        dc.fill();
        dc.stroke();
        dc.restore();
        */

        starCounter--;
        if(snow.length < 200){
          snow.push(new ParticleSnow(Math.random()*canvas.width, -10));
        }

        if((partiklerbg.length < 20)&&(starCounter < 1)){
          partiklerbg.push(new Particle(canvas.width*Math.random(),3*canvas.height*Math.random()/4, 15+Math.random()*25, 5*Math.random()));
          starCounter = 20;
        }

        madeby.forEach(e => {
          e.draw();
          e.update();
        });

        partiklerbg.forEach(e => {
          e.draw();
          e.update();
        });

        alien.forEach(e => {
          e.draw();
          e.update();
        });

        switch(state){
          case 0:
              alien.push(new Alien(pos.x, pos.y,1,0,'red'));
              pos.x += 100;
              if (pos.x > 2*canvas.width/3){
                pos.x = 50;
                pos.y += 100;
              }
              if (pos.y > 2*canvas.height/3) {
                state = 1;
              }
            break;
          case 1:
            xmax = 0;
            alien.forEach(a=>{
              a.x += xspeed;
              xmax = Math.max(a.x, xmax);
            });
            if (xmax>canvas.width-50){
              state = 2;
              ycount = 30;
            }
            if (alien.length == 0){
              state = 0;
              pos = {x:50, y:50};
            }
            break;
          case 2:
            xmax = 0;
            alien.forEach(a=>{
              a.y += yspeed;
              xmax = Math.max(a.y, xmax);
            });
            ycount--;
            if (ycount == 0){
              state = 3;
            }
            if (xmax > canvas.height-80){
              state = 5;
                var r = 255*Math.random()|0,
                    g = 255*Math.random()|0,
                    b = 255*Math.random()|0;
                var color = 'rgb(' + r + ',' + g + ',' + b + ')';
                for(j=0;j<400;j++){
                  explosion2.push(new ParticleEx(mouse.x - 30 + 60*Math.random(),canvas.height - 60 + 60*Math.random(), color));
                }
            }
            if (alien.length == 0){
              state = 0;
              pos = {x:50, y:50};
            }
            break;
          case 3:
              xmax = canvas.width;
              alien.forEach(a=>{
                a.x -= xspeed;
                xmax = Math.min(a.x, xmax);
              });
              if (xmax<50){
                state = 4;
                ycount = 30;
              }
              if (alien.length == 0){
                state = 0;
                pos = {x:50, y:50};
              }
              break;
          case 4:
            xmax = 0
            alien.forEach(a=>{
              a.y += yspeed;
              xmax = Math.max(a.y, xmax);
            });
            ycount--;
            if (ycount == 0){
              state = 1;
            }
            if (xmax > canvas.height-80){
              state = 5;
                var r = 255*Math.random()|0,
                    g = 255*Math.random()|0,
                    b = 255*Math.random()|0;
                var color = 'rgb(' + r + ',' + g + ',' + b + ')';
                for(j=0;j<400;j++){
                  explosion2.push(new ParticleEx(mouse.x - 30 + 60*Math.random(),canvas.height - 60 + 60*Math.random(), color));
                }
            }
            if (alien.length == 0){
              state = 0;
              pos = {x:50, y:50};
            }
            break;
          case 5:
            if (alien.length>0){
              alien.splice(0,1);
            }
            else{
              state = 0;
              pos = {x:50, y:50};
            }
            break;
        }


        snow.forEach(e => {
          e.draw();
          e.update();
        });


        for(i=0;i<explosion.length;i++){
          var e = explosion[i];
          e.draw();
          e.update();
          if (e.off == true){
            explosion.splice(i,1);
          } 
        }

        bullit.forEach(e =>{
          e.draw();
          e.update();

          for(i = 0; i< alien.length; i++){
            var star = alien[i]
            var dist = Math.pow(star.x - e.x,2) + Math.pow(star.y - e.y,2);
            if (dist < 900){
              for(j=0;j<200;j++){
                explosion.push(new ParticleEx(e.x - 30 + 60*Math.random(),e.y - 30 + 60*Math.random()));
              }
              e.off = true;
              alien.splice(i,1);
            }
          };
        });

        for(i=0;i<bullit.length;i++){
          if (bullit[i].off){
            bullit.splice(i,1);
          }
        }

        for(i=0;i<explosion2.length;i++){
          var e = explosion2[i];
          e.draw();
          e.update();
          if (e.off == true){
            explosion2.splice(i,1);
          } 
        }

        angle1 += 0.05;
        if (explosion2.length == 0){
          dc.strokeStyle = '#00a000';
          dc.lineWidth = 5;
          dc.beginPath();
          dc.moveTo(mouse.x+30, mouse.y);
          dc.lineTo(mouse.x-30, mouse.y);
          dc.moveTo(mouse.x, mouse.y-30);
          dc.lineTo(mouse.x, mouse.y+30);
             dc.stroke();
          dc.closePath();

            dc.fillStyle = '#a0a0a0'; 
            dc.fillRect(mouse.x - 50, canvas.height-50, 100, 40);
            dc.fillRect(mouse.x - 3, canvas.height-60, 6, 10);

            /*
            if (mouse.down){
              var angle = -Math.atan2(mouse.x, 0);
              bullit.push(new ParticleRay(mouse.x, canvas.height-60, angle));
            }
            */
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
          mouse.x = evt.clientX - rect.left;
          mouse.y = evt.clientY - rect.top;
      }

      canvas.addEventListener('mousemove', function(evt){
        getMousePos(canvas, evt);
      });
      
      canvas.addEventListener('mousedown', function(evt){
        mouse.down = true;
        var angle = -Math.atan2(mouse.x, 0);
        bullit.push(new ParticleRay(mouse.x, canvas.height-60, angle));
      });

    canvas.addEventListener('mouseup', function(evt){
      mouse.down = false;

  });
});