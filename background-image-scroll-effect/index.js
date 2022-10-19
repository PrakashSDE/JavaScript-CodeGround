const bgImageEl = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
  updateImage();
});

function updateImage() {
  bgImageEl.style.opacity = 1 - window.pageYOffset / 500;
  bgImageEl.style.backgroundSize = 120- window.pageYOffset / 12 + "%";
}
