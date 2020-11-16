//
// Side wide JS
//

//
// Swiper, used to power the media gallery
// https://swiperjs.com/
// Reduced motion additions from https://dev.to/vanaf1979/respecting-prefers-reduced-motion-with-javascript-and-react-42if
//

const swiperSettings = {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
};

// Grab a reference to the media query.
const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

// if the user asked for no anmiations:
if (!mediaQuery || mediaQuery.matches) {
    swiperSettings.effect = "fade";
    swiperSettings.speed = 0;
    swiperSettings.autoplay = false;
} else {
    swiperSettings.effect = "fade";
    swiperSettings.speed = 300;
    swiperSettings.autoplay = { delay: 2500 };
}

// Initialize the slider with the correct settings
let swiper = new Swiper(".swiper-container", swiperSettings);

// Listen for changes in the media query.
mediaQuery.addEventListener("change", () => {
    // Unset the slider instance.
    swiper.destroy();

    // if the user asked for no anmiations.
    if (mediaQuery.matches) {
        swiperSettings.effect = "fade";
        swiperSettings.speed = 0;
        swiperSettings.autoplay = false;
    } else {
        swiperSettings.effect = "slide";
        swiperSettings.speed = 300;
        swiperSettings.autoplay = { delay: 2500 };
    }

    // re-initialize the slider with the correct settings.
    swiper = new Swiper(".swiper-container", swiperSettings);
});
