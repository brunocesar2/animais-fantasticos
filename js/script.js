import SmoothScroll from "./modules/smooth-scroll.js";
import initTabNav from "./modules/tab-nav.js";
import initAccordionNav from "./modules/accordion-nav.js";
import initScrollAnimation from "./modules/scroll-animation.js";
import initModal from "./modules/modal.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initTimeOperation from "./modules/time-operation.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import initNumberAnimation from "./modules/number-animation.js";

const smoothScroll = new SmoothScroll("[data-smooth-scroll] a[href^='#']");
smoothScroll.init();

initTabNav();
initAccordionNav();
initScrollAnimation();
initModal();
initDropdownMenu();
initTimeOperation();
initMenuMobile();
initFetchBitcoin();
initNumberAnimation();
