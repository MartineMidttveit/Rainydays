import fetchJackets from "../fetchJackets.js"
import displayJacket from "../createHTML/displayJacket.js";


const url =  "https://api.noroff.dev/api/v1/rainy-days/";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");



const jacket = await fetchJackets(url, id)

console.log(jacket)



const productWrapper = document.querySelector(".product-wrapper");

displayJacket(jacket, productWrapper);