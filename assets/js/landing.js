$('.parallax-element__top').paroller();
$('.parallax-element__bottom').paroller();

const menuBtn = document.querySelector(".sitenav-menu__toggle"),
  menuContent = document.querySelector(".sitenav-menu"),
  xButton = document.querySelector(".btn-x"),
  navButtons = document.querySelectorAll(".nav-link__item")

//
function openNavMenu() {
  menuContent.classList.add("sitenav-menu__active")
  document.body.style.overflow = "hidden"
}

function closeNavMenu() {
  menuContent.classList.remove("sitenav-menu__active")
  document.body.style.overflow = ""
}

menuBtn.addEventListener("click", () => {
  if (!menuContent.classList.contains("sitenav-menu__active")) {
    openNavMenu()
  } else {
    closeNavMenu()
  }
})

xButton.addEventListener("click", () => {
  closeNavMenu()
})

window.addEventListener("resize", () => {
  if (window.innerWidth > 1200) {
    closeNavMenu()
  }
})

navButtons.forEach(nav => {
  nav.addEventListener("click", () => {
    if (menuContent.classList.contains("sitenav-menu__active")) {
      closeNavMenu()
    }
  })
})

document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("video");
  const playButton = document.getElementById("playButton");

  playButton.addEventListener("click", function () {
    video.play();
    playButton.classList.add('d-none'); // Hide the play button
  });
});