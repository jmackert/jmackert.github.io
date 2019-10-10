(function() {

    addImageCarousel();
    addProjectCollapsible();
    addNavCollapsible();


    // Image Carousel Start

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

    //Image Carousel End
 
    //Collapsible Project Info Start

    function addProjectCollapsible(){
        const collapsible = document.getElementsByClassName("collapsible");
        var i;

        for(i=0; i < collapsible.length; i++){
            collapsible[i].addEventListener("click", function(){
                this.classList.toggle("active");
                const content = this.nextElementSibling;
                if(content.style.maxHeight){
                    content.style.maxHeight = null;
                }
                else{
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        }
    }

    //Collapsible Project Info End

    //Collapsible Nav Menu Start

    function addNavCollapsible(){
        const navCollapsibleButton = document.getElementsByClassName("navCollapsibleButton");
        var i;

        for(i=0; i < navCollapsibleButton.length; i++){
            navCollapsibleButton[i].addEventListener("click", function(){
                this.classList.toggle("active");
                const navContent = this.nextElementSibling;
                if(navContent.style.maxHeight){
                    navContent.style.maxHeight = null;
                }
                else{
                    navContent.style.maxHeight = navContent.scrollHeight + "px";
                }
            });
        }
    }



    //Collapsible Nav Menu End

})();