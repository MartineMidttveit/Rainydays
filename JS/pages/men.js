import fetchJackets from "../fetchJackets.js";
import popularProducts from "../createHTML/popularProducts.js";
import createError from "../createHTML/createError.js";

const container = document.querySelector(".product-list");
const loadingIndicator = document.querySelector(".loading-indicator");
loadingIndicator.remove();

try {
  const jackets = await fetchJackets();
  const mensJackets = jackets.reverse();
  mensJackets.forEach((jacket) => popularProducts(jacket, container));
  const genderTypes = document.querySelectorAll(".gender");
  genderTypes.forEach((gender) => (gender.textContent = "Male"));

} catch(error) {
  createError(error, container);
  console.error("An error occurred during fetch:", error);
}

 

