let title = document.querySelector(".title");
let linkedin = document.querySelector(".linkedin");
let github = document.querySelector(".github");
let name = document.querySelector(".name");
let burger = document.querySelector(".burger");
let line = document.querySelectorAll(".line");
let x = document.querySelector(".x");
let slider = document.querySelector("#slider");
let bubble = document.querySelectorAll(".bubble");
let resumeBtn = document.querySelector(".resume-btn");
let arrow = document.querySelector(".arrow");
let project = document.querySelector(".project3");
let p1 = document.querySelector(".p1");
let phone = document.querySelector(".phone");
let jsDesign = document.querySelector(".jsdesign");
let projectsLink = document.querySelector(".projectslink");
let resumeLink = document.querySelector(".resumelink");
let aboutLink = document.querySelector(".aboutlink");
let contactLink = document.querySelector(".contactlink");
let scrollBtn = document.querySelector(".scrollbtn");
let container = document.querySelector(".container");

title.style.transition = "transform 2s, opacity 2s ease-in";
linkedin.style.transition = "opacity 2s ease-in, background 0.25s ease-out";
github.style.transition = "opacity 2s ease-in, background 0.25s ease-out";
bubble[0].classList.add("active-bubble");

window.addEventListener("wheel", function (e) {
  //MAIN
  if (isInViewport(arrow)) {
    bubble[0].classList.add("active-bubble");
  } else {
    bubble[0].classList.remove("active-bubble");
  }
  //PROJECTS
  if (isInViewport(project)) {
    bubble[1].classList.add("active-bubble");
  } else {
    bubble[1].classList.remove("active-bubble");
  }
  //RESUME
  if (isInViewport(resumeBtn)) {
    bubble[2].classList.add("active-bubble");
  } else {
    bubble[2].classList.remove("active-bubble");
  }
  //ABOUT
  if (isInViewport(p1)) {
    bubble[3].classList.add("active-bubble");
  } else {
    bubble[3].classList.remove("active-bubble");
  }
  //CONTACT
  if (isInViewport(phone)) {
    bubble[4].classList.add("active-bubble");
  } else {
    bubble[4].classList.remove("active-bubble");
  }
});

window.addEventListener("touchmove", function (e) {
  //MAIN
  if (isInViewport(arrow)) {
    bubble[0].classList.add("active-bubble");
  } else {
    bubble[0].classList.remove("active-bubble");
  }
  //PROJECTS
  if (isInViewport(project)) {
    bubble[1].classList.add("active-bubble");
  } else {
    bubble[1].classList.remove("active-bubble");
  }
  //RESUME
  if (isInViewport(resumeBtn)) {
    bubble[2].classList.add("active-bubble");
  } else {
    bubble[2].classList.remove("active-bubble");
  }
  //ABOUT
  if (isInViewport(p1)) {
    bubble[3].classList.add("active-bubble");
  } else {
    bubble[3].classList.remove("active-bubble");
  }
  //CONTACT
  if (isInViewport(phone)) {
    bubble[4].classList.add("active-bubble");
  } else {
    bubble[4].classList.remove("active-bubble");
  }
});

let counter = 0;
for (let b of bubble) {
  counter++;
  b.id += counter;
  b.addEventListener("click", function (e) {
    for (let b of bubble) {
      b.classList.remove("active-bubble");
    }

    if (e.target.id === "1") {
      console.log("bubble 1");
      bubble[0].classList.add("active-bubble");
    } else {
      bubble[0].classList.remove("active.bubble");
    }

    if (e.target.id === "2") {
      console.log("bubble 2");
      bubble[1].classList.add("active-bubble");
    } else {
      bubble[1].classList.remove("active.bubble");
    }

    if (e.target.id === "3") {
      console.log("bubble 3");
      bubble[2].classList.add("active-bubble");
    } else {
      bubble[2].classList.remove("active.bubble");
    }

    if (e.target.id === "4") {
      console.log("bubble 4");
      bubble[3].classList.add("active-bubble");
    } else {
      bubble[3].classList.remove("active.bubble");
    }

    if (e.target.id === "5") {
      console.log("bubble 5");
      bubble[4].classList.add("active-bubble");
    } else {
      bubble[4].classList.remove("active.bubble");
    }
  });
}

jsDesign.addEventListener("click", function () {
  console.log("Clicked JSDesigns");
  for (let b of bubble) {
    b.classList.remove("active-bubble");
  }
  bubble[0].classList.add("active-bubble");
});

scrollBtn.addEventListener("click", function () {
  console.log("Clicked scrollBtn");
  for (let b of bubble) {
    b.classList.remove("active-bubble");
  }
  bubble[0].classList.add("active-bubble");
});

projectsLink.addEventListener("click", function () {
  console.log("Clicked projectsLink");
  for (let b of bubble) {
    b.classList.remove("active-bubble");
  }
  bubble[1].classList.add("active-bubble");
});

arrow.addEventListener("click", function () {
  console.log("Clicked arrow");
  for (let b of bubble) {
    b.classList.remove("active-bubble");
  }
  bubble[1].classList.add("active-bubble");
});

resumeLink.addEventListener("click", function () {
  console.log("Clicked resumeLink");
  for (let b of bubble) {
    b.classList.remove("active-bubble");
  }
  bubble[2].classList.add("active-bubble");
});

aboutLink.addEventListener("click", function () {
  console.log("Clicked aboutLink");
  for (let b of bubble) {
    b.classList.remove("active-bubble");
  }
  bubble[3].classList.add("active-bubble");
});

contactLink.addEventListener("click", function () {
  console.log("Clicked contactLink");
  for (let b of bubble) {
    b.classList.remove("active-bubble");
  }
  bubble[4].classList.add("active-bubble");
});

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

// We want to write code that knows when we are in a certain section, if we know when we are in a certain section, we can highlight the corresponding bubble YELLOW //

var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};
