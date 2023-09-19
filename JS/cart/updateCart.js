import changeQuantity from "./changeQuantity.js";

const totalPrice = document.querySelector(".price-total");
const shipping = document.querySelector(".shipping-cost");
const totalAndShipping = document.querySelector(".products-list-container")
const checkoutBtn = document.querySelector(".goToPay")


const counters = document.querySelectorAll(".count");

export default function updateCart() {
  const getItems = localStorage.getItem("jackets");
  const parsedItem = JSON.parse(getItems);

  if (parsedItem && parsedItem.length >= 1) {
    const total = parsedItem
      .reduce((acc, cur) => acc + Number(cur.price * cur.quantity), 0)
      .toFixed(2);
    totalPrice.textContent = `£ ${total}`;

    if (total >= 250) shipping.textContent = "FREE";
    else shipping.textContent = "£ 9.99";
    

   const totalJackets = parsedItem.reduce((acc,cur) => acc + (cur.quantity), 0)
   counters.forEach(counter => counter.textContent = totalJackets)
      
  }


  else {
    totalAndShipping.style.display = "none";
    checkoutBtn.textContent = "Shopping cart is empty.."
    checkoutBtn.classList.add("small-title")
    count.textContent = 0;
  }
}
