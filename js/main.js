
// to store the root 
const roots= document.documentElement


const sectionOfProject = document.querySelectorAll(".project.hidden")



// the darkMode icon has nested structure like svg and the i so in order to find ancestor that macthes my "dark-mode"
// use the .closet(to grab the acutal button)
document.addEventListener("click", (event) => {
    if(event.target.closest("#dark-light-mode")){
        const isBright = roots.hasAttribute("data-theme")
        setTheme(isBright ? "warm" : "bright")
    }
})



function seeMore(){
sectionOfProject.forEach((project=>{
project.classList.toggle("hidden")

}))

}


// function to set the theme checking whether its dark or bright on the root
function setTheme(userTheme){
if(userTheme==="bright"){
    roots.setAttribute("data-theme","bright")
} else{
    roots.removeAttribute("data-theme")
}
    // check if it has theme(whether creame or the light) attribute 
    // for creame it will set it to theme for the light likeiwse
}
