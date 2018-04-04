document.body.classList.remove("no-js");

var link = document.querySelector(".search");
var popup = document.querySelector(".text-form");

link.addEventListener("click", function(evt) {
  popup.classList.toggle("modal-show");
});