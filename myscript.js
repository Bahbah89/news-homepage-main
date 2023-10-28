const read = document.getElementById("read-more");
const highLight = document.querySelectorAll(".highlight-title");
const bottomTitle = document.querySelectorAll(".bottom-title");

const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");

const container = document.querySelector(".container-grid");
const mobPic = document.querySelector(".mob-pic");
const close = document.querySelector(".close");

// function that closes hamburger menu
const closeWindow = function () {
  hamburgerMenu.classList.add("hidden");
  container.style.opacity = "";
  container.style.filter = "";
  mobPic.style.opacity = "";
  mobPic.style.filter = "";
};

// function that closes hamburger menu
const openWindow = function () {
  hamburgerMenu.classList.remove("hidden");
  container.style.opacity = "30%";
  container.style.filter = "blur(4px)";
  mobPic.style.opacity = "30%";
  mobPic.style.filter = "blur(4px)";
};

//Click on hamburger menu to show window
hamburgerIcon.addEventListener("click", openWindow);
//click on picture to close menu window
mobPic.addEventListener("click", closeWindow);
// click on container part of the page this close menu window
container.addEventListener("click", closeWindow);
//click on the X to close menu window
close.addEventListener("click", closeWindow);

// hover over readmore button to change color
read.addEventListener("mouseover", function () {
  console.log("clicked");

  read.style.backgroundColor = "hsl(240, 100%, 5%)";
  // when mouse is not touching read more button change to original color
  read.addEventListener("mouseout", function () {
    //console.log("out");
    read.style.backgroundColor = "";
  });
});

// Used forEach method to perform function for all classes with the name highLight
highLight.forEach(function (e) {
  // hover over title text in blue box part to change color
  e.addEventListener("mouseover", function () {
    //console.log("clicked");
    this.style.color = "hsl(35, 77%, 62%)";
  });
  //when mouse is not touching title text, change to original color
  e.addEventListener("mouseout", function () {
    this.style.color = "";
  });
});

// Used forEach method to perform function for all classes with the name bottomTitle

bottomTitle.forEach(function (e) {
  e.addEventListener("mouseover", function () {
    this.style.color = "hsl(5, 85%, 63%)";
  });
  e.addEventListener("mouseout", function () {
    this.style.color = "";
  });
});
