import fetchJackets from "../fetchJackets.js";
import popularProducts from "../createHTML/popularProducts.js";
import createError from "../createHTML/createError.js";

const container = document.querySelector(".product-list");
const womensJackets = await fetchJackets();

const loadingIndicator = document.querySelector(".loading-indicator");

loadingIndicator.remove();

if (womensJackets.errors) {
  createError(womensJackets, container);
} else {
  womensJackets.forEach((jacket) => popularProducts(jacket, container));
}
