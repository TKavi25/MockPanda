export function generateRestaurantHtml(restaurant){


    const restaurantDiv = document.createElement("div");
    restaurantDiv.classList.add("restaurant");

    const restaurantOffer = document.createElement("div");
    restaurantOffer.classList.add("restaurant-offer");
    restaurantOffer.innerText = restaurant.discount + "% Off";

    const restaurantImg = document.createElement("img");
    restaurantImg.src = restaurant.img;
    restaurantImg.alt = "restaurant: " + restaurant.name;

    const restaurantDetails = document.createElement("div");
    restaurantDetails.classList.add("restaurant-details");

    const ImportantRestaurantDetails = document.createElement("div");
    ImportantRestaurantDetails.classList.add("important-restaurant-details");

    const restaurantName = document.createElement("div");
    restaurantName.innerText = restaurant.name;

    const restaurantRating = document.createElement("div");
    restaurantRating.innerText = "⭐" + restaurant.rating

    const ratingAmount = document.createElement("span");
    ratingAmount.innerText = "(" + restaurant.ratingAmount + ")";

    const moreDetails = document.createElement("div");
    moreDetails.innerText = "🚴🏽" + restaurant.distance + "◦ ৳" + restaurant.deliveryFee;

    
    restaurantDiv.append(restaurantOffer, restaurantImg, restaurantDetails);
    
    restaurantDetails.append(ImportantRestaurantDetails, moreDetails);

    ImportantRestaurantDetails.append(restaurantName, restaurantRating);
    
    restaurantRating.append(ratingAmount);

    if(restaurant.discount > 0){
        restaurantOffer.style.display = "block";
    }else{
        restaurantOffer.style.display = "none";
    }

    return restaurantDiv;
}