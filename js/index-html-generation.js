import { restaurants } from "./data.js";


const htmlContainer = document.querySelector(".restaurants-container");

restaurants.slice(0, 5).forEach(restaurant =>{
    htmlContainer.innerHTML +=
            `<div class="restaurant">
                <img src="${restaurant.img}" alt= "restaurant: ${restaurant.name}">
                <div class="restaurant-details">
                    <div class="important-restaurant-details">
                        <div>${restaurant.name}</div>
                        <div>⭐ ${restaurant.rating} <span>(${restaurant.ratingAmount})</span></div>
                    </div>
                    <div class="more-restaurant-details">🚴🏽 ${restaurant.distance} ◦ ৳${restaurant.deliveryFee}</div>
                </div>
            </div>`
});
