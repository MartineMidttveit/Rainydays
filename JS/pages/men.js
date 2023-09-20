import fetchJackets from "../fetchJackets.js"
import popularProducts from "../createHTML/popularProducts.js"
import createError from "../createHTML/createError.js";

const container = document.querySelector(".product-list");
const jackets = await fetchJackets("https://api.noroff.dev/api/v1/rainy-days");

if (jackets.errors) {
    createError(jackets, container);
} else {
    const mensJackets = jackets.reverse()
    mensJackets.forEach(jacket => popularProducts(jacket, container))

    const genderTypes = document.querySelectorAll(".gender")

    genderTypes.forEach(gender => gender.textContent = "Male")
}