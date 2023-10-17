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

// createError(allJackets, newProduct);
// createError(allJackets, sectionTree);

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

//
// const consumerKey = "ck_3d78534cad4d9042bcd2d574e6322f7a5b1b10ba";
// const consumerSecret = "cs_efbe898e78435935168e51ccb78e2471bd411be9";
// const credentials = btoa(consumerKey + ":" + consumerSecret);
