function changeImage(){
    var img = document.getElementById("profileimg");
    img.src = images[x];
    x++;
    if(x >= images.length){
        x = 0;
    } 
}   
var timerid = setInterval(changeImage(), 4000);

var images = [], x = 0;
images[0] = "img/me1.jpg";
images[1] = "img/me2.jpg";




/*
var image = document.getElementById("image");                 
            var currentPos = 0;
            var images = ["me1.jpg", "me2.jpg", "me3.jpg"]
            function nextpicture() {
                if (++currentPos >= images.length)
                    currentPos = 1;
                image.src = images[currentPos];
            }
            setInterval(nextpicture, 4000);
*/
