import { navBarForMobile } from "./navBar.js"

function generateHeaderHtml(){
    const darkOverlayCreated = document.createElement("div")
    darkOverlayCreated.classList.add("dark-overlay")

    const navCreated = document.createElement("nav")
    navCreated.innerHTML=
        `
            <a href="index.html">
                <div class="logo">
                    <img src="content/MockPanda-logo.svg" alt="MockPanda logo" id="logo">
                    <h1>Mock<span>Panda</span></h1>
                </div>
            </a>
        `
    
    const ulCreated = document.createElement("ul")
    ulCreated.innerHTML = 
        `
            <li><a href="index.html">Home</a></li>
            <li><a href="restaurants-page.html">Restaurants</a></li>
            <li><a href="offer.html">Offers</a></li>
        `
        
    navCreated.append(ulCreated);

    const formSearchCreated = document.createElement("form");

    const searchButtonCreated = document.createElement("button");
    searchButtonCreated.innerHTML= '<img src="content/icons/search-icon.svg" alt="search button">'

    const searchCreated =document.createElement("input")
    searchCreated.type = "text";
    searchCreated.placeholder = "Search";
    searchCreated.id = "search";

    formSearchCreated.append(searchButtonCreated, searchCreated);

    const navBarsCreated = document.createElement("button");
    navBarsCreated.classList.add("nav-bars");
    navBarsCreated.setAttribute("aria-expanded", false);
    navBarsCreated.innerHTML =
        `
            <svg class="burger-menu-icon" viewBox="0 0 100 100" fill="white">
                <rect class="first-nav-bar" width="75" height="10" x="12.5" y="25" rx="5"></rect>
                <rect class="second-nav-bar" width="75" height="10" x="12.5" y="45" rx="5"></rect>
                <rect class="third-nav-bar" width="75" height="10" x="12.5" y="65" rx="5"></rect>
            </svg>  
        `


    const header = document.querySelector("header");
    header.append(darkOverlayCreated, navCreated, formSearchCreated, navBarsCreated);
}

export function addHeader(){
    generateHeaderHtml();
    navBarForMobile();
}