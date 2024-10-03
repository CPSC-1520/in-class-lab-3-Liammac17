
const resources = document.querySelector(".javascript-resources")
const button = document.querySelector("show-resources")
const show = resources.querySelectorAll("a")

button.addEventListener("click", function(e){
    resources.classList.remove("d-none")
})

show.addEventListener("mouseover", function(e){
    console.log(e.target)
    e.target.classList.add("fw-bold")
})

show.addEventListener("mouseout", function(e){
    e.target.classList.remove("fw-bold")
})

resources.addEventListener("click", function(e){
    e.target.classList.add("fst-italic")
})