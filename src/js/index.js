// Splide.js for Testimonial Slider
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
new Splide(".splide", {
  type: "loop",
  perPage: 3,
  perMove: 1,
  gap: 20,
  arrows: false,
  pagination: false,
  autoplay: true,
  interval: 2000,
  breakpoints: {
    992: {
      perPage: 2,
    },
    768: {
      perPage: 1,
    },
  },
}).mount();
