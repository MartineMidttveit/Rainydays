import cartItem from "../createHTML/cartItem.js";
import fetchJackets from "../fetchJackets.js";

const cartItems = document.querySelector(".clickedProducts");

const url = "https://api.noroff.dev/api/v1/rainy-days";
const allJackets = await fetchJackets(url);

const getPrevJackets = localStorage.getItem("jackets");
let prevJackets = JSON.parse(getPrevJackets);

prevJackets.forEach(jacket => {

   const foundJacket = allJackets.find((item) => {
    console.log(item.id)
    console.log(jacket.id)
    if (item.id === jacket.id) {
            return  jacket;
    }
   })
    cartItem(foundJacket, cartItems, jacket.quantity)
})
