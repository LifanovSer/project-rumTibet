// Проверяем разрешение экрана с помощью медиа-запроса
const mediaQuerySecond = window.matchMedia("(max-width:1190px)");
// debugger;
const swiperSecond = new Swiper(".mySwiperimpressions", {
  slidesPerView: 2,
  spaceBetween: 20,
  //   centeredSlides: true,
  //   autoplay: {
  //     delay: 2000,
  //   },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: true,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    750: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    751: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
// Функция, которая будет выполнена, если медиа-запрос соответствует
const handleScreenSizeChangetwo = (mediaQuery) => {
  if (mediaQuery.matches) {
    swiperSecond.enable();
  } else {
    swiperSecond.disable();
  }
};

// Добавляем обработчик изменения разрешения экрана
mediaQuerySecond.addEventListener("change", handleScreenSizeChangetwo);

// Вызываем функцию в начале для проверки текущего разрешения
handleScreenSizeChangetwo(mediaQuerySecond);
