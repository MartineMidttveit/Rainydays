import fetchJackets from "../fetchJackets.js";
import favorite from "../favorite.js";
import popularProducts from "../createHTML/popularProducts.js";

const productList = document.querySelector(".product-list");

const url = "https://api.noroff.dev/api/v1/rainy-days";
const allJackets = await fetchJackets(url);

const allNumbers = []

for (let index = 0; index <= 3; index++) {    

    const randomNumber = Math.floor (Math.random() * allJackets.length)

    if(allNumbers.includes(randomNumber)) {
        index --;
    }
    else { allNumbers.push(randomNumber)}
}

allNumbers.forEach(number => {
    popularProducts(number, productList, allJackets);
})

favorite();