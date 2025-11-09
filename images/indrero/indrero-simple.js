

const mouse = {x:0, y:0, down:false};
const canvas = document.getElementById('indrero-simple-canvas');
const dc = canvas.getContext('2d');

canvas.width = window.innerWidth-10;
canvas.height = window.innerHeight-10;

  // Draw 1024x768 rect centered on canvas
const rectWidth = 1024;
const rectHeight = 768;
const rectX = (canvas.width - rectWidth) / 2;
const rectY = (canvas.height - rectHeight) / 2;

// ...eksisterende kode...

// Marc Bracketts Mood Meter-følelser på dansk

const moodsAll = [
  "Vred", "Irriteret", "Frustreret", "Ophidset", "Rasende", "Fjendtlig", "Jaloux", "Trodsig", "Stresset", "Anspændt", "Nervøs",
  "Trist", "Nedtrykt", "Skuffet", "Håbløs", "Deprimeret", "Ensom", "Træt", "Udmattet", "Modløs", "Flov", "Bekymret",
  "Ophidset", "Ekstatisk", "Glad", "Optimistisk", "Stolt", "Inspireret", "Opmærksom", "Motiveret", "Energisk", "Spændt",
  "Rolig", "Tilfreds", "Afslappet", "Fredfyldt", "Tryg", "Taknemmelig", "Elskelig", "Håbefuld", "Behagelig", "Sikker"
];

const moods_sorted = {
  red: [
  "Vred", "Irriteret", "Frustreret", "Ophidset", "Rasende", "Fjendtlig", 
  "Jaloux", "Trodsig", "Stresset", "Anspændt", "Nervøs"
  ],
  blue: [
  "Trist", "Nedtrykt", "Skuffet", "Håbløs", "Deprimeret", "Ensom", 
  "Træt", "Udmattet", "Modløs", "Flov", "Bekymret"
  ],
  yellow: [
  "Ophidset", "Ekstatisk", "Glad", "Optimistisk", "Stolt", 
  "Inspireret", "Opmærksom", "Motiveret", "Energisk", "Spændt" 
  ],
  green: [
  "Rolig", "Tilfreds", "Afslappet", "Fredfyldt", "Tryg", "Taknemmelig", 
  "Elskelig", "Håbefuld", "Behagelig", "Sikker"
  ]
};

render_moodmeter();

function render_moodmeter(){
  dc.clearRect(0, 0, canvas.width, canvas.height);
  dc.fillStyle = "red";
  dc.fillRect(rectX, rectY, rectWidth/2, rectHeight/2);
  dc.fillStyle = "blue";
  dc.fillRect(rectX, rectY+rectHeight/2, rectWidth/2, rectHeight/2);
  dc.fillStyle = "yellow";
  dc.fillRect(rectX+rectWidth/2, rectY, rectWidth/2, rectHeight/2);
  dc.fillStyle = "green";
  dc.fillRect(rectX+rectWidth/2, rectY+rectHeight/2, rectWidth/2, rectHeight/2);

  dc.font = "bold 33px Arial ";
  dc.fillStyle = "white";
  dc.fillText("Marc Brackett's Mood meter", rectX, rectY-15);
  dc.strokeStyle = "white";
  dc.lineWidth = 3;
  dc.strokeRect(rectX, rectY, rectWidth, rectHeight);

  dc.font = "33px Arial";
  const str_c = "Ubehag"
  dc.fillStyle = "white";
  dc.fillText(str_c, rectX, rectY + rectHeight + 35);

  dc.font = "33px Arial";
  const str_d = "Behag"
  dc.fillStyle = "white";
  dc.fillText(str_d, rectX + rectWidth - dc.measureText(str_d).width , rectY + rectHeight + 35);

  dc.save();
  dc.font = "33px Arial";
  const str_a = "Høj energi"
  dc.translate(rectX-15, rectY);
  dc.rotate(-Math.PI / 2); // 90 degrees counterclockwise
  dc.fillStyle = "white";
  dc.fillText(str_a, -dc.measureText(str_a).width-15, 0);
  dc.restore();
  
  dc.save();
  dc.font = "33px Arial";
  const str_b = "Lav energi"
  dc.translate(rectX-15, rectY + rectHeight);
  dc.rotate(-Math.PI / 2); // 90 degrees counterclockwise
  dc.fillStyle = "white";
  dc.fillText(str_b, 15, 0);
  dc.restore();
} 

function el(){
  if (!mouse.down) return;
  if (moodsAll.length === 0) return;

  const idx = Math.floor(Math.random() * moodsAll.length);
  const text = moodsAll.splice(idx, 1)[0]; // Remove and get the mood

  for (const key in moods_sorted) {
    if (moods_sorted[key].includes(text)) {
      console.log(`The mood "${text}" belongs to the "${key}" category.`);
      break;
    }
  }

  const e = document.createElement("div");
  dc.font = "30px Arial";
  const textWidth = dc.measureText(text).width;
  e.style.position = "absolute";
  e.style.left = mouse.x + "px";
  e.style.top = mouse.y + "px";
  e.style.width = (textWidth + 10) +"px";
  e.style.height = "40px";
  e.style.backgroundColor = "black";
  e.style.borderRadius = "5px";
  e.style.zIndex = 10;
  e.style.font = "30px Arial";
  e.style.color = "white";
  e.innerText = text;
  e.style.display = "flex";
  e.style.alignItems = "center";
  e.style.justifyContent = "center";
  e.style.whiteSpace = "nowrap";
  e.style.overflow = "hidden";
  e.style.cursor = "pointer";
  document.body.appendChild(e);

 // --- Make the div draggable ---
  let offsetX = 0, offsetY = 0, isDragging = false;

  e.addEventListener('mousedown', function(ev) {
    isDragging = true;
    offsetX = ev.clientX - e.offsetLeft;
    offsetY = ev.clientY - e.offsetTop;
    e.style.cursor = "grabbing";
    document.body.appendChild(e); // bring to front
    ev.preventDefault();
  });

  document.addEventListener('mousemove', function(ev) {
    if (isDragging) {
      e.style.left = (ev.clientX - offsetX) + "px";
      e.style.top = (ev.clientY - offsetY) + "px";
    }
  });

  document.addEventListener('mouseup', function() {
    if (isDragging) {
      isDragging = false;
      e.style.cursor = "grab";
    }
  });
}

window.addEventListener('resize', function(){
  canvas.width = window.innerWidth-10;
  canvas.height = window.innerHeight-10;
  render_moodmeter();
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
  el();
});

canvas.addEventListener('mouseup', function(evt){
  mouse.down = false;

});
