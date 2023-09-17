const count = document.querySelector("count");

export default function addToCart(id) {
    const getProducts = localStorage.getItem("products");
    let parsedProducts = JSON.parse(getProducts);
    
    if (parsedProducts === null) parsedProducts =""
     const addedProducts = [...parsedProducts, id]

    localStorage.setItem("products", JSON.stringify(addedProducts));

    count.textContent = addedProducts.length;
}
