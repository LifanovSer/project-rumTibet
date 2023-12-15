export function textuUpModule() {
  const itemTours = document.querySelectorAll(".popular-tours__the-tour");

  itemTours.forEach(function (liTour) {
    const descriptionTour = liTour.querySelector(".popular-tours__description");

    if (liTour && descriptionTour) {
      liTour.addEventListener("pointerover", function (event) {
        descriptionTour.classList.add("popular-tours__move_description");
      });

      liTour.addEventListener("pointerout", function (event) {
        descriptionTour.classList.remove("popular-tours__move_description");
      });
    }
  });
}
