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