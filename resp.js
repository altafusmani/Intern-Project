burger = document.querySelector(".burger")
navbar = document.querySelector(".navbar")
list = document.querySelector(".list")
nav = document.querySelector(".nav")

burger.addEventListener("click", ()=>{
    nav.classList.toggle("v-class")
    list.classList.toggle("v-class")
    navbar.classList.toggle("h-nav")

})