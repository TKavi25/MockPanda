import "./load.js"
import { addHeader } from "./header.js";
import { generateRestaurantHtml } from "./generate-restaurantHtml.js";

async function getRestaurantData() {
    try {
        const response = await fetch("js/data.json")

        if(!response.ok){
            throw new Error("failed to fetch");
        }
        const restaurantData = await response.json();

        const discountedRestaurants = restaurantData.filter(restaurant => restaurant.discount > 0);

        const htmlContainer = document.querySelector("main");

        if(discountedRestaurants.length === 0){
            htmlContainer.innerHTML = `<h3>No offers available.</h3>`;
        }else{
            discountedRestaurants.forEach(restaurant =>{
                htmlContainer.append(generateRestaurantHtml(restaurant));
            });
        }

        



    } catch (error) {
        htmlContainer.innerHTML = `<h3 style="color: black;">${error}. Please try again later.</h3>`;
    }
}

addHeader();
getRestaurantData()

