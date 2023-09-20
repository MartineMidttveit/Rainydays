import cartItem from "../createHTML/cartItem.js";
import fetchJackets from "../fetchJackets.js";
import updateCart from "../cart/updateCart.js";
import createError from "../createHTML/createError.js";

const cartItems = document.querySelector(".clickedProducts");
const loadingIndicator = document.querySelector(".loading-indicator");

const url = "https://api.noroff.dev/api/v1/rainy-days";
const allJackets = await fetchJackets(url);

loadingIndicator.remove()

if (allJackets.errors) {
  createError(allJackets, cartItems);
} else {
  const getPrevJackets = localStorage.getItem("jackets");
  let prevJackets = JSON.parse(getPrevJackets);

  updateCart();

  prevJackets.forEach((jacket) => {
  const foundJacket = allJackets.find((item) => {
    if (item.id === jacket.id) {
      return jacket;
    }
  });
  cartItem(foundJacket, cartItems, jacket.quantity);
});
}