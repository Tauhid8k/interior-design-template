// Splide.js, CounterUp.js
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

// CountUP JS
import { CountUp } from "countup.js";

// Testimonial Slider
new Splide(".testimonial-slider", {
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

// Brand Slider
new Splide(".brand-slider", {
  type: "loop",
  perPage: 5,
  perMove: 1,
  gap: 108,
  arrows: false,
  pagination: false,
  autoplay: true,
  interval: 1500,
  pauseOnHover: false,
  breakpoints: {
    992: {
      perPage: 3,
    },
    768: {
      perPage: 2,
    },
    576: {
      perPage: 1,
    },
  },
}).mount();

// Counter Section
const counters = document.querySelectorAll(".counter"),
  options = {
    useGrouping: false,
    enableScrollSpy: true,
    scrollSpyOnce: true,
  };

counters.forEach((item) => {
  const value = item.dataset.value;
  const counter = new CountUp(item, value, options);
  counter.start();
});
