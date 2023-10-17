import removeNames from "../removeNames.js";
import addToCart from "../cart/addToCart.js";

export default function popularProducts(jacket, productList) {
  const jacketName = removeNames(jacket);
  const container = document.createElement("div");
  container.classList.add("product");

  const icon = document.createElement("i");
  icon.classList.add("fa-regular");
  icon.classList.add("fa-heart");
  icon.setAttribute("id", "favorite");
  icon.dataset.id = jacket.id;

  const aElement = document.createElement("a");
  aElement.href = `/HTML/jacket.html?id=${jacket.id}`;

  const jacketImage = document.createElement("img");
  jacketImage.src = jacket.images[0].src;
  jacketImage.alt = "Image of the listed jacket";

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const h3 = document.createElement("h3");
  h3.classList.add("small-title");
  h3.textContent = jacketName;

  const prices = document.createElement("div");

  const salePrice = Number(jacket.prices.sale_price) / 100;
  const origPrice = Number(jacket.prices.regular_price) / 100;

  prices.classList.add("price");

  const price = document.createElement("p");
  price.classList.add("discountedPrice");
  price.textContent = "£ " + salePrice;
  prices.append(price);

  const gender = document.createElement("p");
  gender.classList.add("gender");
  gender.textContent = jacket.gender;

  const btn = document.createElement("button");
  btn.classList.add("dark-green-btn");
  btn.classList.add("buy-now");
  btn.textContent = "BUY NOW";

  // ADD TO CART FUNCTION
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const curItem = e.target.parentElement.parentElement;
    const url = new URL(curItem);
    const currentID = url.searchParams.get("id");
    const price = Number(jacket.prices.sale_price) / 100;
    addToCart(currentID, price);
    console.log(price);
  });

  container.append(icon, aElement);
  aElement.append(jacketImage, productInfo);
  productInfo.append(h3, prices, gender, btn);

  productList.appendChild(container);

  if (jacket.on_sale) {
    const onSale = document.createElement("div");
    onSale.classList.add("onSale");
    const span = document.createElement("span");
    span.classList.add("circle");
    span.textContent = "SALE";
    onSale.appendChild(span);
    container.prepend(onSale);

    const originalPrice = document.createElement("p");
    originalPrice.classList.add("originalPrice");
    originalPrice.textContent = "£ " + origPrice;

    prices.prepend(originalPrice);
  }
}
