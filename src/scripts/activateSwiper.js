import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';

export default function activateSwiper({ classHeroSwiper, classOffersSwiper, classUsefulSwiper }) {

  const swiperPromo = new Swiper(classHeroSwiper, {
    modules: [Navigation, Pagination, Autoplay, EffectFade],

    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.js-hero__swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    effect: 'fade',

    fadeEffect: {
      crossFade: true
    },

    autoplay: {
      delay: 5000,
    },

    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
    },
  });

  const swiperOffers = new Swiper(classOffersSwiper, {
    modules: [Navigation],

    direction: 'horizontal',

    navigation: {
      nextEl: '.js-offers__swiper-button-next',
      prevEl: '.js-offers__swiper-button-prev',
    },

    spaceBetween: 32,

    breakpoints: {
      640: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },

      1024: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },

      1320: {
        slidesPerView: 'auto',
        slidesPerGroup: 3,
      }
    },

    on: {
      afterResize() {
        console.log(window.innerWidth)
        if (window.innerWidth >= 1300) {
          swiperOffers.slides.css('width', '');
        }
      }
    },

    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  const swiperUseful = new Swiper(classUsefulSwiper, {
    modules: [Navigation],
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.hero__swiper-pagination',
    },

    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
    },

    navigation: {
      nextEl: '.js-useful__swiper-button-next',
      prevEl: '.js-useful__swiper-button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },

      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 32
      },

      992: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 32
      },

      1200: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 32
      },
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}
