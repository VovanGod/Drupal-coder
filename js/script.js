const burger = document.getElementById("burger");
const modal = document.getElementById("modal");
const clickBurger = document.getElementById("clickBurger");
const body = document.getElementsByName("body");

clickBurger.addEventListener("click", ()=> {
    modal.classList.toggle("modal-active");
    burger.classList.toggle("burger-active");
    $("body").toggleClass("no-scroll");
    $("html").toggleClass("no-scroll");
})