export default function showMore({ buttonElement, classHideButton, listElements, classHideItem }) {

  buttonElement.addEventListener('click', (ev) => {
    for (const cardElement of listElements) {
      cardElement.classList.remove(classHideItem);
    }
    ev.currentTarget.classList.add(classHideButton);
  });
}
