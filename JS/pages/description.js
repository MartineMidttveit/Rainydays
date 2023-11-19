import fetchJackets from "../fetchJackets.js";
import displayJacket from "../createHTML/displayJacket.js";
import createError from "../createHTML/createError.js";

const productWrapper = document.querySelector(".product-wrapper");
const loadingIndicator = document.querySelector(".loading-indicator");

loadingIndicator.remove();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

try {
  const jacket = await fetchJackets(`/${id}`);
  console.log(jacket)
  displayJacket(jacket, productWrapper);
  const sizeBtns = document.querySelectorAll(".sizeBtn");
  sizeBtns.forEach((btn) =>
    btn.addEventListener("click", () => {
      sizeBtns.forEach((btn) => (btn.style.backgroundColor = "unset"));
      btn.style.backgroundColor = "#BED8D5";
    })
  );

  const colours = document.querySelectorAll(".circle");
  const colorText = document.querySelector(".colorText");
  colours.forEach((color) =>
    color.addEventListener("click", (e) => {
      colorText.textContent = color.dataset.color;
    })
  );
} catch(error) {
  createError(error, productWrapper);
  console.error("An error occurred during fetch:", error);
}




