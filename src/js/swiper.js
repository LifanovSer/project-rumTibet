import Swiper from "swiper";
import "swiper/css";

export function swiperModule() {
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

  const mediaQuerySecond = window.matchMedia("(max-width:1190px)");

  const swiperSecond = new Swiper(".swiper-travel-blog", {
    slidesPerView: 2,
    spaceBetween: 20,
    //   centeredSlides: true,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 20,
        // centeredSlides: true,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      750: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1191: {
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

  mediaQuerySecond.addEventListener("change", handleScreenSizeChangetwo);

  handleScreenSizeChangetwo(mediaQuerySecond);

  const mediaQueryThird = window.matchMedia("(max-width:1200px)");

  const swiperThird = new Swiper(".photo-report-swiper", {
    slidesPerView: 6,
    spaceBetween: 0,
    // centeredSlides: true,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
      },
      1201: {
        slidesPerView: 6,
      },
    },
  });

  const handleScreenSizeChangeforPhotos = (mediaQuery) => {
    if (mediaQuery.matches) {
      swiperThird.enable();
    } else {
      swiperThird.disable();
    }
  };

  mediaQueryThird.addEventListener("change", handleScreenSizeChangeforPhotos);

  handleScreenSizeChangeforPhotos(mediaQueryThird);
}
