export default function addToCart (id) {
    const getPrevJackets = localStorage.getItem("jackets");
    let prevJackets = JSON.parse(getPrevJackets);

    const newJacket = {
        id: id, 
        quantity: 1
    }
    if (prevJackets === null) {
        localStorage.setItem("jackets", JSON.stringify(newJacket));
    }

    else {
    prevJackets.forEach(jacket => {
        if (jacket.id === id) {
            jacket.quantity ++;
        }
        else {
            localStorage.setItem("jackets", JSON.stringify([...prevJackets, newJacket]));
        }
    })
}
}