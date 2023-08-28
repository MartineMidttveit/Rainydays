var menCheckbox = document.getElementById("men");

menCheckbox.addEventListener("click", function() {

    if (menCheckbox.checked) {
        document.body.style.opacity = "0";
        setTimeout(function() {
            window.location.href = "/HTML/mens.html"; 
        }, 100); 
    }
});

var menCheckbox = document.getElementById("women");

menCheckbox.addEventListener("click", function() {

    if (menCheckbox.checked) {
        document.body.style.opacity = "0";
        setTimeout(function() {
            window.location.href = "/HTML/womens.html"; 
        }, 100); 
    }
});