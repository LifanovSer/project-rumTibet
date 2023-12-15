export function openMenuModule() {
  const iconMenu = document.querySelector(".menu___icon");

  if (iconMenu) {
    const nav = document.querySelector(".header__nav");

    iconMenu.addEventListener("click", function (event) {
      document.body.classList.toggle("lock"); // блокируем скролл
      iconMenu.classList.toggle("active");
      nav.classList.toggle("active");
    });
  }
}
