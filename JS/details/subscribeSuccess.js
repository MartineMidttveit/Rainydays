const newsletterContainer = document.querySelector(".newsletter")
const mediumTitle = document.querySelector("#mediumTitle");
const bigTitle = document.querySelector("#bigTitle");
const subText = document.querySelector(".newsletter-text");
const subForm = document.querySelector(".subscription");
const discountCode = document.querySelector("#discountCode");

export default function subscribeSuccess(email) {
    mediumTitle.textContent = "THANK YOU"
    bigTitle.textContent = "FOR JOINING US."
    subText.textContent = `Your discount code will be sent to the provided email-address, ${email}, and in the square below. Happy shopping! `
    subForm.style.display = "none";

    discountCode.textContent = "WELCOME10"
    discountCode.style.display = "flex"
}

