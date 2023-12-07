// Проверяем разрешение экрана с помощью медиа-запроса
const mediaQueryThird = window.matchMedia("(max-width:1200px)");
// debugger;
const swiperThird = new Swiper(".mySwiperphotoReport", {
  slidesPerView: 6,
  spaceBetween: 0,
  // centeredSlides: true,
  // autoplay: {
  //   delay: 2000,
  // },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1201: {
      slidesPerView: 6,
    },
  },
});
// Функция, которая будет выполнена, если медиа-запрос соответствует
const handleScreenSizeChangeforPhotos = (mediaQuery) => {
  if (mediaQuery.matches) {
    swiperThird.enable();
  } else {
    swiperThird.disable();
  }
};

// Добавляем обработчик изменения разрешения экрана
mediaQueryThird.addEventListener("change", handleScreenSizeChangeforPhotos);

// Вызываем функцию в начале для проверки текущего разрешения
handleScreenSizeChangeforPhotos(mediaQueryThird);
