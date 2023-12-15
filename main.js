import { swiperModule } from "./src/js/swiper";
import { textuUpModule } from "./src/js/text-up";
import { openMenuModule } from "./src/js/open-menu";
import { openVideoModule } from "./src/js/open-video";

function main() {
  window.addEventListener("DOMContentLoaded", function (event) {
    swiperModule();
    textuUpModule();
    openMenuModule();
    openVideoModule();
  });
}

main();

console.log(123);
