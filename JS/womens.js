
async function getFemaleJackets() {
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const gender = params.get("gender");

    try {
        const loadJackets = await fetch("https://api.noroff.dev/api/v1/rainy-days");
        const jackets = await loadJackets.json();

        let display = "";

        jackets.map((jacket) => {
            if (!gender || jacket.gender.toLowerCase() === gender.toLowerCase()) {
                display += `
                <div class="product">
                    <i class="fa-regular fa-heart" id="favorite"></i>
                    <a href="/HTML/jacket.html?id=${jacket.id}">
                        <img src="${jacket.image}" alt="">
                        <div class="product-info">
                            <h3 class="small-title">${jacket.title}</h3>
                            <p class="price">£ ${jacket.price}</p>
                            <p class="gender">${jacket.gender}</p>
                            <button class="dark-green-btn">BUY NOW</button>
                        </div>
                    </a>
                </div>`;
            }
        });

        document.querySelector(".product-list").innerHTML = display;

        const favoriteIcons = document.querySelectorAll('.fa-heart');

        favoriteIcons.forEach(icon => {
            icon.addEventListener('click', function() {
                if (icon.classList.contains('fa-regular')) {
                    icon.classList.remove('fa-regular');
                    icon.classList.add('fa-solid', 'favorite-animate');
                } else {
                    icon.classList.remove('fa-solid', 'favorite-animate');
                    icon.classList.add('fa-regular');
                }
            });
        });
    } catch (error) {
        throw new Error("Error fetching the game-data: " + error);
    }
}

getFemaleJackets();