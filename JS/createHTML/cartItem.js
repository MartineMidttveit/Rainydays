import removeNames from "../removeNames.js";
import changeQuantity from "../cart/changeQuantity.js";
import updateCart from "../cart/updateCart.js";



export default function cartItem(jacket, container, numJackets) {
  const jacketName = removeNames(jacket);

  const productGrid = document.createElement("div");
  productGrid.id = jacket.id;
  productGrid.price = jacket.price;
  productGrid.classList.add("product-grid");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  const productImg = document.createElement("img");
  productImg.classList.add("product-images");
  productImg.src = jacket.image;
  productImg.alt = jacket.description;

  imgContainer.append(productImg);

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

  const quantityContainer = document.createElement("div");
  quantityContainer.classList.add("quantity-container");

  quantity.append(quantityContainer);

  const minus = document.createElement("button");
  minus.classList.add("quantityBtn");

  const minusIcon = document.createElement("i");
  minusIcon.classList.add("fa-solid");
  minusIcon.classList.add("fa-minus");

  minus.append(minusIcon);
  minus.addEventListener("click", (e) => {
    numJackets--;
    amount.textContent = numJackets;

    exactPrice.textContent = "£ " + (jacket.price * numJackets).toFixed(2);
    if (numJackets <= 0) productGrid.remove();
    changeQuantity(productGrid, numJackets);
    updateCart();
  });

  const amount = document.createElement("p");
  amount.textContent = numJackets;

  const plus = document.createElement("button");
  plus.classList.add("quantityBtn");

  const plusIcon = document.createElement("i");
  plusIcon.classList.add("fa-solid");
  plusIcon.classList.add("fa-plus");

  plus.addEventListener("click", (e) => {
    numJackets++;
    console.log(productGrid.price);
    amount.textContent = numJackets;
    exactPrice.textContent = "£ " + (jacket.price * numJackets).toFixed(2);
    changeQuantity(productGrid, numJackets);
    updateCart();
  });
  plus.append(plusIcon);

  quantityContainer.append(minus, amount, plus);

  const productPrice = document.createElement("div");
  productPrice.classList.add("product-price");

  const exactPrice = document.createElement("p");
  exactPrice.textContent = "£ " + (jacket.price * numJackets).toFixed(2);

  productPrice.append(exactPrice);

  productGrid.append(
    imgContainer,
    productName,
    productSize,
    quantity,
    productPrice
  );
  container.append(productGrid);
}
