import cartItem from "../createHTML/cartItem.js";
import fetchJackets from "../fetchJackets.js";


const cartItems = document.querySelector(".products-list-container");

const url = "https://api.noroff.dev/api/v1/rainy-days";
const allJackets = await fetchJackets(url);


