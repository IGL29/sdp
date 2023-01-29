export default class BurgerMenu {

  timer = null;
  body = document.querySelector('body');

  constructor({
    burgerButtonElement,
    burgerMenuElement,
    classBtnActive,
    classMenuActive,
    classVisibilityHidden
  }) {
    this.burgerButtonElement = burgerButtonElement;
    this.burgerMenuElement = burgerMenuElement;
    this.classBtnActive = classBtnActive;
    this.classMenuActive = classMenuActive;
    this.classVisibilityHidden = classVisibilityHidden;

    burgerButtonElement.addEventListener('click', this.menageMenu.bind(this));
  }

  menageMenu() {
    if (!this.burgerMenuElement.classList.contains(this.classMenuActive)) {
      this.openMenu();
      return;
    }
    this.closeMenu();
  }

  openMenu() {
    clearTimeout(this.timer);
    this.body.style.overflow = 'hidden';
    this.burgerMenuElement.classList.remove(this.classVisibilityHidden);
    this.burgerMenuElement.classList.add(this.classMenuActive);
    this.burgerButtonElement.classList.add(this.classBtnActive);
    this.burgerButtonElement.ariaLabel = 'Закрыть меню';
  }

  closeMenu() {
    this.body.style.overflow = '';
    this.burgerMenuElement.classList.remove(this.classMenuActive);
    this.burgerButtonElement.classList.remove(this.classBtnActive);
    this.burgerButtonElement.ariaLabel = 'Открыть меню';
    this.timer = setTimeout(() => {
      this.burgerMenuElement.classList.add(this.classVisibilityHidden);
    }, 300);
  }
}
