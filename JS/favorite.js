export default function favorite() {
    const favoriteIcons = document.querySelectorAll('.fa-heart');
    const getPrevFavs = localStorage.getItem("favorites");
    let prevFavs = JSON.parse(getPrevFavs) || [];
  
    function updateUI() {
      favoriteIcons.forEach(icon => {
        const curID = icon.dataset.id;
        if (prevFavs.includes(curID)) {
          icon.classList.remove('fa-regular');
          icon.classList.add('fa-solid', 'favorite-animate');
        } else {
          icon.classList.remove('fa-solid', 'favorite-animate');
          icon.classList.add('fa-regular');
        }
      });
    }
  

    updateUI();
  
    favoriteIcons.forEach(icon => {
      icon.addEventListener('click', function(e) {
        const curID = e.target.dataset.id;
  
        if (prevFavs.includes(curID)) {
          prevFavs = prevFavs.filter(id => id !== curID);
        } else {
          prevFavs.push(curID);
        }

        localStorage.setItem("favorites", JSON.stringify(prevFavs));
        updateUI();
      });
    });
  }
