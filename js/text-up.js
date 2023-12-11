const itemTours = document.querySelectorAll(".the-tour");

console.log(itemTours);

itemTours.forEach(function (liTour) {
  //   const theTour = liTour.querySelector(".the-tour");
  const descriptionTour = liTour.querySelector(".description-popular-tour");

  if (liTour && descriptionTour) {
    liTour.addEventListener("pointerover", function (event) {
      descriptionTour.classList.add("move__description");
      // theTour.style.overflow = 'visible'
    });

    liTour.addEventListener("pointerout", function (event) {
      descriptionTour.classList.remove("move__description");
      // theTour.style.overflow = 'hidden'
    });
  }
});
