import removeNames from "../removeNames.js";

export default function sectionFour(jacket, newProduct) {
  console.log(jacket);

  const span = document.createElement("span");
  span.classList.add("newIn");
  span.textContent = "NEW IN";
  const slider = document.createElement("div");
  slider.classList.add("slider");

  const imageOne = document.createElement("img");
  imageOne.src = jacket.images[0].src;
  imageOne.classList.add("slider-img");
  imageOne.alt = jacket.attributes[2].terms[0].name;

  const imageTwo = document.createElement("img");
  imageTwo.src = "../IMG/trailblaze.png";
  imageTwo.alt = jacket.attributes[2].terms[0].name;
  imageTwo.classList.add("slider-img");

  const imageThree = document.createElement("img");
  imageThree.src = "../IMG/trailblaze1.png";
  imageThree.alt = jacket.attributes[2].terms[0].name;
  imageThree.classList.add("slider-img");

  const slides = [imageOne, imageTwo, imageThree];
  slider.append(imageOne, imageTwo, imageThree);
  newProduct.append(span, slider);
  let i = 1;

  slides[0].style.display = "block";
  slides[0].style.opacity = 1;
  setInterval(() => {
    for (let j = 0; j < slides.length; j++) {
      slides[j].style.opacity = 0;
    }

    slides[i].style.opacity = 1;
    slides[i].style.display = "block";
    if (i === 2) {
      i = 0;
    } else i++;
  }, 5000);

  const container = document.createElement("div");
  container.classList.add("container");

  const bigTitle = document.createElement("h2");
  const jacketName = removeNames(jacket);
  bigTitle.textContent = jacketName;
  bigTitle.classList.add("big-title");

  const price = document.createElement("h3");
  price.classList.add("medium-title");

  const salePrice = Number(jacket.prices.sale_price) / 100;
  console.log(salePrice);

  price.textContent = "£ " + salePrice;

  const description = document.createElement("p");

  description.textContent = jacket.attributes[2].terms[0].name;

  const list = document.createElement("ul");

  const item1 = document.createElement("li");
  item1.textContent = "Adjustable hoodie";
  const item2 = document.createElement("li");
  item2.textContent = "Waterproof zipper";
  const item3 = document.createElement("li");
  item3.textContent = "Wind-resistant";
  const item4 = document.createElement("li");
  item4.textContent = "Two vertical pockets";
  const item5 = document.createElement("li");
  item5.textContent = "Ventilating zipper";

  list.append(item1, item2, item3, item4, item5);

  const shopBtn = document.createElement("a");
  shopBtn.classList.add("green-btn");
  shopBtn.textContent = "BUY NOW";
  shopBtn.href = `/HTML/jacket.html?id=${jacket.id}`;

  container.append(bigTitle, price, description, list, shopBtn);

  newProduct.append(container);
}
