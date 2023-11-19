import fetchJackets from "../fetchJackets.js";
import popularProducts from "../createHTML/popularProducts.js";
import createError from "../createHTML/createError.js";
import slideshow from "../details/slideshow.js";
import favorite from "../favorite.js";

const container = document.querySelector(".product-list");
const loadingIndicator = document.querySelector(".loading-indicator");

loadingIndicator.remove();

try {
  const jackets = await fetchJackets();
  jackets.forEach((jacket) => popularProducts(jacket, container));
  slideshow();
}
catch (error){
  createError(error, container);
  console.error("An error occurred during fetch:", error);
}



favorite();
const menCheckbox = document.getElementById("men");

menCheckbox.addEventListener("click", function () {
  if (menCheckbox.checked) {
    document.body.style.opacity = "0";
    setTimeout(function () {
      window.location.href = "/HTML/mens.html";
    }, 100);
  }
});

const womenCheckbox = document.getElementById("women");

womenCheckbox.addEventListener("click", function () {
  if (womenCheckbox.checked) {
    document.body.style.opacity = "0";
    setTimeout(function () {
      window.location.href = "/HTML/womens.html";
    }, 100);
  }
});