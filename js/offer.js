// import "./load.js"
// import "./navBar.js"


// const htmlContainer = document.querySelector("main");

// const discountedRestaurants = restaurants.filter(restaurant => restaurant.discount > 0);

// if(discountedRestaurants.length === 0){
//     htmlContainer.innerHTML = `<h3>No offers available.</h3>`;
// }else{
//     discountedRestaurants.forEach(restaurant =>{
//         htmlContainer.innerHTML +=
//                 `<div class="restaurant">
//                     <div class="restaurant-offer">${restaurant.discount}%</div>
//                     <img src="${restaurant.img}" alt= "restaurant: ${restaurant.name}">
//                     <div class="restaurant-details">
//                         <div class="important-restaurant-details">
//                             <div>${restaurant.name}</div>
//                             <div>⭐ ${restaurant.rating} <span>(${restaurant.ratingAmount})</span></div>
//                         </div>
//                         <div class="more-restaurant-details">🚴🏽 ${restaurant.distance} ◦ ৳${restaurant.deliveryFee}</div>
//                     </div>
//                 </div>`
//     });
// }


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

        const discountedRestaurants = restaurantData.filter(restaurant => restaurant.discount > 0);

        if(discountedRestaurants.length === 0){
            htmlContainer.innerHTML = `<h3>No offers available.</h3>`;
        }else{
            discountedRestaurants.forEach(restaurant =>{
                htmlContainer.innerHTML +=
                    `<div class="restaurant">
                        <div class="restaurant-offer">${restaurant.discount}%</div>
                        ${generateRestaurantHtml(restaurant)}
                    </div>`
            });
        }

        



    } catch (error) {
        htmlContainer.innerHTML = `<h3 style="color: black;">${error}. Please try again later.</h3>`;
    }
}


const htmlContainer = document.querySelector("main");
getRestaurantData()

