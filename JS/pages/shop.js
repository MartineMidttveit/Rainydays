import fetchJackets from "../fetchJackets.js"
import popularProducts from "../createHTML/popularProducts.js"

const container = document.querySelector(".product-list")

const jackets = await fetchJackets("https://api.noroff.dev/api/v1/rainy-days")

jackets.forEach(jacket => popularProducts(jacket, container))


const menCheckbox = document.getElementById("men");


menCheckbox.addEventListener("click", function() {

    if (menCheckbox.checked) {
        document.body.style.opacity = "0";
        setTimeout(function() {
            window.location.href = "/HTML/mens.html"; 
        }, 100); 
    }
});

const womenCheckbox = document.getElementById("women");

womenCheckbox.addEventListener("click", function() {

    if (womenCheckbox.checked) {
        document.body.style.opacity = "0";
        setTimeout(function() {
            window.location.href = "/HTML/womens.html"; 
        }, 100); 
    }
});



