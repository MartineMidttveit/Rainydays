export default function popularProducts(number, productList, allJackets) {
    const container = document.createElement("div")
    container.classList.add("product")
    const icon = document.createElement("i");
    icon.classList.add("fa-regular");
    icon.classList.add("fa-heart");
    icon.setAttribute("id", "favorite");
    const aElement = document.createElement("a");
    aElement.href=`/HTML/jacket.html?id=allJackets[number].id`
    const jacketImage = document.createElement("img");
    jacketImage.src= allJackets[number].image;
    jacketImage.alt="Image of the listed jacket";
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    const h3 = document.createElement("h3");
    h3.classList.add("small-title");
    h3.textContent = allJackets[number].title;
    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = allJackets[number].price;
    const gender = document.createElement("p");
    gender.classList.add("gender");
    gender.textContent = allJackets[number].gender;
    const btn = document.createElement("button");
    btn.classList.add("dark-green-btn");
    btn.textContent = "BUY NOW";

    container.append(icon,aElement);
    aElement.append(jacketImage, productInfo)
    productInfo.append(h3, price, gender, btn);

    productList.appendChild(container);
}

