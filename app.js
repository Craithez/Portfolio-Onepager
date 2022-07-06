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
let lastScroll = 0;

window.addEventListener('scroll', function() {
  // scroll down
  if (lastScroll < window.pageYOffset) {
    window.scrollBy(0, window.innerHeight);
  }
  // scroll up
  else if (lastScroll > window.pageYOffset) {
    window.scrollBy(0, window.innerHeight * -1);
  }
  lastScroll = window.pageYOffset;
}); */