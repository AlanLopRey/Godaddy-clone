const d = document;
const btn = d.getElementsByClassName("marketing__acc--h2");
const p = d.getElementsByClassName("marketing__acc--p");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    p[i].classList.toggle("active");
  });
}
