export default function slideshow () {
    const seasonImages = document.querySelectorAll(".shop-image");

    function showSlide(index) {
     
    seasonImages.forEach((image, i) => { 
  
        if (i === index) {
          
            image.style.opacity = "1";
            
        } else {
            image.style.opacity = "0";

        } 
    })
}

let index = 0;
showSlide(index)
setInterval(() => {
  
    if (index === 3) index = 0;
    
    else index++;

    showSlide(index)
}, 3000 )
 
}