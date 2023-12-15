if (window.NodeList && !Node.prototype.forEach) {
  NodeList.prototype.forEach = function (callBack, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callBack.call(thisArg, this[i], i, this);
    }
  };
}

const formCollection = document.forms["form-main"];

formCollection
  .querySelectorAll(".dropdown")
  .forEach(function (dropdownWrapper) {
    const dropDownBtn = dropdownWrapper.querySelector(".dropdown_button");
    const dropDownList = dropdownWrapper.querySelector(".dropdown__list");
    const dropDownListItems = dropDownList.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropdownWrapper.querySelector(
      ".dropdown__input-hidden"
    );

    dropDownBtn.addEventListener("click", function (event) {
      dropDownList.classList.toggle("dropdown__list--visible");
      dropDownBtn.classList.toggle("open__btn");
      dropDownBtn.classList.add("dropdown_button--active");
    });

    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (event) {
        event.stopPropagation();
        dropDownBtn.textContent = this.textContent; // присваиваем кнопки значение выбранного
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value; // скрытому инпуту присваиваем значение data атрибута
        dropDownList.classList.remove("dropdown__list--visible");
        console.log(dropDownInput.value);
      });
    });

    // клик снаружи дропдауна, закрыть дропдаун

    document.addEventListener("click", function (event) {
      if (event.target !== dropDownBtn) {
        dropDownBtn.classList.remove("dropdown_button--active");
        dropDownBtn.classList.remove("open__btn");
        dropDownList.classList.remove("dropdown__list--visible");
      }
    });

    // нажатие на tab или escape
    document.addEventListener("keydown", function (event) {
      if (event.key === "Tab" || event.key === "Escape") {
        dropDownBtn.classList.remove("dropdown_button--active");
        dropDownBtn.classList.remove("open__btn");
        dropDownList.classList.remove("dropdown__list--visible");
      }
    });
  });

formCollection.addEventListener("submit", function (event) {
  event.preventDefault();
});
