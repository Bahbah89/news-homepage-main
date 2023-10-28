const read = document.getElementById("read-more");
const highLight = document.querySelectorAll(".highlight-title");
const bottomTitle = document.querySelectorAll(".bottom-title");

const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");

const container = document.querySelector(".container-grid");
const mobPic = document.querySelector(".mob-pic");
const close = document.querySelector(".close");

const closeWindow = function () {
  hamburgerMenu.classList.add("hidden");
  container.style.opacity = "";
  container.style.filter = "";
  mobPic.style.opacity = "";
  mobPic.style.filter = "";
};

const openWindow = function () {
  hamburgerMenu.classList.remove("hidden");
  container.style.opacity = "30%";
  container.style.filter = "blur(4px)";
  mobPic.style.opacity = "30%";
  mobPic.style.filter = "blur(4px)";
};

hamburgerIcon.addEventListener("click", openWindow);
mobPic.addEventListener("click", closeWindow);
container.addEventListener("click", closeWindow);
close.addEventListener("click", closeWindow);

read.addEventListener("mouseover", function () {
  console.log("clicked");

  read.style.backgroundColor = "hsl(240, 100%, 5%)";
  read.addEventListener("mouseout", function () {
    //console.log("out");
    read.style.backgroundColor = "";
  });
});

highLight.forEach(function (e) {
  e.addEventListener("mouseover", function () {
    //console.log("clicked");
    this.style.color = "hsl(35, 77%, 62%)";
  });
  e.addEventListener("mouseout", function () {
    this.style.color = "";
  });
});

bottomTitle.forEach(function (e) {
  e.addEventListener("mouseover", function () {
    this.style.color = "hsl(5, 85%, 63%)";
  });
  e.addEventListener("mouseout", function () {
    this.style.color = "";
  });
});
