import fetchJackets from "../fetchJackets.js";
import popularProducts from "../createHTML/popularProducts.js";
import createError from "../createHTML/createError.js";

const container = document.querySelector(".product-list");
const loadingIndicator = document.querySelector(".loading-indicator");

loadingIndicator.remove();

try {
  const womensJackets = await fetchJackets();
  womensJackets.forEach((jacket) => popularProducts(jacket, container));
} catch (error) {

  createError(error, container)
  console.error("An error occurred during fetch:", error);
}
