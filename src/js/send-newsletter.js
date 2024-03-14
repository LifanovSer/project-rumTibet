export function sendNewsletter() {
  const formEmail = document.querySelector("#email-form");

  formEmail.addEventListener("submit", function (event) {
    event.preventDefault();
  });
}
