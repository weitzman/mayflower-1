
const mixedBody = document.querySelector("body");
const mixedMenuButton = document.querySelector(".js-header-menu-button");
const mixedMenuOverlay = document.querySelector(".menu-overlay");

let mfIsMobile = ()=>{
  return document.documentElement.clientWidth < 840;
};

// Hide hamburger menu when window size is resized to over 840 while hamburger menu is open.
window.addEventListener("resize", hideHamburgerMenu);

function hideHamburgerMenu () {
  if (!mfIsMobile()) {
    if (mixedBody.classList.contains("show-menu")) {
      mixedBody.classList.remove("show-menu");
      mixedMenuButton.setAttribute("aria-expanded", "false");
      mixedMenuButton.setAttribute("aria-label", "Open the main menu for mass.gov");
      mixedMenuOverlay.classList.remove("overlay-open");
    }
  }
}

// Make sure there is only one Google Translate element in the page.
// Move it depending if it's mobile or not.
var m = false; // Flag for moving the element once per screen size.

var translateElement = document.getElementsByClassName('ma__utility-nav__translate');
jQuery(translateElement[translateElement.length-1]).remove(); // keeping IE11 compatiblity.
translateElement = translateElement[0];

window.addEventListener("resize", toggleGoogleTranslate);
document.addEventListener("DOMContentLoaded", toggleGoogleTranslate);

// Move the "translate" element to the corresponding menu depending the screen size.
function toggleGoogleTranslate() {
  if (mfIsMobile() && m === false) {
    m = true;

    var container = document.querySelector('.ma__header__hamburger__nav-container .ma__utility-nav__item');
    if (container) {
      container.appendChild(translateElement);
    }

  } else if (!mfIsMobile() && m === true) {
    m = false;
    document.querySelector('.ma__header__hamburger__utility-nav .ma__utility-nav__item').appendChild(translateElement);
  }
}

// Set aria-label of nav based on the screen size.
function navAriaLabel() {
  if (document.querySelector('header.ma__header__mixed')) {
    if (window.innerWidth > 840) {
      document.querySelector('nav.ma__header__hamburger__nav').setAttribute('aria-label', 'utility options');
    }
    else {
      document.querySelector('nav.ma__header__hamburger__nav').setAttribute('aria-label', 'main navigation');
    }
  }
}

window.addEventListener("resize", navAriaLabel);
document.addEventListener("DOMContentLoaded", navAriaLabel);
