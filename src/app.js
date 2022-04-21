const btn = document.querySelector(".btn");
const toggleMenu = document.querySelector(".toggle-menu");
const close = document.querySelector("#close");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleMenu.style.display = "block";
});

close.addEventListener("click", (e) => {
  e.preventDefault();
  toggleMenu.style.display = "none";
});
