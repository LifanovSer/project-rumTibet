document.addEventListener("DOMContentLoaded", function () {
    const openPopupButton = document.querySelector("#openPopup");
    const closePopupButton = document.querySelector("#closePopup");
    const videoPopup = document.querySelector("#videoPopup");
    const videoFrame = document.querySelector("#iframe-video")

    openPopupButton.addEventListener("click", function () {
        
        document.body.classList.add("modal-open");
        videoPopup.classList.add("open");
       
    });

    closePopupButton.addEventListener("click", function () {
        // videoPopup.style.display = "none";
        document.body.classList.remove("modal-open");
        videoPopup.classList.remove("open");
        const videoSrc = iframe.src;
        iframe.src = videoSrc;

      
    });

    // Закрытие по клику за пределами окна
    window.addEventListener("click", function (event) {
        if (event.target === videoPopup) {
            // videoPopup.style.display = "none";
            videoPopup.classList.remove("open");
            document.body.classList.remove("modal-open");
            const iframe = videoFrame
            const videoSrc = iframe.src;
            iframe.src = videoSrc;
        }
    });
});