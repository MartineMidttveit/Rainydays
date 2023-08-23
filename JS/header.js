var banner = document.querySelector(".banner-text"); 
    var texts = [
        "Free shipping on all orders above £120!",
        "Worldwide express shipping!"
    ];
    var currentIndex = 0;

    function rotateBannerText() {
        banner.innerHTML = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }

    setInterval(rotateBannerText, 2500);


// HAMBURGER MENU

function openMenu () {
    document.querySelector('#hamburger-icon').addEventListener('click', () => {
        const hamburgerMenu = document.querySelector('.nav-header')
        hamburgerMenu.style.display = 'block'
        document.querySelector('#hamburger-icon').style.display = 'none'
        document.querySelector('#x-icon').style.display = 'block'
    })
}

function closeMenu () {
    document.querySelector('#x-icon').addEventListener('click', () => {
        const hamburgerMenu = document.querySelector('.nav-header')
        hamburgerMenu.style.display = 'none'
        document.querySelector('#x-icon').style.display = 'none'
        document.querySelector('#hamburger-icon').style.display = 'block'
    })
}

openMenu();
closeMenu();