(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-button").classList.remove("active-button");
            this.classList.add("active-button");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
})();

/* 
<a href="#area1">Zu Absatz 4</a>
	…	…	…

<div class="area" id="area1"> … … … </div>
*/