import cartItem from "../createHTML/cartItem.js";
import fetchJackets from "../fetchJackets.js";
import updateCart from "../cart/updateCart.js";

const cartItems = document.querySelector(".clickedProducts");

const url = "https://api.noroff.dev/api/v1/rainy-days";
const allJackets = await fetchJackets(url);

const getPrevJackets = localStorage.getItem("jackets");
let prevJackets = JSON.parse(getPrevJackets);

console.log(prevJackets);
console.log(allJackets);

updateCart();

prevJackets.forEach((jacket) => {
  const foundJacket = allJackets.find((item) => {
    if (item.id === jacket.id) {
      return jacket;
    }
  });
  console.log(foundJacket);
  cartItem(foundJacket, cartItems, jacket.quantity);
});
