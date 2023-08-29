var menCheckbox = document.getElementById("men");

menCheckbox.addEventListener("click", function() {

    if (menCheckbox.checked) {
        document.body.style.opacity = "0";
        setTimeout(function() {
            window.location.href = "/HTML/mens.html"; 
        }, 100); 
    }
});

var womenCheckbox = document.getElementById("women");

womenCheckbox.addEventListener("click", function() {

    if (womenCheckbox.checked) {
        document.body.style.opacity = "0";
        setTimeout(function() {
            window.location.href = "/HTML/womens.html"; 
        }, 100); 
    }
});