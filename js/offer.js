import "./load.js"
import "./navBar.js"
import { restaurants } from "./data.js"

const htmlContainer = document.querySelector("main");

const discountedRestaurants = restaurants.filter(restaurant => restaurant.discount > 0);

if(discountedRestaurants.length === 0){
    htmlContainer.innerHTML = `<h3>No offers available.</h3>`;
}else{
    discountedRestaurants.forEach(restaurant =>{
        htmlContainer.innerHTML +=
                `<div class="restaurant">
                    <div class="restaurant-offer">${restaurant.discount}%</div>
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
}


