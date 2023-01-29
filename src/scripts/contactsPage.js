import addСlassWhenInputActive from './addClassIcon.js';
import activateChoices from './activateChoices.js';
import BurgerMenu from './showBurgerMenu.js';

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

ymaps.ready(init);

function init() {
  // Создание карты.
  let myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    center: [55.755776, 37.625627],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 14,
  }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      `
  <div class="balloon">
      <h4 class="balloon__title">SitDownPls на Солянке </h4>
      <address class="balloon__address-map address-map">
        <p class="address-map__text">м. Китай-город, ул. Солянка, д.24</p>
        <a class="address-map__phone-link phone-link" href="tel:+74958854547">
          <svg class="phone-link__svg">
            <use xlink:href="../img/sprite.svg#phone"></use>
          </svg>
          +7 (495) 885-45-47
        </a>
      </address>

      <div class="balloon__wrap-descr wrap-descr wrap-descr--border wrap-descr--padding">
        <p class="wrap-descr__head">Часы работы:</p>
        <p class="wrap-descr__descr"> с 10:00 до 21:00</p>
      </div>

      <div class="balloon__wrap-descr wrap-descr">
        <p class="wrap-descr__head">Что здесь:</p>
        <p class="wrap-descr__descr">шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр</p>
      </div>
  </div>
  `),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'м. Китай-город, ул. Солянка, д.24',
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: '../img/sprite.svg#placemark',
      // Размеры метки.
      iconImageSize: [32, 42],
      // Передаем макет
      // balloonContentLayout: MyIconContentLayout,
      // maxWidth: 300
    });

  let balloon = new ymaps.Balloon(myMap);
  balloon.options.maxWidth = 300;
  balloon.options.balloonContentLayout = MyIconContentLayout;

  myMap.controls.remove('zoomControl');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('searchControl');
  myMap.controls.remove('rulerControl');
  myMap.controls.remove('geolocationControl');

  myMap.geoObjects.add(myPlacemark)
}
