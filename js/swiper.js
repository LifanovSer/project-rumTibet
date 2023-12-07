// Проверяем разрешение экрана с помощью медиа-запроса
const mediaQuery = window.matchMedia("(max-width:868px)");
// debugger;
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    550: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // 1024: {
    //   slidesPerView: 5,
    //   spaceBetween: 50,
    // },
  },
});
// Функция, которая будет выполнена, если медиа-запрос соответствует
const handleScreenSizeChange = (mediaQuery) => {
  if (mediaQuery.matches) {
    swiper.enable();
  } else {
    swiper.disable();
  }
};

// Добавляем обработчик изменения разрешения экрана
mediaQuery.addEventListener("change", handleScreenSizeChange);

// Вызываем функцию в начале для проверки текущего разрешения
handleScreenSizeChange(mediaQuery);
