const navbtn = document.querySelector(".nav-item")
const barbtn = document.querySelector(".bar-btn")
const crossbtn = document.querySelector(".cross-btn")
barbtn.addEventListener("click", function () {
    navbtn.classList.toggle("active")
})
crossbtn.addEventListener("click", function () {
    navbtn.classList.remove("active")
})