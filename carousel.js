const slider = document.querySelector(".carousel");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
});
slider.addEventListener("mouseup", () => {
  isDown = false;
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return; //stop function
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const move = x - startX;
  slider.scrollLeft = scrollLeft - move;
});
