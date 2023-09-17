import fetchJackets from "../fetchJackets.js"
import popularProducts from "../createHTML/popularProducts.js"

const container = document.querySelector(".product-list");
const womensJackets = await fetchJackets("https://api.noroff.dev/api/v1/rainy-days");

womensJackets.forEach(jacket => popularProducts(jacket, container))