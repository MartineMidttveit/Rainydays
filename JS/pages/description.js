import fetchJackets from "../fetchJackets.js"
import displayJacket from "../createHTML/displayJacket.js";
import createError from "../createHTML/createError.js";

const productWrapper = document.querySelector(".product-wrapper");
const loadingIndicator = document.querySelector(".loading-indicator");

loadingIndicator.remove();

const url =  "https://api.noroff.dev/api/v1/rainy-days/";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const jacket = await fetchJackets(url, id)

if (jacket.errors) {
    createError(jacket, productWrapper);
} else {
   displayJacket(jacket, productWrapper);
   const sizeBtns = document.querySelectorAll(".sizeBtn")
   sizeBtns.forEach(btn => btn.addEventListener("click", () => {

    sizeBtns.forEach(btn => btn.style.backgroundColor = "unset")
    btn.style.backgroundColor = "#BED8D5";

}))

const colours = document.querySelectorAll(".circle")
const colorText = document.querySelector(".colorText")
colours.forEach(color => color.addEventListener("click", (e) => {
    colorText.textContent = color.dataset.color

  
}))
}