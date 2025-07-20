window.addEventListener('load', function() {
  var mouse = {x:0, y:0, down: false};
  const canvas = document.getElementById('id2408-canvas');
  const dc = canvas.getContext('2d', {
    willReadFrequently: true
  });

  var alienColors = ["#ff0000ff","#ffa000ff","#ffff00ff","#00f000ff","#0000f0ff","#f000f0ff","#a0a0a0ff","#000000ff"];
  var pickups = [
    { 
      letter: '☠️',
      letterColor: 'white',
      color: 'red',
      life: -1000,
      energy: 0,
    },
    { 
      letter: '😀',
      letterColor: 'white',
      color: 'green',
      life: 0,
      energy: +250,
    },
    { 
      letter: '❤️',
      letterColor: 'white',
      color: 'green',
      life: +50,
      energy: +50,
    },
  ];
//     console.log(dc)
  var width = canvas.width = window.innerWidth-10;
  var height = canvas.height = window.innerHeight-10;
  var yy = 100;
  alienColors.forEach(alienColor => {
    var yoff = yy;
    yy += 100;
    for(var i = 0; i < 16; i++){
      var xoff = 50 + i * 100;
      var angle = 6.28 * i / 16;
      dc.save();
      dc.translate(xoff, yoff);
//      dc.scale(5,5);
      dc.fillStyle = alienColor;
      dc.fillRect(5, 0, 40, 5);
      dc.fillRect(0, 5, 50, 45);
      var xx = 15 * Math.sin(angle);
      dc.fillRect(xx, 40, 20, 25);
      dc.fillRect(xx + 30, 40, 20, 25);
      dc.fillStyle = "rgb(255,255,255)";
      dc.fillRect(10, 10, 10, 20);
      dc.fillRect(30, 10, 10, 20);
      dc.fillStyle = "rgb(0,0,0)";
      dc.fillRect(10, 20, 5, 10);
      dc.fillRect(30, 20, 5, 10);
      dc.restore();
    }
  });
  
  var xx = 75;
  pickups.forEach(p =>{
    dc.fillStyle = p.color;
    dc.beginPath()
    dc.arc(xx, yy, 30, 0, 6.28);
    dc.fill();
    dc.closePath();
    dc.fillStyle = p.letterColor;
    dc.font = "33px Russo One";
    dc.fillText(p.letter, xx - dc.measureText(p.letter).width/2, yy+12);
    xx += 100;
  });
  
  var sprites = document.createElement("img");
  document.body.appendChild(sprites);
  sprites.src = canvas.toDataURL("image/png");
  sprites.style.display = "none";

  var tick = 0;
  var aliens = [];
  var lasers = [];
  var particles = [];
  var bombs = [];
  var energy = 850;
  var life = 850;
  var state = 0;
  var speed = {x: 2, y:2};
  var counter = 0;
  const MAX_HEIGHT = height - 100;
  const BOMB_FREQUENCY = 0.0001;

  function dropBombs(a, freq){
    if (Math.random() < freq){
      bombs.push({
        x: a.x + 41,
        y: a.y,
        dy: 3 + 10 * Math.random(),
        pickup: Math.floor(pickups.length * Math.random()),
      });
    }
  } 

  function animate() {
    dc.clearRect(0,0,width, height);

    switch(state){
      case 0:
        initAliens();
        state = 1;
        break;
      case 1:
        aliens.forEach(a => {
          a.x += speed.x;
          if (a.x > width - 90){
            state = 2;
            counter = 10;
          }
          dc.drawImage(sprites, 30+(Math.floor(tick/4)%16)*100, 100 + 100*a.ged, 82, 65, a.x, a.y, 82, 65);
          dropBombs(a, BOMB_FREQUENCY);
        });
        break;        
      case 2:
        var ymax = 0;
        aliens.forEach(a => {
          a.y += speed.y;
          ymax = Math.max(ymax, a.y);
          dc.drawImage(sprites, 30+(Math.floor(tick/4)%16)*100, 100 + 100*a.ged, 82, 65, a.x, a.y, 82, 65);
          dropBombs(a, BOMB_FREQUENCY);
        });
        counter--;
        if (counter == 0){
          state = 3;
        }
        if (ymax > MAX_HEIGHT){
          state = 5;
        }
      break;        
      case 3:
        aliens.forEach(a => {
          a.x -= speed.x;
          if (a.x < 10){
            state = 4;
            counter = 10;
          }
          dc.drawImage(sprites, 30+(Math.floor(tick/4)%16)*100, 100 + 100*a.ged, 82, 65, a.x, a.y, 82, 65);
          dropBombs(a, BOMB_FREQUENCY);
        });
        break;        
      case 4:
        var ymax = 0;
        aliens.forEach(a => {
          a.y += speed.y;
          ymax = Math.max(ymax, a.y);
          dc.drawImage(sprites, 30+(Math.floor(tick/4)%16)*100, 100 + 100*a.ged, 82, 65, a.x, a.y, 82, 65);
          dropBombs(a, BOMB_FREQUENCY);
        });
        counter--;
        if (counter == 0){
          state = 1;
        }
        if (ymax > MAX_HEIGHT){
          state = 5;
        }
      break;
      case 5:
        aliens.forEach(a => {
          dc.drawImage(sprites, 30+(Math.floor(tick/4)%16)*100, 100 + 100*a.ged, 82, 65, a.x, a.y, 82, 65);
        });
        break;        
    }
    tick++;
    dc.strokeStyle = "white";
//    dc.strokeRect(53,0,82,65);


    var x = Math.max(mouse.x, 80);
    x = Math.min(x, width-80);
    if (state != 5){

      dc.fillStyle = "white";
      dc.fillRect(x - 4, mouse.y - 60, 8, 50);
      dc.fillRect(x - 4, mouse.y + 10, 8, 50);
      dc.fillRect(x - 60, mouse.y - 4, 50, 8);
      dc.fillRect(x + 10, mouse.y - 4, 50, 8);

      var newbombs = [];
      bombs.forEach(b =>{
        dc.drawImage(sprites, 45 + b.pickup*100, 870, 60, 60, b.x, b.y, 60, 60);
        b.y += b.dy;
        if ((b.x > mouse.x - 120)&&(b.x < mouse.x + 60)&&(b.y > height - 140)&&(b.y < height-20)){
          life += pickups[b.pickup].life;
          energy += pickups[b.pickup].energy;
        }
        else if (b.x < height){
          newbombs.push(b);
        }
      });
      bombs = newbombs;

      dc.fillStyle = "yellow";
      var newlasers = [];
      lasers.forEach(e=>{
        dc.fillRect(e.x - 3, e.y, 6, 20);
        e.x += e.dx;
        e.y += e.dy;
        var newaliens = [];
        aliens.forEach(a =>{
          if ((e.x > a.x)&&(e.x < a.x+82)&&(e.y > a.y)&&(e.y < a.y+65)){
            energy += 50;
            dropBombs(a, 0.25);
            for(var i = 0; i<20; i++){
              var ang = 6.28 * Math.random();
              var vel = 0.5 + 10 * Math.random();
              particles.push({
                x: e.x + 82 * Math.random(),
                y: e.y + 65 * Math.random(),
                dx: vel * Math.cos(ang),
                dy: vel * Math.sin(ang),
                count: 100 * Math.random(),
              });
            }
            e.y = -10;
          }else{
            newaliens.push(a);
          }
        });
        aliens = newaliens;


        if (e.y > 0){
          newlasers.push(e);
        }
      });
      lasers = newlasers;

      var newparticles = [];
      dc.fillStyle = "yellow";
      dc.beginPath();
      particles.forEach(p => {
        dc.moveTo(p.x, p.y);
        dc.arc(p.x,p.y,5,0,6.28);
        p.x += p.dx;
        p.y += p.dy;
        p.count--;
        if ((p.x>0)&&(p.x<width)&&(p.y>0)&&(p.y<height)&&(p.count>0)){
          newparticles.push(p);
        }
      });
      dc.fill();
      dc.closePath();
      particles = newparticles;

      dc.fillStyle = "orange";
      dc.fillRect(x - 80, height - 80, 160, 50);
      dc.fillRect(x - 60, height - 90, 120, 10);


      if (mouse.down){
        if (energy > 20){
          lasers.push({
            x: x,
            y: height - 100,
            dx: 0,
            dy: -20,
          });
          energy -= 20;
        }
      }
    }

    energy++;
    energy = Math.min(850, energy);
    energy = Math.max(0, energy);

    life = Math.min(850, life);
    life = Math.max(0, life);

    dc.fillStyle = "orange";
    dc.font = "33px Russo One";
    var str = "SCORE 00000";
    dc.fillText(str, width - dc.measureText(str).width - 50, 50);
    dc.fillText("LIFE", 150 - dc.measureText("LIFE").width, 40);
    dc.fillText("ENERGY", 150 - dc.measureText("ENERGY").width, 70);
    dc.fillStyle = "red";
    dc.fillRect(160, 14, 100, 26);
    dc.fillRect(160, 45, 100, 26);
    dc.fillStyle = "yellow";
    dc.fillRect(260, 14, 250, 26);
    dc.fillRect(260, 45, 250, 26);
    dc.fillStyle = "green";
    dc.fillRect(510, 14, 500, 26);
    dc.fillRect(510, 45, 500, 26);
    
    dc.fillStyle = "#00000080";
    dc.fillRect(160 + energy, 45, 850 - energy, 26);

    dc.fillStyle = "#00000080";
    dc.fillRect(160 + life, 14, 850 - life, 26);

    requestAnimationFrame(animate);
  }
  animate();

  function initAliens(){
    for(var i=0;i<8;i++){
      for(var j=0;j<16;j++){
        var x = j * 80;
        var y = 100 + i * 80;
        var ged = Math.floor(8 * Math.random());
        aliens.push({
          x: x,
          y: y,
          ged: ged,
        });
      }
    }
  }

  window.addEventListener('resize', function(){
    canvas.width = window.innerWidth-10;
    canvas.height = window.innerHeight-10;
  });

  canvas.addEventListener('mousemove', function(evt){
    var rect = canvas.getBoundingClientRect();
      mouse.x = evt.clientX - rect.left;
      mouse.y = evt.clientY - rect.top;
  });
  
  canvas.addEventListener('mousedown', function(evt){
    mouse.down = true;
  });

  canvas.addEventListener('mouseup', function(evt){
    mouse.down = false;

  });
});