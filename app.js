let title = document.querySelector(".title");
let linkedin = document.querySelector(".linkedin");
let github = document.querySelector(".github");
let name = document.querySelector(".name");
let burger = document.querySelector(".burger");
let line = document.querySelectorAll(".line");
let x = document.querySelector(".x");
let slider = document.querySelector("#slider");

title.style.transition = "transform 2s, opacity 2s ease-in";
linkedin.style.transition = "opacity 2s ease-in, background 0.25s ease-out";
github.style.transition = "opacity 2s ease-in, background 0.25s ease-out";

setTimeout(() => {
  title.style.transform = "translateY(0px)";
  title.style.opacity = "1";
  linkedin.style.opacity = "1";
  github.style.opacity = "1";
}, 100);

setTimeout(function () {
  name.style.opacity = "1";
}, 2000);

//BURGER MOUSE OVER AND EXIT, COLOR CHANGE && SAME FOR THE X THAT APPEARS
burger.addEventListener("mouseover", function () {
  for (let l of line) {
    l.style.background = "var(--clr-accent)";
  }
});

burger.addEventListener("mouseout", function () {
  for (let l of line) {
    l.style.background = "white";
  }
});

x.addEventListener("mouseover", function () {
  x.style.color = "var(--clr-accent)";
});

x.addEventListener("mouseout", function () {
  x.style.color = "white";
});

// BURGER CLICK STUFF && X CLICK STUFF
burger.addEventListener("click", function () {
  // BURGER DISSAPEARS AND X APPEARS
  burger.style.display = "none";
  slider.classList.remove("up");
  slider.classList.add("down");
  x.style.display = "initial";
  // ***************************************
});

x.addEventListener("click", function () {
  x.style.display = "none";
  slider.classList.remove("down");
  slider.classList.add("up");
  burger.style.display = "flex";
});
// *************************************

// github.addEventListener("hover", function () {
//   github.style.opacity = "0";
//   githubyellow.style.opacity = "1";
// });

// linkedin.addEventListener("hover", function () {
//   linkedin.style.opacity = "0";
//   linkedinyellow.style.opacity = "1";
// });
