const getPrevJackets = localStorage.getItem("jackets");
let prevJackets = JSON.parse(getPrevJackets);

const counter = document.querySelector(".count")

if (prevJackets) {
    
    if (prevJackets.length >= 1) {
        counter.textContent = prevJackets.length
    }
    else{ counter.textContent = 0};
}
else counter.textContent = 0;