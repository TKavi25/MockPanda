const navBar = document.querySelector(".nav-bars");
const navList = document.querySelector("ul");
const darkOverlay = document.querySelector(".dark-overlay");
navBar.addEventListener("click", ()=>{
    const navBarAriaExpanded = navBar.getAttribute("aria-expanded") === "true";
    if(!navBarAriaExpanded){

        navList.style.right = "0px";
        darkOverlay.style.display = "block";
        navBar.setAttribute("aria-expanded", "true");
    }else{
        darkOverlay.style.display = "none";
        navList.style.right = "-100%";
        navBar.setAttribute("aria-expanded", "false");
    }
    
});
darkOverlay.addEventListener("click", ()=>{
    darkOverlay.style.display = "none";
    navList.style.right = "-100%";
    navBar.setAttribute("aria-expanded", "false");
})

