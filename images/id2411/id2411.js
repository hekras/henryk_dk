const xmax = 16;
const ymax = 14;

class Cell {
  constructor(dx,dy,type){
    this.radius = 40;
    this.dx = dx;
    this.dy = dy;
    this.cy = this.radius + dy * this.radius * 1.5;
    this.cx = Math.sqrt(3) * this.radius * dx + this.radius + Math.sqrt(3)/2 * this.radius * (dy%2);
    this.type = type;
  }

  render(dc){
    const edges = 6;
    var ang = Math.PI/edges;
    dc.strokeStyle = "white";
    dc.lineWidth = 2;
    switch(this.type){
      case 0:
        dc.strokeStyle = "black";
        dc.fillStyle = "blue";
        break;
      case 1:
        dc.fillStyle = "gray";
        break;
      case 2:
        dc.fillStyle = "orange";
        break;
      case 3:
        dc.fillStyle = "gray";
        break;
    }
    dc.beginPath();
    var x = this.cx + this.radius * Math.cos(ang);
    var y = this.cy + this.radius * Math.sin(ang);
    dc.moveTo(x,y);
    for(var i=1; i<edges;i++){
      ang += 2*Math.PI/edges;
      x = this.cx + this.radius * Math.cos(ang);
      y = this.cy + this.radius * Math.sin(ang);
      dc.lineTo(x,y);
    }
    dc.closePath();
    dc.fill();
    dc.stroke();
    switch(this.type){
      case 3:
        dc.strokeStyle = "pink";
        dc.beginPath();
        var x = this.cx + 0.75*this.radius * Math.cos(ang);
        var y = this.cy + 0.75*this.radius * Math.sin(ang);
        dc.moveTo(x,y);
        for(var i=1; i<edges;i++){
          ang += 2*Math.PI/edges;
          x = this.cx + 0.75*this.radius * Math.cos(ang);
          y = this.cy + 0.75*this.radius * Math.sin(ang);
          dc.lineTo(x,y);
        }
        dc.closePath();
        dc.stroke();
        break;
    }
  }

  dist(x,y){
    var ddx = x - this.cx;
    var ddy = y - this.cy;
    return Math.sqrt(ddx*ddx + ddy*ddy);
  }

  flip(){
    switch(this.type){
      case 1:
        this.type = 2;
        break;
      case 2:
        this.type = 1;
        break;
      case 3:
        this.type = 1;
        break;
    }
  }
}

class Map{
  constructor(id){
    this.id = id;
    console.log("new map: " + id);
    this.arr = Array(xmax*ymax);
    for(var i=0;i<xmax*ymax;i++) this.arr[i] = new Cell(i%xmax, Math.floor(i/xmax), 0);
    this.counter = 0;
    this.moves = 0;
  }

  add(dx,dy,type){
    this.arr[dx+dy*xmax].type = type;
  }

  render(dc){
    dc.clearRect(0,0,width, height);
    this.arr.forEach(c => {
      c.render(dc);
    });

    dc.fillStyle = "yellow";
    dc.font = "20px Verdana";
    dc.fillText("MOVES: " + this.moves ,20,40);
    dc.fillText("CELLS TO CONVERT: " + this.counter,220,40);
    dc.fillText("ID: " + this.id,width-250,40);
  }


  flippp(dx,dy){
    this.arr.forEach(c => {
      if ((c.dx === dx)&&(c.dy === dy)){
        c.flip();
        return;
      }
    });
  }

  flip(x,y){
    var dmin = 100000;
    var cell = null;
    this.arr.forEach(c => {
      var dist = c.dist(x,y);
      if (dist < dmin){
        cell = c;
        dmin = dist;
      }
    });

    if ((cell != null)&&(dmin < cell.radius)){
      this.moves++;
      cell.flip();
      this.flippp(cell.dx-1,cell.dy);
      this.flippp(cell.dx+1,cell.dy);
      this.flippp(cell.dx,cell.dy+1);
      this.flippp(cell.dx,cell.dy-1);
      if (cell.dy % 2){
        this.flippp(cell.dx+1,cell.dy+1);
        this.flippp(cell.dx+1,cell.dy-1);
      }
      else {
        this.flippp(cell.dx-1,cell.dy+1);
        this.flippp(cell.dx-1,cell.dy-1);
      }
    }
  }

  set(x,y,type){
    var dmin = 100000;
    var cell = null;
    this.arr.forEach(c => {
      var dist = c.dist(x,y);
      if (dist < dmin){
        cell = c;
        dmin = dist;
      }
    });

    if ((cell != null)&&(dmin < cell.radius)){
      cell.type = type;
    }
  }

  isComplete(){
    this.counter = 0;
    this.arr.forEach(c => {
      if ((c.type != 2)&&(c.type != 0)) this.counter++;
    });
    return (this.counter === 0);
  }
}

class Menu {
  constructor(cx, cy, type){
    this.radius = 40;
    this.cy = cy;
    this.cx = cx;
    this.type = type;
  }

  render(dc, currentMenu){
    const edges = 6;
    var ang = Math.PI/edges;
    dc.strokeStyle = (this.type === currentMenu) ? "red":"white";
    dc.lineWidth = (this.type === currentMenu) ? 10 : 2;
    switch(this.type){
      case 0:
        dc.fillStyle = "blue";
        break;
      case 1:
        dc.fillStyle = "gray";
        break;
      case 2:
        dc.fillStyle = "orange";
        break;
      case 3:
        dc.fillStyle = "gray";
        break;
    }
    dc.beginPath();
    var x = this.cx + this.radius * Math.cos(ang);
    var y = this.cy + this.radius * Math.sin(ang);
    dc.moveTo(x,y);
    for(var i=1; i<edges;i++){
      ang += 2*Math.PI/edges;
      x = this.cx + this.radius * Math.cos(ang);
      y = this.cy + this.radius * Math.sin(ang);
      dc.lineTo(x,y);
    }
    dc.closePath();
    dc.fill();
    dc.stroke();
    switch(this.type){
      case 3:
        dc.strokeStyle = "pink";
        dc.lineWidth = 2;
        dc.beginPath();
        var x = this.cx + 0.75*this.radius * Math.cos(ang);
        var y = this.cy + 0.75*this.radius * Math.sin(ang);
        dc.moveTo(x,y);
        for(var i=1; i<edges;i++){
          ang += 2*Math.PI/edges;
          x = this.cx + 0.75*this.radius * Math.cos(ang);
          y = this.cy + 0.75*this.radius * Math.sin(ang);
          dc.lineTo(x,y);
        }
        dc.closePath();
        dc.stroke();
        break;
    }
  }

  dist(x,y){
    var ddx = x - this.cx;
    var ddy = y - this.cy;
    return Math.sqrt(ddx*ddx + ddy*ddy);
  }
}

  /*
'kode betydning
'   0 feltet slukket
'   1 graat felt
'   2 orange felt 
'  -1 slutter linjen
'  -2 slutter banen
' 1xx bane nr xx starter her
' 999 end of data
'
'    0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6
*/
  const mapdata = [
// bane 101...
  101,
  -1, -1, -1, -1, -1, -1,
   0,0,0,0,0,0,1,1,-1,
   0,0,0,0,0,1,1,1,-1,
   0,0,0,0,0,0,1,1,-2,
// bane 102...
  102,
  -1, -1, -1,
   0,0,0,0,0,1,-1,
   0,0,0,0,0,1,-1,
   0,0,0,0,0,3,-1,
   0,0,0,0,0,1,-1,
   0,0,0,0,0,1,-1,
// bane 3...
103,
 -1, -1, -1,
  0,0,0,0,0,1,-1,
  0,0,0,0,0,1,-1,
  0,0,0,1,1,3,1,1,-1,
  0,0,0,0,0,1,-1,
  0,0,0,0,0,1,-1,
// bane 3...
104,
-1,
1,1,1,1,1,1,1,-1,
1,1,1,1,1,1,1,-1,
1,1,1,1,1,1,1,-1,
1,1,1,1,1,1,1,-1,
1,1,1,1,1,1,1,-2,
// the end
 999
  ];

var maps = [];
var map = null;
var mouse = {x:0, y:0, down: false};
const canvas = document.getElementById('id2411-canvas');
const dc = canvas.getContext('2d');
var width = canvas.width = window.innerWidth-10;
var height = canvas.height = window.innerHeight-10;
var playmode = false;

var currentMap = 101;

function initMaps(){
  var dp = 0;
  var m = null;
  var dy=0;
  var dx=0;
  var dd;
  do{
    dd = mapdata[dp++];
    if ((dd == -2)||(dd == 999)){
      if (m != null) maps.push(m);
      m = null;
    } 
    else if (dd > 100){
      if (m != null) maps.push(m);
      m = new Map(dd);
      dy=0;
      dx=0;
    } 
    else if (dd == -1){
      dx = 0;
      dy++;
    }
    else if (dd > 0){
      if ( m!= null) m.add(dx,dy,dd);
    }
    dx++;
  }while(dd != 999);
}

function setCurrentMap(id){
  var nm = null
  var mid = 101;
  maps.forEach(m =>{
    if (m.id == id) nm = m;
    mid = Math.max(mid, m.id);
  });
  if (nm == null){
    nm = new Map(mid+1);
    maps.push(nm);
  }
  return nm;
}

function renderAll(){
  map.render(dc);
  if (!playmode){
    menu.forEach(m =>{
      m.render(dc, currentMenu);
    });
  }
}

initMaps();

map = setCurrentMap(currentMap);
var menu = [];
menu.push(new Menu(width - 80, 300, 0));
menu.push(new Menu(width - 80, 380, 1));
menu.push(new Menu(width - 80, 460, 2));
menu.push(new Menu(width - 80, 540, 3));
var currentMenu = 1;

renderAll();

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
  if (!mouse.down){
    console.log("2");
    if (playmode){
      map.flip(mouse.x, mouse.y);
    }
    else {
      map.set(mouse.x, mouse.y, currentMenu);

      menu.forEach(m =>{
        if (m.dist(mouse.x, mouse.y) < m.radius){
          currentMenu = m.type;
        }
      });
    }
    renderAll();
  }
  mouse.down = true;
});

canvas.addEventListener('mouseup', function(evt){
  mouse.down = false;
  mouseTrigger = false;
});

canvas.addEventListener('touchstart', function(evt){
  mouse.down = true;
});

canvas.addEventListener('touchend', function(evt){
  mouse.down = false;

});

function minusbuttonevent(){
  currentMap--;
  if (currentMap < 101) currentMap=101;
  map = setCurrentMap(currentMap);
  renderAll();
}

function plusbuttonevent(){
  currentMap++;
  if (currentMap>199) currentMap = 199;
  map = setCurrentMap(currentMap);
  renderAll();
}

function playbuttonevent(){
  playmode = true;
  renderAll();
  document.getElementById("playbut").style.border = "3px solid red";
  document.getElementById("buildbut").style.border = "2px solid white";
}

function buildbuttonevent(){
  playmode = false;
  renderAll();
  document.getElementById("playbut").style.border = "2px solid white";
  document.getElementById("buildbut").style.border = "3px solid red";
}
