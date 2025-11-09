window.addEventListener('load', function() {
    var mouse = {x:0, y:0, down: false};
    const canvas = document.getElementById('id2024-jul-canvas');
    const dc = canvas.getContext('2d', {
      willReadFrequently: true
    });
//     console.log(dc)
    canvas.width = window.innerWidth-10;
    canvas.height = window.innerHeight-10;

    const photoNames = ["p01.jpg", "p02.jpg", "p03.jpg", "p04.jpg", "p05.jpeg", "p06.jpeg", "p07.jpeg", "p08.jpeg", "p09.jpeg", "p10.jpeg", "p11.jpeg", "p12.jpeg", "p13.jpeg", "p14.jpeg", "p15.jpeg", "p16.jpeg", "p17.jpeg", "p18.jpeg", "p19.jpeg", "p20.jpeg", "p21.jpeg", "p22.jpeg", "p23.jpeg", "p24.jpeg", "p25.jpeg"];
    var photos = [];
    photoNames.forEach(function(photoName){
        var photo = new Image();
        photo.src = "./"+photoName;
        photos.push(photo);
    })
    var startangle = 0;

    var tick = 0;
    var photoIndex = 0;
    const maxTick = 100;
    function animate() {
        if (photos[photoIndex].complete) {
            var aspectRatio = photos[photoIndex].width / photos[photoIndex].height;
            var newWidth, newHeight;
            if (canvas.width / canvas.height > aspectRatio) {
                newHeight = canvas.height;
                newWidth = newHeight * aspectRatio;
            } else {
                newWidth = canvas.width;
                newHeight = newWidth / aspectRatio;
            }
            var xOffset = (canvas.width - newWidth) / 2;
            var yOffset = (canvas.height - newHeight) / 2;

            var scale = 1 + (tick / maxTick) * 2;
            var scaledWidth = newWidth * scale;
            var scaledHeight = newHeight * scale;
            var scaledXOffset = (canvas.width - scaledWidth) / 2;
            var scaledYOffset = (canvas.height - scaledHeight) / 2;
            dc.clearRect(0, 0, canvas.width, canvas.height);
            dc.drawImage(photos[photoIndex], scaledXOffset, scaledYOffset, scaledWidth, scaledHeight);
        }
        tick++;
        dc.clearRect(0, 0, 20, 20);
        dc.fillStyle = "white";
        dc.beginPath();
        dc.moveTo(10, 10);
        dc.lineTo(20, 10);
        dc.arc(10, 10, 9, 0, 2 * Math.PI * tick / maxTick);
        dc.closePath();
        dc.fill();

        if (tick > maxTick) {
            incrementPhotoIndex();
            tick = 0;
        }
        requestAnimationFrame(animate);
    }
    animate();

    function incrementPhotoIndex() {
        photoIndex++;
        if (photoIndex >= photos.length) {
            photoIndex = 0;
        }
    }

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
        if (!mouse.down) {
            tick = 0;
            incrementPhotoIndex();
        }
          mouse.down = true;
    });

  canvas.addEventListener('mouseup', function(evt){
    mouse.down = false;

});
});