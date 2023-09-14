import fetchJackets from "../fetchJackets.js";
import favorite from "../favorite.js";
import popularProducts from "../createHTML/popularProducts.js";
import sectionFour from "../createHTML/sectionFour.js";

const productList = document.querySelector(".product-list");
const newProduct = document.querySelector(".sectionFour");

const url = "https://api.noroff.dev/api/v1/rainy-days";
const allJackets = await fetchJackets(url);

const allNumbers = []
for (let index = 0; index <= 3; index++) {    
    const randomNumber = Math.floor (Math.random() * allJackets.length)

    if(allNumbers.includes(randomNumber)) {
        index --;
    }
    else { 
        console.log(allJackets[randomNumber])
        allNumbers.push(randomNumber)}
}

allNumbers.forEach(number => {
    popularProducts(allJackets[number], productList);
})

favorite();

sectionFour(allJackets[10], newProduct);