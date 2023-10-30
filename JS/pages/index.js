import fetchJackets from "../fetchJackets.js";
import favorite from "../favorite.js";
import popularProducts from "../createHTML/popularProducts.js";
import sectionFour from "../createHTML/sectionFour.js";
import createError from "../createHTML/createError.js";
import subscribe from "../details/subscribe.js";

const productList = document.querySelector(".product-list");
const newProduct = document.querySelector(".sectionFour");
const sectionTree = document.querySelector(".sectionTree");
const loadingIndicators = document.querySelectorAll(".loading-indicator");

const allJackets = await fetchJackets();

loadingIndicators.forEach((loadingIndicator) => loadingIndicator.remove());

const allNumbers = [];
for (let index = 0; index <= 3; index++) {
  const randomNumber = Math.floor(Math.random() * allJackets.length);

  if (allNumbers.includes(randomNumber)) {
    index--;
  } else {
    allNumbers.push(randomNumber);
  }
}
console.log(allJackets);
allNumbers.forEach((number) => {
  popularProducts(allJackets[number], productList);
});

const trailBlaze = allJackets.filter(
  (jacket) => jacket.name == "Trailblaze Jacket"
);

sectionFour(trailBlaze[0], newProduct);
favorite();

subscribe();

