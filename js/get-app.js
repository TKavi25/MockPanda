const closeButton = document.querySelector(".close-message")
const appMessage = document.querySelector(".get-app")
closeButton.addEventListener("click", ()=>{
    appMessage.style.animation = "none"
    void appMessage.offsetWidth;
    appMessage.style.bottom = "-100%"
})