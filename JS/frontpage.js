async function getJackets() {
    const fetchJackets = await fetch("https://api.noroff.dev/api/v1/rainy-days");
    const jackets = await fetchJackets.json();
    let display = "";

    for (let index = 0; index <= 2; index++) {
        display +=
        `<div class="product">
            <i class="fa-regular fa-heart" id="favorite"></i>
            <a href="/HTML/shop.html?id=${jackets[index].id}">
            <img src="${jackets[index].image}" alt="">
            <div class="product-info">
                <h3 class="small-title">${jackets[index].title}</h3>
                <p class="price">${jackets[index].price}</p>
                <p class="gender">${jackets[index].gender}</p>
            </div>
            </a>
        </div>`
    }
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
}

getJackets();


