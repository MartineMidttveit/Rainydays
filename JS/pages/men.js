import fetchJackets from "../fetchJackets.js";
import popularProducts from "../createHTML/popularProducts.js";
import createError from "../createHTML/createError.js";

const container = document.querySelector(".product-list");
const jackets = await fetchJackets();
const loadingIndicator = document.querySelector(".loading-indicator");

loadingIndicator.remove();

if (jackets.errors) {
  createError(jackets, container);
} else {
  const mensJackets = jackets.reverse();
  mensJackets.forEach((jacket) => popularProducts(jacket, container));

  const genderTypes = document.querySelectorAll(".gender");

  genderTypes.forEach((gender) => (gender.textContent = "Male"));
}
