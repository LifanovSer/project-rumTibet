export function openVideoModule() {
  const openPopupButton = document.querySelector("#openPopup");
  const closePopupButton = document.querySelector("#closePopup");
  const videoPopup = document.querySelector("#videoPopup");
  const iframe = document.querySelector("iframe");

  openPopupButton.addEventListener("click", function () {
    document.body.classList.add("modal-open");
    videoPopup.classList.add("open");
  });

  closePopupButton.addEventListener("click", function () {
    document.body.classList.remove("modal-open");
    videoPopup.classList.remove("open");
    const videoSrc = iframe.src;
    iframe.src = ""; // Сначала очистить src
    iframe.src = videoSrc; // Затем восстановить исходный src, чтобы перезагрузить iframe
  });

  // Закрытие по клику за пределами окна
  window.addEventListener("click", function (event) {
    if (event.target === videoPopup) {
      videoPopup.classList.remove("open");
      document.body.classList.remove("modal-open");
      // Здесь тоже следует применить тот же подход с перезагрузкой src
      const videoSrc = iframe.src;
      iframe.src = ""; // Очистить src
      iframe.src = videoSrc; // Восстановить src
    }
  });
}
