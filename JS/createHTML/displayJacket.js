import removeNames from "../removeNames.js";

export default function displayJacket(jacket, box) {
    const jacketName = removeNames(jacket); 

    const container = document.createElement("section");
    container.classList.add("product-container");

    const jacketImages = document.createElement("div");
    jacketImages.classList.add("product-images");

    const jacketImg = document.createElement("figure");
    jacketImg.classList.add("prod-images"); 

    const productImage = document.createElement("img");
    productImage.src = jacket.image;
    productImage.classList.add("prodImg");
    productImage.alt = jacket.description;

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info"); 

    const prodInfo = document.createElement("div");
    prodInfo.classList.add("prod-info");

    const logo = document.createElement("img");
    logo.setAttribute("id", "small-logo");
    logo.src = `/IMG/logo.png`;
    logo.alt = "Rainydays logo displaying mountains above the name";

    const title = document.createElement("h1");
    title.classList.add("medium-title");
    title.textContent = jacketName;

    const rating = document.createElement("div");
    rating.classList.add("rating");

    const starIcon1 = document.createElement("i");
    starIcon1.classList.add("fa-solid");
    starIcon1.classList.add("fa-star");

    const starIcon2 = document.createElement("i");
    starIcon2.classList.add("fa-solid");
    starIcon2.classList.add("fa-star");

    const starIcon3 = document.createElement("i");
    starIcon3.classList.add("fa-solid");
    starIcon3.classList.add("fa-star");

    const starIcon4 = document.createElement("i");
    starIcon4.classList.add("fa-solid");
    starIcon4.classList.add("fa-star");

    const starIcon5 = document.createElement("i");
    starIcon5.classList.add("fa-solid");
    starIcon5.classList.add("fa-star");

    const ratingText = document.createElement("p");
    ratingText.textContent = "Based on 2 reviews.";

    const jacketDescription = document.createElement("p");
    jacketDescription.textContent = jacket.description + " Crafted with meticulous attention to detail, this jacket seamlessly fuses form and function, ensuring you stay dry without compromising on your fashion-forward sensibilities.";

    const colors = document.createElement("div");
    colors.classList.add("colors");

    const selectColor = document.createElement("p");
    selectColor.textContent = "Select a color:";

    const circles = document.createElement("div");
    circles.classList.add("circles");

    const circle1 = document.createElement("span");
    circle1.classList.add("circle");
    circle1.setAttribute("id", "color-1");

    const circle2 = document.createElement("span");
    circle2.classList.add("circle");
    circle2.setAttribute("id", "color-2");

    const circle3 = document.createElement("span");
    circle3.classList.add("circle");
    circle3.setAttribute("id", "color-3");

    const chooseSize = document.createElement("p");
    chooseSize.textContent = "Choose a size: "; 

    const sizes = document.createElement("div");
    sizes.classList.add("sizes");
    
    const sizeBtn1 = document.createElement("button");
    sizeBtn1.classList.add("sizeBtn");
    console.log(jacket)
    sizeBtn1.textContent = jacket.sizes[0];

    const sizeBtn2 = document.createElement("button");
    sizeBtn2.classList.add("sizeBtn");
    sizeBtn2.textContent = jacket.sizes[1];

    const sizeBtn3 = document.createElement("button");
    sizeBtn3.classList.add("sizeBtn");
    sizeBtn3.textContent = jacket.sizes[2];

    const sizeBtn4 = document.createElement("button");
    sizeBtn4.classList.add("sizeBtn");
    sizeBtn4.textContent = jacket.sizes[3];

    const sizeBtn5 = document.createElement("button");
    sizeBtn5.classList.add("sizeBtn");
    sizeBtn5.textContent = jacket.sizes[4];

    const sizeBtn6 = document.createElement("button");
    sizeBtn6.classList.add("sizeBtn");
    sizeBtn6.textContent = jacket.sizes[5];

    const buyNow = document.createElement("button");
    buyNow.classList.add("dark-green-btn");
    buyNow.classList.add("buy-now");
    buyNow.textContent = "BUY NOW";

    box.append(container);
    container.append(jacketImages, productInfo);
    jacketImages.append(jacketImg);
    jacketImg.append(productImage);
    productInfo.append(prodInfo, jacketDescription, colors, chooseSize, sizes);
    prodInfo.append(logo, title, rating);
    rating.append(starIcon1, starIcon2, starIcon3, starIcon4, starIcon5, ratingText);
    colors.append(selectColor, circles);
    circles.append(circle1, circle2, circle3);
    sizes.append(sizeBtn1, sizeBtn2, sizeBtn3, sizeBtn4, sizeBtn5, sizeBtn6);
}
