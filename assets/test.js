
    function scrollCarousel(carouselElement, slideIndex) {
      carouselElement.scrollLeft = slideIndex * carouselElement.offsetWidth;
    }

    let carouselElement = document.getElementById("banner");
    let slideCount = carouselElement.querySelectorAll(".banner-img").length;

    // Create buttons to go to the next and previous slides
    let nextButton = document.createElement("");
    nextButton.textContent = "Next slide";
    nextButton.onclick = function() {
      scrollCarousel(carouselElement, 1);
    };

    let previousButton = document.createElement("button");
    previousButton.textContent = "Previous slide";
    previousButton.onclick = function() {
      scrollCarousel(carouselElement, -1);
    };

    // Add the buttons to the banner
    carouselElement.appendChild(nextButton);
    carouselElement.appendChild(previousButton);
