const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .iconbar ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});

/*  old function for navbar with icon + highlighted current section icon 
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