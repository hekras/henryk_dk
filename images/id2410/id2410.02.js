window.addEventListener('load', function() {
  var mouse = {x:0, y:0, down: false};
  const canvas = document.getElementById('id2410-canvas');
  const dc = canvas.getContext('2d', {
    willReadFrequently: true
  });

  const title = "Going shopping?"

  const wheel = [
    {
      id:1,
      text: "Strøget",
      fg: "white",
      bg: "red"
      },
      {
      id:2,
      text: "Købmagergade",
      fg: "white",
      bg: "green"
      },
      {
      id:3,
      text: "Fiolstræde",
      fg: "yellow",
      bg: "blue"
      },
      {
      id:4,
      text: "Magasin",
      fg: "white",
      bg: "purple"
      },
      {
      id:5,
      text: "Lyngby Centeret",
      fg: "black",
      bg: "yellow"
      },
      {
      id:6,
      text: "Rødovre Centeret",
      fg: "white",
      bg: "cyan"
      },
      {
      id:7,
      text: "Frederiksberg Centeret",
      fg: "white",
      bg: "gray"
      },
      {
      id:8,
      text: "Fisketorvet",
      fg: "yellow",
      bg: "blueviolet"
      },
      {
      id:9,
      text: "Fields",
      fg: "white",
      bg: "pink"
      },
      {
      id:10,
      text: "Amager Centeret",
      fg: "white",
      bg: "lightgray"
      },
      {
      id:11,
      text: "Waterfront Shoppingcenter",
      fg: "white",
      bg: "darkgreen"
      },
      {
      id:12,
      text: "Big",
      fg: "white",
      bg: "red"
      },
      {
      id:13,
      text: "Herlev centeret",
      fg: "white",
      bg: "green"
      },
      {
      id:14,
      text: "Ballerup centeret",
      fg: "yellow",
      bg: "blue"
      },
      {
      id:15,
      text: "Slotsarkaderne",
      fg: "white",
      bg: "purple"
      },
      {
      id:16,
      text: "Hørsholm Midtpunkt",
      fg: "black",
      bg: "yellow"
      },
      {
      id:17,
      text: "Glostrup Centeret",
      fg: "white",
      bg: "cyan"
      },
      {
      id:18,
      text: "Albertslund bymidte",
      fg: "white",
      bg: "gray"
      },
      {
      id:19,
      text: "City 2",
      fg: "yellow",
      bg: "blueviolet"
      },
];


var rotate = 0;
var rotatesfactor = 0; 
var statemachine = 0;
var timeout = 0;
var choice = -1;

function animate() {
  var width = canvas.width = window.innerWidth-10;
  var height = canvas.height = window.innerHeight-10;
  var dt = Math.min(width,height)/20;
  var draduis = dt*8;
  var dfontsize = Math.min(Math.floor(14 + 23 * draduis/500),33) + "px Russo One";

  dc.clearRect(0,0,width, height);

  switch(statemachine){
    case 0: //idle
      rotate += 0.01;
      if (mouse.down){
        statemachine = 1;
        do{
          rotatesfactor = Math.random();
        } while(rotatesfactor < 0.05);
      }
      break;
    case 1: // spin
      rotate += 0.5 * rotatesfactor;
      for(var i=0;i<wheel.length;i++){
        const pos = Math.floor(wheel.length*Math.random());
        [wheel[i], wheel[pos]] = [wheel[pos], wheel[i]];
      }

      if (!mouse.down){
        statemachine = 2;
      }
      break;
    case 2:
      rotate += 0.5 * rotatesfactor;
      rotatesfactor *= 0.995;
      if (rotatesfactor < 0.005){
        rotatesfactor = 0;
        statemachine = 3;
        timeout = 1000;
      }
      break;
    case 3:
      timeout--;
      if ((mouse.down)||(timeout<0)){
        statemachine = 4;
      }
      break;
    case 4:
      if (!mouse.down){
        statemachine = 0;
      }
      break;
  }

  dc.strokeStyle = "white";
  dc.lineWidth = 3;
  var nnn = wheel.length;

  const textXoff = (width > height) ? dt*10 + draduis + 80: dt; 
  const textYoff = (width > height) ? 0: dt*8 + draduis + 80; 
  const dline = Math.min(dt,(height - 2*dt) / nnn);

  choice = -1;

  for(var i=0; i<nnn; i++){
    var ang = rotate + 2* Math.PI * i / nnn;
    var ang2 = ang + Math.PI * 2 / nnn;

    var deg1 = Math.floor(360 * ang2 / 2 / Math.PI) % 360;
    if ( deg1 < 360 / nnn){
      choice = i;
    }
    var p1 = {x:dt*10 + draduis * Math.cos(ang),y:dt*10 + draduis * Math.sin(ang)};
    dc.beginPath();
    dc.moveTo(dt*10, dt*10);
    dc.lineTo(p1.x,p1.y);
    dc.arc(dt*10,dt*10,draduis,ang,ang2);
    dc.closePath();
    dc.fillStyle = wheel[i].bg;
    dc.fill();

    dc.fillStyle = wheel[i].fg;
    dc.font = dfontsize;
    dc.save();
    dc.translate(dt*10, dt*10);
    var ang = rotate + 6.28 * (i / nnn + 0.5/nnn);
    dc.rotate(ang);
    dc.fillText("" + wheel[i].id, draduis - 2*dt, dt/6);
    dc.restore();


    dc.fillStyle = "beige";
    dc.fillText(wheel[i].id + ": " + wheel[i].text, textXoff, textYoff + dline * wheel[i].id);
  }

  if (choice >= 0){
    dc.fillStyle = "pink";
    dc.fillText(wheel[choice].id + ": " + wheel[choice].text, textXoff, textYoff + dline * wheel[choice].id);
  }

  dc.strokeStyle = "beige";
  dc.lineWidth = 7;
  dc.beginPath();
  dc.arc(dt*10, dt*10, draduis, 0, 2*Math.PI);
  dc.closePath();
  dc.stroke();

  dc.fillStyle = "beige";
  dc.beginPath();
  dc.arc(dt*10, dt*10, dt, 0, 2*Math.PI);

  dc.moveTo(dt*10+draduis+50, dt*10 - 25);
  dc.lineTo(dt*10+draduis+50, dt*10 + 25);
  dc.lineTo(dt*10+draduis-50, dt*10);
  dc.closePath();
  dc.fill();

  dc.fillText(title, dt, dt);

  requestAnimationFrame(animate);
}
animate();

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

canvas.addEventListener('touchstart', function(evt){
  mouse.down = true;
});

canvas.addEventListener('touchend', function(evt){
  mouse.down = false;

});
});