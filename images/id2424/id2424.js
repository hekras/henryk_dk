var dataArray = [
  {"x":0,"y":0},{"x":1509,"y":1},{"x":2131,"y":0},{"x":2360,"y":1},{"x":3412,"y":0},{"x":4068,"y":1},{"x":5120,"y":0},{"x":5803,"y":1},{"x":6827,"y":0},{"x":7055,"y":1},{"x":7681,"y":0},{"x":7912,"y":1},{"x":8535,"y":0},{"x":8764,"y":1},{"x":9388,"y":0},{"x":9618,"y":1},{"x":10242,"y":0},{"x":10897,"y":1},{"x":13055,"y":0},{"x":14568,"y":1},{"x":15616,"y":0},{"x":16272,"y":1},{"x":16898,"y":0},{"x":17126,"y":1},{"x":18178,"y":0},{"x":18832,"y":1},{"x":19885,"y":0},{"x":20116,"y":1},{"x":20739,"y":0},{"x":20969,"y":1},{"x":21592,"y":0},{"x":21821,"y":1},{"x":22445,"y":0},{"x":23102,"y":1},{"x":24153,"y":0},{"x":24382,"y":1},{"x":26100,"y":0},{"x":27612,"y":1},{"x":28662,"y":0},{"x":28892,"y":1},{"x":29516,"y":0},{"x":29746,"y":1},{"x":30369,"y":0},{"x":30600,"y":1},{"x":31223,"y":0},{"x":31879,"y":1},{"x":32931,"y":0},{"x":33159,"y":1},{"x":33787,"y":0},{"x":34017,"y":1},{"x":34638,"y":0},{"x":34869,"y":1},{"x":35491,"y":0},{"x":36148,"y":1},{"x":36772,"y":0},{"x":37000,"y":1},{"x":39145,"y":0},{"x":40656,"y":1},{"x":41707,"y":0},{"x":41936,"y":1},{"x":42560,"y":0},{"x":42790,"y":1},{"x":43414,"y":0},{"x":43646,"y":1},{"x":44267,"y":0},{"x":44925,"y":1},{"x":45975,"y":0},{"x":46205,"y":1},{"x":46829,"y":0},{"x":47059,"y":1},{"x":47682,"y":0},{"x":48340,"y":1},{"x":49389,"y":0},{"x":49619,"y":1},{"x":50246,"y":0},{"x":50474,"y":1},{"x":52186,"y":0},{"x":53726,"y":1},{"x":54748,"y":0},{"x":55405,"y":1},{"x":56028,"y":0},
  {"x":56258,"y":1},{"x":57309,"y":0},{"x":57965,"y":1},{"x":59017,"y":0},{"x":59246,"y":1},{"x":59870,"y":0},{"x":60099,"y":1},{"x":60724,"y":0},{"x":61380,"y":1},{"x":62431,"y":0},{"x":63087,"y":1},{"x":65225,"y":0},{"x":66739,"y":1},{"x":67361,"y":0},{"x":67591,"y":1},{"x":68642,"y":0},{"x":69299,"y":1},{"x":70349,"y":0},{"x":71034,"y":1},{"x":72056,"y":0},{"x":72287,"y":1},{"x":72912,"y":0},{"x":73167,"y":1},{"x":73763,"y":0},{"x":74422,"y":1},{"x":75044,"y":0},{"x":75275,"y":1},{"x":76325,"y":0},{"x":76555,"y":1},{"x":78268,"y":0},{"x":79780,"y":1},{"x":80400,"y":0},{"x":80634,"y":1},{"x":81254,"y":0},{"x":81484,"y":1},{"x":82535,"y":0},{"x":82765,"y":1},{"x":83389,"y":0},{"x":84076,"y":1},{"x":85096,"y":0},{"x":85326,"y":1},{"x":85949,"y":0},{"x":86181,"y":1},{"x":86804,"y":0},{"x":87460,"y":1},{"x":88083,"y":0},{"x":88314,"y":1},{"x":88936,"y":0},{"x":89167,"y":1},{"x":91312,"y":0},{"x":92423,"y":1},{"x":93019,"y":0},{"x":93679,"y":1},{"x":94300,"y":0},{"x":94531,"y":1},{"x":95153,"y":0},{"x":95413,"y":1},{"x":96434,"y":0},{"x":97092,"y":1},{"x":98141,"y":0},{"x":98372,"y":1},{"x":98995,"y":0},{"x":99654,"y":1},{"x":100702,"y":0},{"x":100933,"y":1},{"x":101557,"y":0},{"x":101788,"y":1},{"x":102410,"y":0},{"x":102667,"y":1},{"x":104351,"y":0},{"x":105438,"y":1},{"x":106060,"y":0},{"x":106747,"y":1},{"x":107767,"y":0},{"x":108027,"y":1},{"x":108621,"y":0},{"x":108879,"y":1},{"x":109475,"y":0},{"x":110163,"y":1},{"x":111182,"y":0},{"x":111443,"y":1},{"x":112036,"y":0},{"x":112725,"y":1},{"x":113738,"y":0},{"x":113996,"y":1},{"x":114597,"y":0},{"x":115285,"y":1},{"x":117406,"y":0},{"x":118520,"y":1},{"x":119114,"y":0},{"x":119374,"y":1},{"x":119967,"y":0},{"x":120657,"y":1},{"x":121675,"y":0},{"x":121938,"y":1},{"x":122529,"y":0},{"x":123218,"y":1},{"x":124237,"y":0},{"x":124501,"y":1},{"x":125090,"y":0},{"x":125781,"y":1},{"x":126798,"y":0},{"x":127488,"y":1},{"x":128505,"y":0},{"x":128768,"y":1},{"x":130448,"y":0},{"x":131567,"y":1},{"x":132155,"y":0},{"x":132846,"y":1},{"x":133435,"y":0},{"x":133699,"y":1},{"x":134715,"y":0},{"x":134981,"y":1},{"x":135569,"y":0},{"x":135836,"y":1},{"x":136423,"y":0},{"x":136717,"y":1},{"x":137277,"y":0},{"x":137569,"y":1},{"x":138132,"y":0},{"x":138400,"y":1},{"x":138984,"y":0},{"x":139678,"y":1},{"x":140691,"y":0},{"x":140981,"y":1},{"x":141545,"y":0},{"x":141839,"y":1}];

const gridvalues = [
    {t:"100 ms", s: 100000},
    {t:"10 ms",  s:  10000},
    {t:"1 ms",   s:   1000},
    {t:"100 us",  s:   100},
    {t:"10 us",  s :    10},
];
const pulsehight = 25;
const channelhight = 50;
const analyzer = {
  startlevel:0, minstartlength:1000, starttcolor: "white", 
  stoplevel:1, minstoplength: 1600, stopcolor: "cyan"
};

var lookupTable = [
  {"byte":284,"char":"A"},{"byte":410,"char":"B"},{"byte":306,"char":"C"},{"byte":434,"char":"D"},{"byte":218,"char":"E"},{"byte":778,"char":"\f"}
];

var magiData = [];
var magStatistics = [];

var rawgrid = 2;
var intervalgrid = 2;

window.addEventListener('load', function() {
    var mouse = {x:0, y:0, down: false, dragging:false, dx:0, dy:0};
    var interval = {starttime:0, scale:0, xa:0, xb:0, enable:false, dragging: false, begin:0, end:0, fadeout:0, fadeoutmax:1000};

    const canvas = document.getElementById('id2424-canvas');
    const dc = canvas.getContext('2d', {
      willReadFrequently: true
    });
  
      var colorArray = [
        "red", "green", "blue", "cyan", "pink", "purple"
      ];
    
    canvas.width = window.innerWidth-10;
    canvas.height = window.innerHeight-10;
    var tick = 0;
    var textoff = 200;
  
    function plot(arr, floor, hi, scale, color, starttime, grid){
      var first = true;
      var level = 0;
      dc.beginPath();
      arr.forEach(e =>{
        if (first){
          level = e.y;
          first = false;
        }
        dc.lineTo((e.x-starttime)*scale, floor - level * hi);
        level = e.y;
        dc.lineTo((e.x-starttime)*scale, floor - level * hi);
      });
      dc.strokeStyle = color;
      dc.lineWidth = 2;
      dc.stroke();

      dc.beginPath();
      for(var i=0;i<dataArray.length-1;i++){
          if (dataArray[i].y == analyzer.startlevel){
              dx = dataArray[i+1].x - dataArray[i].x;
              if (dx>analyzer.minstartlength){
                  dc.moveTo((dataArray[i].x-starttime)*scale, floor - analyzer.startlevel * hi);
                  dc.lineTo((dataArray[i+1].x-starttime)*scale, floor - analyzer.startlevel * hi);
              }
          }
      }
      dc.strokeStyle = analyzer.starttcolor;
      dc.lineWidth = 3;
      dc.stroke();

      dc.beginPath();
      for(var i=0;i<dataArray.length-1;i++){
          if (dataArray[i].y == analyzer.stoplevel){
              dx = dataArray[i+1].x - dataArray[i].x;
              if (dx>analyzer.minstoplength){
                  dc.moveTo((dataArray[i].x-starttime)*scale, floor - analyzer.stoplevel * hi);
                  dc.lineTo((dataArray[i+1].x-starttime)*scale, floor - analyzer.stoplevel * hi);
              }
          }
      }
      dc.strokeStyle = analyzer.stopcolor;
      dc.lineWidth = 3;
      dc.stroke();

      var offset = (starttime % gridvalues[grid].s) * scale;
      if (grid != null){
        dc.beginPath();
        for(var xaxis = 0; xaxis < canvas.width; xaxis += scale*gridvalues[grid].s){
            dc.moveTo(xaxis + offset, floor+pulsehight);
            dc.lineTo(xaxis + offset, floor-pulsehight*2);
        }
        dc.strokeStyle = "yellow";
        dc.lineWidth = 1;
        dc.stroke();
      }
    }

    function magiPlot(magi, color){
      const arr = dataArray.slice(magi.x1+1, magi.x2+1);
      const scale = (canvas.width - 540)/11000;
      const starttime = arr[0].x;
      const hi = 20;
      const floor = magi.line + hi;
      var first = true;
      var level = 0;
      dc.beginPath();
      arr.forEach(e =>{
        if (first){
          level = e.y;
          first = false;
        }
        dc.lineTo(520+(e.x-starttime)*scale, floor - level * hi);
        level = e.y;
        dc.lineTo(520+(e.x-starttime)*scale, floor - level * hi);
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
      var scale = 0.01;
  
      var low = channelhight*3;

      if (dataArray.length>0){
        var maxX = dataArray[dataArray.length-1].x;
        scale = (canvas.width-20) / maxX;

        try{
            document.getElementById("rawwidth").innerText = "Width:" + maxX + " us";
        }
        catch{}

        if (interval.enable){
            dc.fillStyle = "gray";
            dc.fillRect(interval.xa, low-channelhight, interval.xb, pulsehight*3);

            if (interval.dragging){
                interval.end = mouse.x;
                dc.fillRect(interval.begin, channelhight*5, interval.end-interval.begin, pulsehight*3);

                try{
                    const begin = interval.starttime + Math.min(interval.begin, interval.end)/interval.scale;
                    const end = interval.starttime + Math.max(interval.begin, interval.end)/interval.scale;
                    const length = end - begin;
                    document.getElementById("intervalcursorbegin").innerText = "Begin: " + Math.floor(begin*10) / 10;
                    document.getElementById("intervalcursorend").innerText = "End: " + Math.floor(end*10) / 10;
                    document.getElementById("intervalcursorlength").innerText = "Length: " + Math.floor(length*10) / 10;
                }
                catch{}

                if (!mouse.down){
                    interval.dragging = false;
                    interval.fadeout = interval.fadeoutmax;
                }
            }

            if (interval.fadeout > 0){
                dc.fillStyle = "darkgreen";
                dc.fillRect(interval.begin, channelhight*5, interval.end-interval.begin, pulsehight*3);
            }

            var newscale = (canvas.width-20) / interval.xb;
            var starttime = interval.xa / scale;
            plot(dataArray,low+channelhight*3, pulsehight, interval.scale, "green", interval.starttime, intervalgrid);

        }

        if (mouse.dragging){
          dc.fillStyle = "gray";
          dc.fillRect(Math.min(mouse.x, mouse.dx), low-channelhight, Math.abs(mouse.x-mouse.dx), pulsehight*3);

          var newscale = scale * (canvas.width-20) / Math.abs(mouse.x - mouse.dx);
          var starttime = Math.min(mouse.x, mouse.dx) / scale;

          plot(dataArray,low+channelhight*3, pulsehight, newscale, "green", starttime, intervalgrid);

          if (!mouse.down){
              mouse.dragging = false;

              interval.xa = Math.min(mouse.x, mouse.dx);
              interval.xb = Math.abs(mouse.x-mouse.dx);
              interval.starttime = starttime;
              interval.scale = newscale;
              interval.enable = true;
              interval.fadeout = 0;
              document.getElementById("intervalcursorbegin").innerText = "Begin: -";
              document.getElementById("intervalcursorend").innerText = "End: -";
              document.getElementById("intervalcursorlength").innerText = "Length: -";
          }
        }

        plot(dataArray,low, pulsehight, scale, "red", 0, rawgrid);

        /*
        dc.beginPath();
        for(var i=0;i<dataArray.length-1;i++){
            if (dataArray[i].y == 0){
                dx = dataArray[i+1].x - dataArray[i].x;
                if (dx>1000){
                    dc.moveTo(dataArray[i].x*scale, low);
                    dc.lineTo(dataArray[i+1].x*scale, low);
                }
            }
        }
        dc.strokeStyle = "white";
        dc.lineWidth = 3;
        dc.stroke();
*/
        low += pulsehight;

        if ((mouse.y < low)&&(mouse.y>low-channelhight*2)){
            dc.beginPath();
            xaxis = mouse.x;
            dc.moveTo(xaxis, channelhight*2);
            dc.lineTo(xaxis, low);
            dc.strokeStyle = "white";
            dc.lineWidth = 1;
            dc.stroke();
            try{
                document.getElementById("mousepos").innerText = "Cursor: " + Math.floor(10 * xaxis / scale)/10;
            }
            catch{}

            if ((!mouse.dragging)&&(mouse.down)){
                mouse.dragging = true;
                interval.enable = false;
                mouse.dx = mouse.x;
                mouse.dy = mouse.y;
            }

            if (mouse.dragging){
                try{
                    document.getElementById("interval").innerText = "Width: " + Math.floor(10 * Math.abs(mouse.x - mouse.dx) / scale)/10 + " us";
                }
                catch{}
            }
        }
        if ((mouse.y > channelhight*5)&&(mouse.y<channelhight*6 + pulsehight)&&(interval.enable)){
            dc.beginPath();
            dc.moveTo(mouse.x, channelhight*5);
            dc.lineTo(mouse.x, channelhight*6 + pulsehight);
            dc.strokeStyle = "white";
            dc.lineWidth = 1;
            dc.stroke();

            if ((!interval.dragging)&&(mouse.down)){
                interval.dragging = true;
                interval.begin = interval.end = mouse.x;
                interval.fadeout = 0;
            }

            try{
                const cursor = interval.starttime + mouse.x / interval.scale;
                document.getElementById("intervalcursor").innerText = "Cursor: " + Math.floor(cursor * 10)/10 ;
            }
            catch{}
        }
      }

      if (magiData.length >0){
        const dwidth = canvas.width - 540;
        var ymax = 500;
        magiData.forEach(e=>{
          magiPlot(e,"green");
          ymax = Math.max(ymax, e.line+30);
        });

        if ((mouse.x > 519)&&(mouse.x < canvas.width - 20)&&(mouse.y > 500)&&(mouse.y<ymax)){
          dc.strokeStyle = 'yellow';
          dc.lineWidth = 2;
          const ddx = mouse.x - 520;
          dc.beginPath();
          dc.moveTo(mouse.x, 500);
          dc.lineTo(mouse.x,ymax);
          dc.stroke();

          if (ddx>20){
            dc.beginPath();
            for(var x=mouse.x;x<canvas.width-2;x+=ddx){
              dc.moveTo(x, 500);
              dc.lineTo(x,ymax);
            }
            dc.stroke();
          }
        }
      }

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
  
  
  function e(id,x,y,w,h,t){
    el = document.createElement("div");
    el.style.width = w + "px";
    el.style.height = h + "px";
    el.style.left = x +"px";
    el.style.top = y + "px";
    el.style.position = "absolute";
    //el.style.border = "1px solid blue";
    //el.style.cursor = "pointer";
    el.style.fontSize = "20px";
    el.style.color = "yellow";
    const idtext = (id == null) ? "" : ' id="' + id + '" ';
    el.innerHTML = '<span ' + idtext + 'class="center">' + t + '</span>';
    document.getElementById("settings").appendChild(el);
  }
  
  e(null, 20, 20, 200, 25, "IR analyzer V.3");  
  e("rawwidth", 20, channelhight*2-27, 200, 25, "Width:");  
  e("rawgrid-up", 230, channelhight*2-27, 25, 25, "<");  
  e("rawgrid", 255, channelhight*2-27, 150, 25, "Grid: " + gridvalues[rawgrid].t);  
  e("rawgrid-down", 405, channelhight*2-27, 25, 25, ">");  
  e("mousepos", 430, channelhight*2-27, 200, 25, "Cursor:");  

  e("interval", 20, channelhight*5-27, 200, 25, "Width: -");  
  e("intervalgrid-up", 230, channelhight*5-27, 25, 25, "<");  
  e("intervalgrid", 255, channelhight*5-27, 150, 25, "Grid: " + gridvalues[intervalgrid].t);  
  e("intervalgrid-down", 405, channelhight*5-27, 25, 25, ">");  
  e("intervalcursor", 430, channelhight*5-27, 200, 25, "Cursor: -");  
  e("intervalcursorbegin", 630, channelhight*5-27, 200, 25, "Begin: -");  
  e("intervalcursorend", 830, channelhight*5-27, 200, 25, "End: -");  
  e("intervalcursorlength", 1030, channelhight*5-27, 200, 25, "Length: -");  
  e("dm41x-decode-algorithm", 520, 470, 200, 25, "Udfør magi");  

  function isStartbit(i){
    if (i > dataArray.length - 1) return false;
    if (dataArray[i].y != 0) return false;
    if (dataArray[i+1].x - dataArray[i].x < analyzer.minstartlength) return false;
    return true;
  }

  function isStopbit(i){
    if (dataArray[i].y != 1) return false;
    if ((i+1) == dataArray.length) return true;
    if (dataArray[i+1].x - dataArray[i].x < analyzer.minstoplength) return false;
    return true;
  }

  function isDataPulse(i){
    if (i > dataArray.length - 2) return false;
    if (dataArray[i].y != 1) return false;
    return true;
  }

  function isLow(i){
    if (!isDataPulse) return false;
    if (dataArray[i+2].x - dataArray[i].x > 1000) return false;
    return true;
  }

  function isHigh(i){
    if (!isDataPulse) return false;
    if (dataArray[i+2].x - dataArray[i].x < 1000) return false;
    return true;
  }

  function isEnd(i){
    if (i < dataArray.length) return false;
    return true;
  }

  function lookupByte(byte){
    const newobject = {byte:byte};
    const found = lookupTable.find(obj => obj.byte === byte);
    if (!found){
      const no ={...newobject, char:'?'};
      lookupTable.push(no);
      return '?';
    }
    return found.char;
  }

  document.getElementById("dm41x-decode-algorithm").addEventListener('click', function(e) {

    var i = 0;
    var bit = 0;
    var byte = 0;
    var byte2 = 0;
    var start = 0;
    var stop = 0;
    var line = 500;
    magiData = [];
    
    var str = "";
    var charStr = "";
    do{
      if (i < dataArray.length-1){
        const level = dataArray[i].y;
        const ddx = dataArray[i+1].x - dataArray[i].x;
        const found = magStatistics.find(obj => ((obj.level === level)&&(obj.dx === ddx)));
        if (!found){
          const newobject = {level:level, dx:ddx, count:1};
          magStatistics.push(newobject);
        }
        else{
          found.count++;
        }
      }
      if (isStartbit(i)) {
        str += "start; ";
        start = i;
        i++;
        bit = 1;
        byte = 0;
        byte2 = 0;
        var str = "start;  ";
      } else 
      if (isStopbit(i)) {
        str += "  stop; ";
        stop = i;
        magiData.push({
          x1:start,
          x2:stop,
          line:line
        });
        i++;
        line += 35;
        charStr += lookupByte(byte2);
      } else
      if (isDataPulse(i)){
        if (isHigh(i)){
          str += "1";
          i += 2;
          byte <<= 1;
          byte |= 1;
          byte2 |= (1 << bit);
          bit++;
        }
        else if (isLow(i)){
          str += "0";
          i += 2;
          byte <<= 1;
          bit++;
        }
        else {
          str += "error one; ";
          i += 1;
        }
      }
      else {
        str += "error two; ";
        i += 1;
      }
    } while(!isEnd(i));


  magStatistics.sort((a, b) => {
    const idComparison = a.level - b.level; // Primary sort by `level`
   return idComparison !== 0 ? idComparison : a.dx - b.dx; // Secondary sort by `dx`
  });


  });

  document.getElementById("rawgrid-up").addEventListener('click', function(e) {
    if (rawgrid > 0){
        rawgrid--;
        document.getElementById("rawgrid").innerText = "Grid: " + gridvalues[rawgrid].t;
    }
  });

  document.getElementById("rawgrid-down").addEventListener('click', function(e) {
    if (rawgrid < gridvalues.length-1){
        rawgrid++;
        document.getElementById("rawgrid").innerText = "Grid: " + gridvalues[rawgrid].t;
    }
  });

  document.getElementById("intervalgrid-up").addEventListener('click', function(e) {
    if (intervalgrid > 0){
        intervalgrid--;
        document.getElementById("intervalgrid").innerText = "Grid: " + gridvalues[intervalgrid].t;
    }
  });

  document.getElementById("intervalgrid-down").addEventListener('click', function(e) {
    if (intervalgrid < gridvalues.length-1){
        intervalgrid++;
        document.getElementById("intervalgrid").innerText = "Grid: " + gridvalues[intervalgrid].t;
    }
  });

