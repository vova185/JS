const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-toggle");
function resizeload() {
    if (window.innerWidth <= 768) {
    menuBtn.classList.add("visible");
    menu.classList.remove("visible");
  } else {
    menu.classList.add("visible");
    menuBtn.classList.remove("visible");
  }
}
window.addEventListener("load", () => {
  resizeload()
});

window.addEventListener("resize", () => {
  resizeload()
});