(function() {



    addImageCarousel();



    // Image Carousel
    function addImageCarousel(){

        const carouselFrame = document.getElementById("carouselFrame");
        const carouselCaption = document.getElementById("carouselCaption");

        const carouselSlides =
            Array.from(carouselFrame.querySelectorAll("div[data-src]"))
                .map(div => {
                    return {
                        imageUrl: div.getAttribute("data-src"),
                        caption: div.textContent.trim(),
                    };
                });
        
        let carouselIndex = 0;
        displayCarouselImage();

        function displayCarouselImage(){
            let {imageUrl,caption} = carouselSlides[carouselIndex];
            carouselFrame.style.backgroundImage = `url('${imageUrl}')`;
            let count = `(${carouselIndex+1}/${carouselSlides.length})`;
            carouselCaption.innerHTML = caption;
            setTimeout(() => {
            }, 0);
        }

        function displayNextCarouselImage(){
            carouselIndex++;
            if(carouselIndex === carouselSlides.length){
                carouselIndex = 0;
            }
            displayCarouselImage();
        }

        setInterval(function() {
            displayNextCarouselImage();
        }, 3000);
    }

})();