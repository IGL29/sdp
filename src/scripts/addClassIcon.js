export default function addClassIcon({ inputElement, iconElement, classActiveIcon }) {

  inputElement.addEventListener('input', (ev) => {
    if (ev.target.value) {
      document.querySelector
      iconElement.classList.add(classActiveIcon);
      return;
    }
    iconElement.classList.remove(classActiveIcon);
  });
}
