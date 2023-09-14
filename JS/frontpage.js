async function getJackets() {
    const fetchJackets = await fetch("https://api.noroff.dev/api/v1/rainy-days");
    const jackets = await fetchJackets.json();
    let display = "";

    for (let index = 0; index <= 3; index++) {
        display +=
        `<div class="product">
            <i class="fa-regular fa-heart" id="favorite"></i>
            <a href="/HTML/shop.html?id=${jackets[index].id}">
            <img src="${jackets[index].image}" alt="">
            <div class="product-info">
                <h3 class="small-title">${jackets[index].title}</h3>
                <p class="price">${jackets[index].price}</p>
                <p class="gender">${jackets[index].gender}</p>
                <button class="dark-green-btn">BUY NOW</button>
            </div>
            </a>
        </div>`
    }
    document.querySelector(".product-list").innerHTML = display;

}

getJackets();


import fetchJackets from "./fetchJackets.js";


const agurk = "https://api.noroff.dev/api/v1/rainy-days";
const eple = "/2145163262abs3";

fetchJackets(agurk);