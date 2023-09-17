import removeNames from "../removeNames.js";

export default function cartItem(jacket) {
    const jacketName = removeNames(jacket)

    const productGrid = document.createElement("div");
    productGrid.classList.add("product-grid");

    const productImg = document.createElement("img");
    productImg.src = jacket.image;
    productImg.alt = jacket.description;

    const productName = document.createElement("div");
    productName.classList.add("product-name");

    const jacketGender = document.createElement("p");
    jacketGender.textContent = jacket.gender;

    const jacketTitle = document.createElement("p");
    jacketTitle.textContent = jacketName;

    productName.append(jacketGender, jacketTitle);

    const productSize = document.createElement("div");
    productSize.classList.add("product-size");

    const size = document.createElement("p");
    size.textContent = "Medium";

    productSize.append(size);

    const quantity = document.createElement("div");
    quantity.classList.add("product-quantity");

    const amount = document.createElement("p");
    amount.textContent = "1";

    quantity.append(amount);

    const productPrice = document.createElement("div");
    productPrice.classList.add("product-price");

    const exactPrice = document.createElement("p");
    exactPrice.textContent = jacket.price;

    productPrice.append(exactPrice);

    productGrid.append(productImg, productName, productSize, quantity, productPrice)
}