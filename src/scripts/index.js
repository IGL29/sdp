import addСlassWhenInputActive from './addClassIcon.js';
import activateSwiper from './activateSwiper.js';
import activateChoices from './activateChoices.js';
import showMore from './showMore.js';
import BurgerMenu from './showBurgerMenu.js';

const classHeroSwiper = '.hero__swiper-container';
const classOffersSwiper = '.js-offers-swiper-desktop';
const classUsefulSwiper = '.js-useful__swiper-container';

activateSwiper({
  classHeroSwiper,
  classOffersSwiper,
  classUsefulSwiper
})

const searchFormElement = document.getElementById('search-form');
const iconSearchElement = document.getElementById('icon-search');
const classActiveIcon = 'wrap-icon__svg--active';

addСlassWhenInputActive({
  inputElement: searchFormElement.elements[0],
  iconElement: iconSearchElement,
  classActiveIcon,
});

const btnShowMoreElement = document.getElementById('btn-more');
const listCardElement = document.getElementById('list-high-rating');
const classHideItem = 'card-item--display-none';
const classHideButton = 'high-rating__btn--display-none';

showMore({
  buttonElement: btnShowMoreElement,
  classHideButton,
  listElements: listCardElement.children,
  classHideItem,
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

const addButtonElement = document.querySelectorAll('.card-link__btn');

for (const button of addButtonElement) {
  button.addEventListener('click', (ev) => ev.preventDefault());
}
