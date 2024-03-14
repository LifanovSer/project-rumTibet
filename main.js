import { swiperModule } from "./src/js/swiper";
import { textuUpModule } from "./src/js/text-up";
import { openMenuModule } from "./src/js/open-menu";
import { openVideoModule } from "./src/js/open-video";
import { customSelect } from "./src/js/select";
import { sendNewsletter } from "./src/js/send-newsletter";

function main() {
  window.addEventListener("DOMContentLoaded", function () {
    customSelect();
    swiperModule();
    textuUpModule();
    openMenuModule();
    openVideoModule();
    sendNewsletter();
  });
}

main();
