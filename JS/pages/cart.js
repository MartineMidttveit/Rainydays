import cartItem from "../createHTML/cartItem.js";
import fetchJackets from "../fetchJackets.js";
import updateCart from "../cart/updateCart.js";
import createError from "../createHTML/createError.js";

const cartItems = document.querySelector(".clickedProducts");
const loadingIndicator = document.querySelector(".loading-indicator");
loadingIndicator.remove();

try{
  const allJackets = await fetchJackets();
  const getPrevJackets = localStorage.getItem("jackets");
  let prevJackets = JSON.parse(getPrevJackets);

  updateCart();

  prevJackets.forEach((jacket) => {
    const foundJacket = allJackets.find((item) => {
      if (item.id == jacket.id) {
        return jacket;
      }
    });
    cartItem(foundJacket, cartItems, jacket.quantity);
  });
} catch(error) {
    createError(error, cartItems);
    console.error("An error occurred during fetch:", error);
}






