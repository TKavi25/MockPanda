export function generateRestaurantHtml(restaurant){
    const restaurantHtml =
        `<img src="${restaurant.img}" alt= "restaurant: ${restaurant.name}">
            <div class="restaurant-details">
                <div class="important-restaurant-details">
                    <div>${restaurant.name}</div>
                    <div>⭐ ${restaurant.rating} <span>(${restaurant.ratingAmount})</span></div>
                </div>
                <div class="more-restaurant-details">🚴🏽 ${restaurant.distance} ◦ ৳${restaurant.deliveryFee}</div>
            </div>`;
    return restaurantHtml
}