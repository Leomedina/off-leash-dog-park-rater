const hamburgerBtn = document.getElementById("hamburger");

hamburgerBtn.onclick = function toggleMenu() {
  document.getElementById("hamMenu").classList.toggle("hidden");
};