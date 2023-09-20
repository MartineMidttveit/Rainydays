import fetchJackets from "../fetchJackets.js"
import popularProducts from "../createHTML/popularProducts.js"
import createError from "../createHTML/createError.js";

const container = document.querySelector(".product-list");
const womensJackets = await fetchJackets("https://api.noroff.dev/api/v1/rainy-days");

if (womensJackets.errors) {
    createError(womensJackets, container)
} else {
    womensJackets.forEach(jacket => popularProducts(jacket, container))
}