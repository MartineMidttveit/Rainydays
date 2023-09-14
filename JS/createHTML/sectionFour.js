import removeNames from "../removeNames.js";

export default function sectionFour (jacket, newProduct) {
    const span = document.createElement("span");
    span.textContent = "NEW IN";
    const slider = document.createElement("div");
    slider.classList.add("slider");

    const imageOne = document.createElement("img");
    imageOne.src = jacket.image;
    imageOne.classList.add("slider-img")
    imageOne.alt = jacket.description; 
    
    newProduct.append(span, imageOne)
    // const imageTwo = document.createElement("img");
    // imageTwo.src = `../<img src="/IMG/trailblaze.png"`;
    // imageTwo.alt = jacket.description; 
    // imageTwo.classList.add("slider-img")

    // const imageThree = document.createElement("img");
    // imageThree.src = `../<img src="/IMG/trailblaze1.png"`;
    // imageThree.alt = jacket.description; 
    // imageThree.classList.add("slider-img")

    // slider([imageOne, imageTwo, imageThree]);

    const container = document.createElement("div");
    container.classList.add("container");

    const bigTitle = document.createElement("h2")
    const jacketName = removeNames(jacket)
    bigTitle.textContent = jacketName;
    bigTitle.classList.add("big-title")

    const price = document.createElement("h3");
    price.classList.add("medium-title");
    price.textContent = "£ " + jacket.discountedPrice;

    const description = document.createElement("p");
    description.textContent = " Introducing our rugged Thunderbolt Jacket, the ultimate companion for all your outdoor adventures. Crafted with cutting-edge waterproof technology, this jacket ensures complete protection against rain and damp conditions, keeping you dry and comfortable."
    description.prepend(jacket.description);

    const list = document.createElement("ul");

   const item1 = document.createElement("li");
   item1.textContent = "Adjustable hoodie";
   const item2 = document.createElement("li");
   item2.textContent = "Waterproof zipper";
   const item3 = document.createElement("li");
   item3.textContent = "Wind-resistant";
   const item4 = document.createElement("li")
   item4.textContent = "Two vertical pockets";
   const item5 = document.createElement("li")
   item5.textContent = "Ventilating zipper";

    list.append(item1,item2,item3,item4,item5)
    
    const shopBtn = document.createElement("a");
    shopBtn.classList.add("dark-green-btn")
    shopBtn.textContent = "BUY NOW";
    shopBtn.href = `/HTML/jacket.html?id=${jacket.id}`

    container.append(bigTitle, price, description, list, shopBtn);

    newProduct.append(container);
}



{/* 
    <div class="container">
        <h1 class="big-title">Thunderbolt Jacket.</h1>
        <p>
            Introducing our rugged Thunderbolt Jacket, the ultimate companion for all 
            your outdoor adventures. Crafted with cutting-edge waterproof technology, this jacket 
            ensures complete protection against rain and damp conditions, keeping you dry and 
            comfortable. Its durable design, breathable fabric, and versatile style make it a 
            must-have for anyone seeking reliable performance and style in the great outdoors.
        </p>
        <ul>
            <li>Adjustable hoodie</li>
            <li>Waterproof zipper</li>
            <li>Wind-resistant</li>
            <li>Two vertical pockets</li>
            <li>Ventilating zipper</li>
        </ul>
        <a href="/HTML/jacket.html" class="dark-green-btn">SHOP NOW</a>
    </div> */}