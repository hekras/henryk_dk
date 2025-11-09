window.addEventListener('load', function() {
  var mouse = {x:0, y:0, down: false};
  const canvas = document.getElementById('id2409-canvas');
  const dc = canvas.getContext('2d', {
    willReadFrequently: true
  });

  var wheel = [
    {
      text: "Utterslev mose",
      fg: "white",
      bg: "red"
    },
    {
      text: "Kongelundsfortet",
      fg: "white",
      bg: "green"
    },
    {
      text: "Kalvebod fælled",
      fg: "yellow",
      bg: "blue"
    },
    {
      text: "Stranden ved Valbyparken",
      fg: "white",
      bg: "purple"
    },
    {
      text: "Klampenborg til Lyngby",
      fg: "black",
      bg: "yellow"
    },
    {
      text: "Frederiksberg Svømmehal",
      fg: "white",
      bg: "cyan"
    },
    {
      text: "Helsingør",
      fg: "white",
      bg: "gray"
    },
    {
      text: "Roskilde",
      fg: "yellow",
      bg: "blueviolet"
    },
    {
      text: "Malmö",
      fg: "white",
      bg: "pink"
    },
    {
      text: "Lund",
      fg: "black",
      bg: "lightgreen"
    },
    {
      text: "Køge",
      fg: "white",
      bg: "lightgray"
    },
    {
      text: "Sandskulptur, Æbeltoft",
      fg: "white",
      bg: "darkgreen"
    },
  ];


  var width = canvas.width = window.innerWidth-10;
  var height = canvas.height = window.innerHeight-10;
  var left = Math.min(520, width/2);
  var rotate = 0;
  var rotatesfactor = 0; 
  var statemachine = 0;
  var timeout = 0;
  var choice = -1;

  function animate() {
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
        if (choice >= 0){
          dc.font = "33px Russo One";
          const w = dc.measureText(wheel[choice].text).width;
          dc.fillText(wheel[choice].text, left - w/2, height/2 - 505);
        }
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

    choice = -1;

    for(var i=0; i<nnn; i++){
      var ang = rotate + 2* Math.PI * i / nnn;
      var ang2 = ang + Math.PI * 2 / nnn;

      var deg1 = Math.floor(360 * ang2 / 2 / Math.PI) % 360;
      if ( deg1 < 360 / nnn){
        choice = i;
      }
      var p1 = {x:left + 500 * Math.cos(ang),y:height/2 + 500 * Math.sin(ang)};
      dc.beginPath();
      dc.moveTo(left, height/2);
      dc.lineTo(p1.x,p1.y);
      dc.arc(left,height/2,500,ang,ang2);
      dc.closePath();
      dc.fillStyle = wheel[i].bg;
      dc.fill();

      dc.fillStyle = wheel[i].fg;
      dc.font = "33px Russo One";
      dc.save();
      dc.translate(left, height/2);
      var ang = rotate + 6.28 * (i / nnn + 0.5/nnn);
      dc.rotate(ang);
      dc.fillText(wheel[i].text, 150, 15);
      dc.restore();
    }

    dc.strokeStyle = "beige";
    dc.lineWidth = 7;
    dc.beginPath();
    dc.arc(left, height/2, 500, 0, 6.28);
    dc.closePath();
    dc.stroke();

    dc.fillStyle = "beige";
    dc.beginPath();
    dc.arc(left, height/2, 100, 0, 6.28);

    dc.moveTo(left+550, height/2 - 25);
    dc.lineTo(left+550, height/2 + 25);
    dc.lineTo(left+450, height/2);
    dc.closePath();
    dc.fill();

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
});