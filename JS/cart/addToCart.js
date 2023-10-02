const counters = document.querySelectorAll(".count")

export default function addToCart(id, price) {
  const getPrevJackets = localStorage.getItem("jackets");
  let prevJackets = JSON.parse(getPrevJackets);

  const newJacket = {
    id: id,
    quantity: 1,
    price: price,
    totalPrice: function () {
      return this.price * this.quantity;
    },
  };

  if (prevJackets === null) {
    localStorage.setItem("jackets", JSON.stringify([newJacket]));
  } else {
    let jacketExists = false;

    prevJackets.forEach((jacket) => {
      if (jacket.id === id) {
        jacket.quantity++;
        jacketExists = true;
      }
    });
    if (!jacketExists) {
      prevJackets.push(newJacket);
    }

    localStorage.setItem("jackets", JSON.stringify(prevJackets));

  }
  counters.forEach(counter => {
    if(prevJackets) { 
        const totalJackets = prevJackets.reduce((acc,cur) => acc + (cur.quantity), 0)
      counter.textContent = totalJackets;
    }
    else counter.textContent = 1;
  })
}
