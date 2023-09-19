const jacketContainer = document.querySelector(".prod-info");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = `https://api.noroff.dev/api/v1/rainy-days/07a7655a-7927-421b-ba6a-b6742d5a75b8`;
async function getJackets(url) {
    const response = await fetch(url);
    const jacket = await response.json();

    jacketContainer.innerHTML = `
    <img src="/IMG/logo.png" alt="" id="small-logo">
            <h1 class="medium-title">${jacket.title}</h1>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <p>Based on 2 reviews</p>
                </div>

                <p>${jacket.description} Crafted with meticulous attention to detail, this jacket seamlessly fuses form and function, 
                ensuring you stay dry without compromising on your fashion-forward sensibilities.</p>
                </div>`
}

getJackets(url);