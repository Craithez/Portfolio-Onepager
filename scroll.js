/*
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("navbar .container");
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

/*
@ -1,8 +1,19 @@
const gra = function(min, max) {
    return Math.random() * (max - min) + min;
  }
  const init = function(){
  let items = document.querySelectorAll('section');
  cssScrollSnapPolyfill()
  }
  init();
*/