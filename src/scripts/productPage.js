import addСlassWhenInputActive from './addClassIcon.js';
import activateChoices from './activateChoices.js';
import BurgerMenu from './showBurgerMenu.js';
import Swiper, { Navigation } from 'swiper';

const searchFormElement = document.getElementById('search-form');
const iconSearchElement = document.getElementById('icon-search');
const classActiveIcon = 'wrap-icon__svg--active';

addСlassWhenInputActive({
  inputElement: searchFormElement.elements[0],
  iconElement: iconSearchElement,
  classActiveIcon,
});

const selectRegionElement = document.querySelector('.js-select-region');
const classSelectRegionOuter = 'choices wrap-select__choices-region';
const classSelectRegionInner = 'choices__inner wrap-select__inner';
const classSelectRegionItem = 'choices__item wrap-select__item';

const selectCategoryElement = document.querySelector('.js-select-category');
const classSelectCategoryOuter = 'choices row-4__choices-category';
const classSelectCategoryInner = 'choices__inner row-4__inner';
const classSelectCategoryItem = 'choices__item row-4__item';

activateChoices({
  selectElement: selectRegionElement,
  classSelectOuter: classSelectRegionOuter,
  classSelectInner: classSelectRegionInner,
  classSelectItem: classSelectRegionItem,
},
  {
    selectElement: selectCategoryElement,
    classSelectOuter: classSelectCategoryOuter,
    classSelectInner: classSelectCategoryInner,
    classSelectItem: classSelectCategoryItem,
  });

const burgerButtonElement = document.getElementById('burger-btn');
const burgerMenuElement = document.getElementById('burger-menu');
const classBtnActive = 'burger--active';
const classMenuActive = 'burger-menu--active';
const classVisibilityHidden = 'burger-menu--visibility-hidden';

const burgerMenu = new BurgerMenu({
  burgerButtonElement,
  burgerMenuElement,
  classBtnActive,
  classMenuActive,
  classVisibilityHidden
});

window.addEventListener('resize', (ev) => {
  if (document.documentElement.offsetWidth > 992) {
    burgerMenu.closeMenu();
  }
})

const classSimilarSwiper = document.querySelector('.js-similar-swiper');

const swiperSimilar = new Swiper(classSimilarSwiper, {
  modules: [Navigation],

  direction: 'horizontal',

  navigation: {
    nextEl: '.js-similar__swiper-button-next',
    prevEl: '.js-similar__swiper-button-prev',
  },

  spaceBetween: 16,
  slidesPerView: 2,
  slidesPerGroup: 2,

  breakpoints: {
    1024: {
      spaceBetween: 32,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },

    1320: {
      spaceBetween: 32,
      slidesPerView: 4,
      slidesPerGroup: 4,
    }
  },

  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
});
