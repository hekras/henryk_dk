window.addEventListener('load', function() {

    var mouse = {x:0, y:0, down: false, dragging:false, dx:0, dy:0};
    var angle = 0;
    const canvas = document.getElementById('id2427-canvas');
  
    const dc = canvas.getContext('2d', {
      willReadFrequently: true
    });

    const monsterImg = new Image();
    monsterImg.src = './monster_santa_100x150.png'; // Path to your image file

    var audio_buh = new Audio('./sound-buh.mp3');
    var audio_hoooo = new Audio('./sound-hoooo.mp3');
    var audio_hohoho = new Audio('./sound-hohoho.mp3');
    var audio_miuw = new Audio('./sound-miuw.mp3');
    var audio_mumumu = new Audio('./sound-mumumu.mp3');   
    var audio_mama = new Audio('./sound-mama.mp3');
    var audio_moaaha = new Audio('./sound-moaaha.mp3');
    var audio_raaa = new Audio('./sound-raaa.mp3');
    var audio_snarrr = new Audio('./sound-snarrr.mp3');
    var audio_wow = new Audio('./sound-wow.mp3');


    canvas.width = window.innerWidth-10;
    canvas.height = window.innerHeight-10;
  
    class Gift {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.angle = 6.28 * Math.random();
        this.velocity = 0.5 + 5 * Math.random();
        this.dx = this.velocity * Math.cos(this.angle);
        this.dy = this.velocity * Math.sin(this.angle);
        this.size = 40;
        this.speed = 2;
      }

      draw() {
        // Draw a gift
        dc.fillStyle = "red";
        dc.fillRect(this.x, this.y, this.size, this.size);
        dc.fillStyle = "green";
        dc.fillRect(this.x + 5, this.y + 5, this.size - 10, this.size - 10);
        dc.fillStyle = "red";
        dc.fillRect(this.x + 10, this.y + 10, this.size - 20, this.size - 20);
      }

      update() {
        this.y += this.dy;
        this.x += this.dx;
        this.dy += 0.05;
      }
    }


    class Icecone {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 10;
        this.speed = -(2 + 7*Math.random());
      }

      draw() {
        // Draw a snowball
        dc.fillStyle = "cyan";
        dc.beginPath();
        dc.moveTo(this.x, this.y+30);
        dc.lineTo(this.x + 10, this.y-30);
        dc.lineTo(this.x - 10, this.y-30);
        dc.closePath();
        dc.fill();
      }

      update() {
        this.y -= this.speed;
      }
    }

    class Snowball {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 10;
        this.speed = 5;
      }

      draw() {
        // Draw a snowball
        dc.fillStyle = "white";
        dc.beginPath();
        dc.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        dc.fill();
      }

      update() {
        this.y -= this.speed;
      }
    }

    class Invader {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 100;
      }

      draw() {
        dc.drawImage(monsterImg, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
      }
    
      draw3() {
        // Draw a monster Santa
        const santaX = this.x - this.size / 2;
        const santaY = this.y - this.size / 2;

        dc.fillStyle = "red";
        dc.fillRect(santaX, santaY, 100, 150);

        // Draw face
        dc.fillStyle = "white";
        dc.fillRect(santaX + 20, santaY + 20, 60, 60);

        // Draw eyes
        dc.fillStyle = "black";
        dc.fillRect(santaX + 30, santaY + 40, 10, 10);
        dc.fillRect(santaX + 60, santaY + 40, 10, 10);

        // Draw beard
        dc.fillStyle = "white";
        dc.fillRect(santaX + 20, santaY + 80, 60, 20);

        // Draw belt
        dc.fillStyle = "black";
        dc.fillRect(santaX + 10, santaY + 110, 80, 10);

        // Draw boots
        dc.fillStyle = "black";
        dc.fillRect(santaX + 10, santaY + 130, 30, 20);
        dc.fillRect(santaX + 60, santaY + 130, 30, 20);
      }

      draw2() {
        // Draw a space invader
        const invaderX = this.x - this.size / 2;
        const invaderY = this.y - this.size / 2;

        dc.fillStyle = "green";
        dc.fillRect(invaderX, invaderY, this.size, this.size);

        // Draw eyes
        dc.fillStyle = "white";
        dc.fillRect(invaderX + 20, invaderY + 20, 20, 20);
        dc.fillRect(invaderX + 60, invaderY + 20, 20, 20);

        // Draw mouth
        dc.fillStyle = "red";
        dc.fillRect(invaderX + 20, invaderY + 60, 60, 10);

        // Draw Santa hat
        dc.fillStyle = "red";
        dc.beginPath();
        dc.moveTo(invaderX + this.size / 2, invaderY - 40); // Top of the hat
        dc.lineTo(invaderX + 10, invaderY); // Left corner of the hat
        dc.lineTo(invaderX + this.size - 10, invaderY); // Right corner of the hat
        dc.closePath();
        dc.fill();

        // Draw white brim of the hat
        dc.fillStyle = "white";
        dc.fillRect(invaderX + 10, invaderY, this.size - 20, 10);

        // Draw white pom-pom
        dc.beginPath();
        dc.arc(invaderX + this.size / 2, invaderY - 40, 10, 0, Math.PI * 2);
        dc.fill();
      }
    }

    var invaders = [];
    var snowballs = [];
    var icecones = [];
    var gifts = [];
    var score = 0;

    var statemachine = {
      state: 0,
      dx : 0,
      dy : 0,
      counter: 0,
    };

    function animate() {
      const center = {
        x: canvas.width/2,
        y: canvas.height/2
      };

      dc.clearRect(0, 0, canvas.width, canvas.height);
      
      switch(statemachine.state){
        case 0:
          dc.fillStyle = "black";
          dc.fillRect(0, 0, canvas.width, canvas.height);
          dc.fillStyle = "yellow";
          dc.font = "30px Arial";
          const t1 = "Monster Santa Invaders";
          const t1w = dc.measureText(t1).width;
          const t2 = "Press mouse button to start"; 
          const t2w = dc.measureText(t2).width;
          dc.fillText(t1, center.x - t1w / 2, center.y);
          dc.fillText(t2, center.x - t2w / 2, center.y+50);
          dc.fillText("Shoot evil monster santas", center.x - t2w / 2, center.y+150);
          dc.fillText("Catch gifts", center.x - t2w / 2, center.y+200);
          dc.fillText("Avoid icecones", center.x - t2w / 2, center.y+250);
          invaders = [];
          snowballs = [];
          icecones = [];
          gifts = [];
          break;
        case 1:
          for(let j = 110; j < 900; j+=160){ 
            for(let i = 60; i < 1000; i+=120){ 
              invaders.push(new Invader(i, j));
            }
          }
          statemachine.dx = 2;
          statemachine.dy = 0;
          statemachine.state = 2;
          score = 0;
          audio_hohoho.play();
          break;
      }

      dc.fillStyle = "yellow";
      dc.font = "30px Arial";
      const t3 = "Score: " + score;
      const t3w = dc.measureText(t3).width;
      dc.fillText(t3, canvas.width - t3w - 50, 50);


      if (statemachine.state != 0){
        dc.fillStyle = "brown";
        dc.fillRect(mouse.x-50, canvas.height-55, 100, 30);
        dc.fillRect(mouse.x-10, canvas.height-65, 20, 10);
      }

      var nexstate = statemachine.state;
      invaders.forEach(invader => {
        invader.draw();
        invader.x += statemachine.dx;
        invader.y += statemachine.dy;
        switch(statemachine.state){
          case 2:
            if (invader.x > canvas.width - invader.size / 2){
              statemachine.dx = 0;
              statemachine.dy = 1;
              statemachine.counter = invader.size/2;
              nexstate = 3;
            }
            break;
          case 3:
            if (statemachine.counter < 0){
              statemachine.dx = -2;
              statemachine.dy = 0;
              nexstate = 4;
            }
            if (invader.y > canvas.height - invader.size / 2 - 55){
              nexstate = 0;
            }
          break;
          case 4:
            if (invader.x < invader.size / 2){
              statemachine.dx = 0;
              statemachine.dy = 1;
              statemachine.counter = invader.size/2;
              nexstate = 5;
            }
            break;
          case 5:
            if (statemachine.counter < 0){
              statemachine.dx = 2;
              statemachine.dy = 0;
              nexstate = 2;
            }
            if (invader.y > canvas.height - invader.size / 2 - 55){
              nexstate = 0;
            }
          break
         }
      });

      if (statemachine.counter >= 0){
        statemachine.counter--;
      }
      statemachine.state = nexstate;
      if (invaders.length == 0){
        statemachine.state = 0;
      }
      else if (Math.random() < 0.01){
        var invader = invaders[Math.floor(Math.random()*invaders.length)];
        icecones.push(new Icecone(invader.x, invader.y));
        audio_buh.play();
      }

      snowballs.forEach(snowball => {
        snowball.draw();
        snowball.update();
      });

      icecones.forEach(icecone => {
        icecone.draw();
        icecone.update();
      });

      gifts.forEach(gift => {
        gift.draw();
        gift.update();
      });

      snowballs.forEach(snowball => {
        invaders.forEach((invader, invaderIndex) => {
          const distX = Math.abs(snowball.x - invader.x);
          const distY = Math.abs(snowball.y - invader.y);
          if (distX < invader.size / 2 && distY < invader.size / 2) {
            invaders.splice(invaderIndex, 1);
            snowball.y = -100;
            const n = Math.floor(10 * Math.random());
            for(let i = 0; i < n; i++){
              gifts.push(new Gift(invader.x, invader.y));
            }
            audio_raaa.play();
          }
        });
      });

      gifts.forEach(gift => {
        const distX = Math.abs(gift.x - mouse.x);
        const distY = Math.abs(gift.y - (canvas.height - 55));
        if (distX < 50 && distY < 30) {
          gift.y = 10000;
          score += 10;
          audio_wow.play();
        }
      });

      icecones.forEach(icecone => {
        const distX = Math.abs(icecone.x - mouse.x);
        const distY = Math.abs(icecone.y - (canvas.height - 55));
        if (distX < 50 && distY < 30) {
          statemachine.state = 0;
          audio_hohoho.play();
        }
      });

      snowballs = snowballs.filter(snowball => snowball.y + snowball.size > 0);
      icecones = icecones.filter(icecone => icecone.y + icecone.size < canvas.height);
      gifts = gifts.filter(gift => gift.y + gift.size < canvas.height);

      requestAnimationFrame(animate);
    }
    animate();
  
    window.addEventListener('resize', function(){
      canvas.width = window.innerWidth-10;
      canvas.height = window.innerHeight-10;
      animate();
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
      if (!mouse.down){
        switch(statemachine.state){
          case 0:
            statemachine.state = 1;
            break;
        }
        snowballs.push(new Snowball(mouse.x, canvas.height-55));
        audio_miuw.play();
      }
      mouse.down = true;
    });
  
    canvas.addEventListener('mouseup', function(evt){
      mouse.down = false;
   
    });
  });
    
  