var images = [], x = 0;
    images[0] = "img/me1.jpg";
    images[1] = "img/me2.jpg";

    (function() {
        var picture = document.getElementById('img');  
        var delayInSeconds = 45;                           
        var images = ['img/me1.jpg','img/me2.jpg'];
        
    
        var num = 0;
        var changeImage = function() {
            var len = images.length;
            picture.src = images[num++];
            if (num == len) {
                num = 0;
                delayInSeconds = 55;
            }
            
        };
        setInterval(changeImage, delayInSeconds * 90);
        })();



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
