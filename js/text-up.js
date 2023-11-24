const itemTours = document.querySelectorAll(".popular-item")

itemTours.forEach(function (liTour) {

    const theTour = liTour.querySelector(".the-tour");
    const descriptionTour = liTour.querySelector(".description-popular-tour");

    if (theTour && descriptionTour) {
        theTour.addEventListener("pointerover", function (event) {
            descriptionTour.classList.add('move__description');
            // theTour.style.overflow = 'visible'
        });

        theTour.addEventListener("pointerout", function (event) {
            descriptionTour.classList.remove('move__description');
            // theTour.style.overflow = 'hidden'
        });
    }
})




