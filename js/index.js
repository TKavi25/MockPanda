import "./get-app.js";
import "./navBar.js";
import { generateRestaurantHtml } from "./generate-restaurantHtml.js";
import "./load.js"





async function getRestaurantData() {

    try {
        const response = await fetch("js/data.json");

        if(!response.ok){
            throw new Error("failed to fetch")
        }


        const restaurantData = await response.json();
        const htmlContainer = document.querySelector(".restaurants-container");

        restaurantData.slice(0, 5).forEach(restaurant =>{
                htmlContainer.append(generateRestaurantHtml(restaurant));
            });

    } catch (error) {
        htmlContainer.innerHTML = `<h3 style="color: black;">${error}. Please try again later.</h3>`;
    }
    
}
getRestaurantData()