

const seeMoreButton = document.querySelector(".see-more")
seeMoreButton.addEventListener("click", seeMore)

const sectionOfProject = document.querySelectorAll(".project.hidden")

function seeMore(){

sectionOfProject.forEach((project=>{
project.classList.toggle("hidden")

}))

}