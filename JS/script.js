const getPrevJackets = localStorage.getItem("jackets");
let prevJackets = JSON.parse(getPrevJackets);

const counters = document.querySelectorAll(".count")

if (prevJackets) {
    counters.forEach(counter => {
        if (prevJackets.length > 1) {
          const totalJackets = prevJackets.reduce((acc,cur) => acc + (cur.quantity), 0)
          console.log(totalJackets)
        counter.textContent = totalJackets;
        }
      
        else{counter.textContent = 1};
      });
}