import "./load.js"
import "./navBar.js"
import { generateRestaurantHtml } from "./generate-restaurantHtml.js";

async function getRestaurantData() {
    try {
        const response = await fetch("js/data.json")

        if(!response.ok){
            throw new Error("failed to fetch");
        }
        const restaurantData = await response.json();

        restaurantData.forEach(restaurant =>{
            htmlContainer.innerHTML +=
                `<div class="restaurant">
                    ${generateRestaurantHtml(restaurant)}
                </div>`
        });



    } catch (error) {
        htmlContainer.innerHTML = `<h3 style="color: black;">${error}. Please try again later.</h3>`;
    }
}


const htmlContainer = document.querySelector("main");
getRestaurantData()
