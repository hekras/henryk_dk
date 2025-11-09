window.addEventListener('load', function() {
  var mouse = {x:0, y:0, down: false};
  const canvas = document.getElementById('indrero-canvas');
  const dc = canvas.getContext('2d', {
    willReadFrequently: true
  });
//     console.log(dc)
  canvas.width = window.innerWidth-10;
  canvas.height = window.innerHeight-10;

  var grid = [];

  for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 8; j++) {
          grid.push({
              x: i,
              y: j, 
              ang: 2*Math.PI*Math.random()
          });
      }
  }


  class Label {
      constructor(text, x, y, width, height) {
          this.text = text;
          this.x = x;
          this.y = y;
          this.width = width;
          this.height = height; 
          this.color = "black";
          this.background = "white";

        }
      draw(dc) {
          dc.fillStyle = this.background;
          dc.fillRect(this.x, this.y, this.width, this.height);
          dc.fillStyle = this.color;
          dc.font = "20px Arial";
          dc.textAlign = "center";
          
          dc.fillText(this.text, this.x + this.width / 2, this.y + 25);
      }
  } 

  var labels = [];
  labels.push(new Label("Glad", 50, 50, 100, 40));
  labels.push(new Label("Sur", 200, 50, 100, 40));

  function animate() {

    dc.fillStyle = "white";
    dc.font = "33px Russo One";

    // Draw 1024x768 rect centered on canvas
    const rectWidth = 1024;
    const rectHeight = 768;
    const rectX = (canvas.width - rectWidth) / 2;
    const rectY = (canvas.height - rectHeight) / 2;


    const dx = rectWidth / 10;
    const dy = rectHeight / 8;

    dc.clearRect(rectX-50, rectY-50, rectWidth+100, rectHeight+100);

    grid.forEach(cell => {
        const cx = rectX + cell.x * dx;
        const cy = rectY + cell.y * dy;

        cell.color = 200 + Math.floor(55 * Math.sin(cell.ang));
        cell.ang += 0.02;
        if (cell.x < 5 && cell.y < 4) {
            dc.fillStyle = "rgb(" + cell.color + ",0,0)";
        } else if (cell.x >= 5 && cell.y < 4) {
            dc.fillStyle = "rgb(" + cell.color + "," + cell.color + ",0)";
        } else if (cell.x < 5 && cell.y >= 4) {
            dc.fillStyle = "rgb(0,0," + cell.color + ")";
        } else {
            dc.fillStyle = "rgb(0," + cell.color + ",0)";
        }
        dc.fillRect(cx, cy, dx, dy);
    });

    dc.fillStyle = "white";
    dc.fillText("Marc Brackett's Mood meter", rectX, rectY-15);
    dc.strokeStyle = "white";
    dc.lineWidth = 3;
    dc.strokeRect(rectX, rectY, rectWidth, rectHeight);

    dc.font = "33px Arial";
    const str_a = "Høj energi"
    dc.save();
    dc.translate(rectX-15, rectY + dc.measureText(str_a).width + 15);
    dc.rotate(-Math.PI / 2); // 90 degrees counterclockwise
    dc.fillStyle = "white";
    dc.fillText(str_a, 0, 0);
    dc.restore();
    
    dc.font = "33px Arial";
    const str_b = "Lav energi"
    dc.save();
    dc.translate(rectX-15, rectY + dy*8 - 15);
    dc.rotate(-Math.PI / 2); // 90 degrees counterclockwise
    dc.fillStyle = "white";
    dc.fillText(str_b, 0, 0);
    dc.restore();

    dc.font = "33px Arial";
    const str_c = "Ubehag"
    dc.fillStyle = "white";
    dc.fillText(str_c, rectX + 15, rectY + rectHeight + 35);

    dc.font = "33px Arial";
    const str_d = "Behag"
    dc.fillStyle = "white";
    dc.fillText(str_d, rectX + rectWidth - dc.measureText(str_d).width - 15, rectY + rectHeight + 35);

    /*
    dc.font = "133px Russo One";
    const str_e = "PROTOTYPE"
    dc.fillStyle = "black";
    dc.fillText(str_e, rectX + (rectWidth - dc.measureText(str_e).width)/2 - 15, rectY + rectHeight/2 + 35);
*/
    labels.forEach(label => {
        label.draw(dc);
        if (mouse.down) {
            label.x = mouse.x;
            label.y = mouse.y;
        }
    });

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
  });

  canvas.addEventListener('mouseup', function(evt){
    mouse.down = false;

  });
});