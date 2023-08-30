const d = document;
const btn = d.getElementsByClassName("acordion");
const accWrapper = d.getElementsByClassName("acc-wrapper");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    accWrapper[i].classList.toggle("active");
  });
}
