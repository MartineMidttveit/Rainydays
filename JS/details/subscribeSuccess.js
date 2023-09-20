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

// Your discount code will be sent to the provided email-address, huhuhu@hotmai.com, and in the square below. Happy shopping! 


// h2 = .medium-title 
// h1 = .big-title 
// p = .newsletter-text
// form = .subscription
// grønn boks = id="discountCode"


{/* <h2 class="medium-title">GET 10% DISCOUNT</h2>
        <h1 class="big-title">JOIN OUR ADVENTURES.</h1>
        <p>
            Sign up for our newsletter today and be the first to hear about our latest jacket 
            designs and exclusive offers. As a special welcome gift, you'll receive a 10% discount 
            on your next order. Sign up now and embrace the rainy days!
        </p>

        <form class="subscription">
            <input type="text" placeholder="example-email@email.com" id="emailAddress">
            <button class="dark-green-btn" id="subscribe">SUBSCRIBE</button>
        </form> */}

// dette skal inni .newsletter, i stedet for det er som er der nå. 