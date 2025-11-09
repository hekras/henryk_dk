window.addEventListener('load', function() {
  var mouse = {x:0, y:0, down: false};
  const canvas = document.getElementById('id2424-canvas');
  const dc = canvas.getContext('2d', {
    willReadFrequently: true
  });

    var colorArray = [
      "red", "green", "blue", "cyan", "pink", "purple"
    ];

    var dataArray = [];

  const arrA = [
    { x:0, y:0},
    { x:220, y:1},
    { x:340, y:0},
    { x:1076, y:1},
    { x:1192, y:0},
    { x:1544, y:1},
    { x:2136, y:0},
    { x:2352, y:1},
    { x:3420, y:0},
    { x:3636, y:1},
    { x:3760, y:0},
    { x:4108, y:1},
    { x:5128, y:0},
    { x:5344, y:1},
    { x:5468, y:0},
    { x:5816, y:1},
    { x:6836, y:0},
    { x:7052, y:1},
    { x:7688, y:0},
    { x:7932, y:1},
    { x:8544, y:0},
    { x:8760, y:1},
    { x:9400, y:0},
    { x:9616, y:1},
    { x:10252, y:0},
    { x:10468, y:1},
    { x:10604, y:0},
    { x:10944, y:1},
    { x:13056, y:0},
    { x:13272, y:1},
    { x:13400, y:0},
    { x:14168, y:1},
    { x:14764, y:0},
    { x:14980, y:1},
    { x:15108, y:0},
    { x:15452, y:1},
    { x:16044, y:0},
    { x:16260, y:1},
    { x:17328, y:0},
    { x:17544, y:1},
    { x:18188, y:0},
    { x:18400, y:1},
    { x:19036, y:0},
    { x:19252, y:1},
    { x:19892, y:0},
    { x:20108, y:1},
    { x:20744, y:0},
    { x:20960, y:1},
    { x:21600, y:0},
    { x:21816, y:1},
    { x:21944, y:0},
    { x:22288, y:1},
    { x:23308, y:0},
    { x:23524, y:1},
    { x:24160, y:0},
    { x:24376, y:1},
    ];

  const arrB = [
    { x:0, y:0},
{ x:1544, y:1},
{ x:2596, y:0},
{ x:3252, y:1},
{ x:3876, y:0},
{ x:4128, y:1},
{ x:5164, y:0},
{ x:5816, y:1},
{ x:6868, y:0},
{ x:7120, y:1},
{ x:7720, y:0},
{ x:7948, y:1},
{ x:8576, y:0},
{ x:8804, y:1},
{ x:9428, y:0},
{ x:10088, y:1},
{ x:11140, y:0},
{ x:11368, y:1},
{ x:13052, y:0},
{ x:14168, y:1},
{ x:14796, y:0},
{ x:15452, y:1},
{ x:16076, y:0},
{ x:16304, y:1},
{ x:17356, y:0},
{ x:17584, y:1},
{ x:18212, y:0},
{ x:18440, y:1},
{ x:19064, y:0},
{ x:19300, y:1},
{ x:19920, y:0},
{ x:20148, y:1},
{ x:20772, y:0},
{ x:21004, y:1},
{ x:21628, y:0},
{ x:22284, y:1},
{ x:23336, y:0},
{ x:23568, y:1},
{ x:24192, y:0},
{ x:24420, y:1},
  ];

const arrC = [
  { x:0, y:0},
{ x:1544, y:1},
{ x:2592, y:0},
{ x:2848, y:1},
{ x:3448, y:0},
{ x:3700, y:1},
{ x:4304, y:0},
{ x:4532, y:1},
{ x:5156, y:0},
{ x:5812, y:1},
{ x:6872, y:0},
{ x:7096, y:1},
{ x:7724, y:0},
{ x:7948, y:1},
{ x:8576, y:0},
{ x:8804, y:1},
{ x:9428, y:0},
{ x:10088, y:1},
{ x:10708, y:0},
{ x:10940, y:1},
{ x:13052, y:0},
{ x:14172, y:1},
{ x:14796, y:0},
{ x:15460, y:1},
{ x:16080, y:0},
{ x:16308, y:1},
{ x:17360, y:0},
{ x:17588, y:1},
{ x:18216, y:0},
{ x:18444, y:1},
{ x:19068, y:0},
{ x:19300, y:1},
{ x:19924, y:0},
{ x:20152, y:1},
{ x:20780, y:0},
{ x:21008, y:1},
{ x:21632, y:0},
{ x:22288, y:1},
{ x:23340, y:0},
{ x:23572, y:1},
{ x:24196, y:0},
{ x:24424, y:1},
];

const arrD = [
  { x:0, y:0},
{ x:1540, y:1},
{ x:2596, y:0},
{ x:2820, y:1},
{ x:3448, y:0},
{ x:3676, y:1},
{ x:4304, y:0},
{ x:4532, y:1},
{ x:5156, y:0},
{ x:5812, y:1},
{ x:6868, y:0},
{ x:7092, y:1},
{ x:7720, y:0},
{ x:7948, y:1},
{ x:8576, y:0},
{ x:9232, y:1},
{ x:10284, y:0},
{ x:10512, y:1},
{ x:11140, y:0},
{ x:11372, y:1},
{ x:13056, y:0},
{ x:14180, y:1},
{ x:14796, y:0},
{ x:15452, y:1},
{ x:16076, y:0},
{ x:16304, y:1},
{ x:17360, y:0},
{ x:17584, y:1},
{ x:18212, y:0},
{ x:18440, y:1},
{ x:19068, y:0},
{ x:19296, y:1},
{ x:19924, y:0},
{ x:20148, y:1},
{ x:20776, y:0},
{ x:21004, y:1},
{ x:21632, y:0},
{ x:22288, y:1},
{ x:23340, y:0},
{ x:23568, y:1},
{ x:24196, y:0},
{ x:24420, y:1},
];

const arrE = [
  { x:0, y:0},
{ x:1540, y:1},
{ x:2596, y:0},
{ x:3252, y:1},
{ x:3876, y:0},
{ x:4104, y:1},
{ x:5164, y:0},
{ x:5816, y:1},
{ x:6868, y:0},
{ x:7096, y:1},
{ x:7720, y:0},
{ x:7948, y:1},
{ x:8576, y:0},
{ x:9232, y:1},
{ x:10288, y:0},
{ x:10944, y:1},
{ x:13056, y:0},
{ x:14172, y:1},
{ x:14800, y:0},
{ x:15456, y:1},
{ x:16080, y:0},
{ x:16308, y:1},
{ x:17364, y:0},
{ x:17588, y:1},
{ x:18216, y:0},
{ x:18444, y:1},
{ x:19072, y:0},
{ x:19300, y:1},
{ x:19928, y:0},
{ x:20152, y:1},
{ x:20780, y:0},
{ x:21008, y:1},
{ x:21632, y:0},
{ x:22288, y:1},
{ x:23344, y:0},
{ x:23568, y:1},
{ x:24196, y:0},
{ x:24424, y:1},
];

const arrF = [
  { x:0, y:0},
  { x:1564, y:1},
  { x:2168, y:0},
  { x:2392, y:1},
  { x:3456, y:0},
  { x:3676, y:1},
  { x:3780, y:0},
  { x:4100, y:1},
  { x:5160, y:0},
  { x:5380, y:1},
  { x:5496, y:0},
  { x:5840, y:1},
  { x:6868, y:0},
  { x:7116, y:1},
  { x:7720, y:0},
  { x:7948, y:1},
  { x:8576, y:0},
  { x:8800, y:1},
  { x:8904, y:0},
  { x:9224, y:1},
  { x:9856, y:0},
  { x:10108, y:1},
  { x:11140, y:0},
  { x:11388, y:1},
  { x:13064, y:0},
  { x:14172, y:1},
  { x:14804, y:0},
  { x:15456, y:1},
  { x:16084, y:0},
  { x:16332, y:1},
  { x:17364, y:0},
  { x:17616, y:1},
  { x:18220, y:0},
  { x:18444, y:1},
  { x:19076, y:0},
  { x:19324, y:1},
  { x:19928, y:0},
  { x:20180, y:1},
  { x:20784, y:0},
  { x:21032, y:1},
  { x:21636, y:0},
  { x:22288, y:1},
  { x:23348, y:0},
  { x:23572, y:1},
  { x:24200, y:0},
  { x:24428, y:1},
];

//     console.log(dc)
  const pulsehight = 25;
  const channelhight = 50;
  canvas.width = window.innerWidth-10;
  canvas.height = window.innerHeight-10;
  var tick = 0;
  var textoff = 200;

  function plot(arr, floor, hi, scale, color){
    var first = true;
    var level = 0;
    dc.beginPath();
    arr.forEach(e =>{
      if (first){
        level = e.y;
        first = false;
      }
      dc.lineTo(e.x*scale, floor - level * hi);
      level = e.y;
      dc.lineTo(e.x*scale, floor - level * hi);
    });
    dc.strokeStyle = color;
    dc.lineWidth = 2;
    dc.stroke();
  }

  function animate() {
    const center = {
      x: canvas.width/2,
      y: canvas.height/2
    };

    dc.fillStyle = "black";
    dc.fillRect(0,0,canvas.width,canvas.height);
    const scale = 0.05;

    var low = channelhight*3;
    plot(arrA,low, pulsehight, scale, "red");
    low += channelhight;
    plot(arrB,low, pulsehight, scale, "green");
    low += channelhight;
    plot(arrC,low, pulsehight, scale, "blue");
    low += channelhight;
    plot(arrD,low, pulsehight, scale, "cyan");
    low += channelhight;
    plot(arrE,low, pulsehight, scale, "pink");
    low += channelhight;
    plot(arrF,low, pulsehight, scale, "purple");
    try{
      dataArray = JSON.parse("[" + document.getElementById("dataarray").value + "]");
    }
    catch{
      dataArray = [];
    }
    low += channelhight;
    plot(dataArray,low, pulsehight, scale, "gray");

    low += pulsehight;
    dc.beginPath();
    for(var xaxis = 0; xaxis < canvas.width; xaxis += scale*1000){
      dc.moveTo(xaxis, channelhight*2);
      dc.lineTo(xaxis, low);
    }
    dc.strokeStyle = "yellow";
    dc.lineWidth = 1;
    dc.stroke();

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


function e(x,y,w,h,t){
  el = document.createElement("div");
  el.style.width = w + "px";
  el.style.height = h + "px";
  el.style.left = x +"px";
  el.style.top = y + "px";
  el.style.position = "absolute";
  el.style.border = "1px solid blue";
  //el.style.cursor = "pointer";
  el.style.fontSize = "20px";
  el.style.color = "yellow";
  el.innerHTML = '<span class="center">' + t + '</span>';
  document.getElementById("settings").appendChild(el);
}

e(20, 20, 200, 25, "IR analyzer V.2");  

