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

  productImg.src = jacket.images[0].src;
  // productImg.alt = jacket.description;

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
  const amount = document.createElement("p");
  amount.textContent = numJackets;
  amount.classList.add("qty-amount");

  const plus = document.createElement("button");
  plus.classList.add("quantityBtn");

  const plusIcon = document.createElement("i");
  plusIcon.classList.add("fa-solid");
  plusIcon.classList.add("fa-plus");

  plus.append(plusIcon);

  quantityContainer.append(minus, amount, plus);

  const productPrice = document.createElement("div");
  productPrice.classList.add("product-price");

  const exactPrice = document.createElement("p");

  const price = Number(jacket.prices.sale_price) / 100;

  exactPrice.textContent = "£ " + (price * numJackets).toFixed(2);
  exactPrice.classList.add("item-total-price");

  productPrice.append(exactPrice);

  const mobileVersion = document.createElement("div");
  mobileVersion.classList.add("mobileVersion");

  const textGridMobile = document.createElement("div");
  textGridMobile.classList.add("textGridMobile");
  textGridMobile.append(productName, productSize, quantity, productPrice);

  mobileVersion.append(imgContainer, textGridMobile);

  const quantClone = quantity.cloneNode(true);

  productGrid.append(
    imgContainer.cloneNode(true),
    productName.cloneNode(true),
    productSize.cloneNode(true),
    quantClone,
    productPrice.cloneNode(true)
  );

  container.append(mobileVersion, productGrid);

  // EVENT LISTENERS + / - quantity

  const clonedBtns = quantClone.querySelectorAll("button");

  const minusBtns = [clonedBtns[0], minus];
  const plusBtns = [clonedBtns[1], plus];
  minusBtns.forEach((minus) => {
    minus.addEventListener("click", (e) => {
      numJackets--;

      const curItem =
        e.target.parentElement.parentElement.parentElement.parentElement;

      const curAmount = curItem.querySelector(".qty-amount");
      const curTotalPrice = curItem.querySelector(".item-total-price");

      curAmount.textContent = numJackets;
      const price = Number(jacket.prices.sale_price) / 100;
      curTotalPrice.textContent = "£ " + (price * numJackets).toFixed(2);
      if (numJackets <= 0) {
        mobileVersion.remove();
        productGrid.remove();
      }

      changeQuantity(productGrid, numJackets);
      updateCart();
    });
  });

  plusBtns.forEach((plus) => {
    console.log(plus.parentElement);
    plus.addEventListener("click", (e) => {
      numJackets++;

      const curItem =
        e.target.parentElement.parentElement.parentElement.parentElement;

      const curAmount = curItem.querySelector(".qty-amount");
      const curTotalPrice = curItem.querySelector(".item-total-price");

      curAmount.textContent = numJackets;

      const price = Number(jacket.prices.sale_price) / 100;

      curTotalPrice.textContent = "£ " + (price * numJackets).toFixed(2);
      if (numJackets <= 0) {
        mobileVersion.remove();
        productGrid.remove();
      }

      changeQuantity(productGrid, numJackets);
      updateCart();
    });
  });
}
