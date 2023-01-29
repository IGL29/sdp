import Choices from 'choices.js';

export default function activateChoices(selectRegion, selectCategory) {

  const choicesRegion = new Choices(selectRegion.selectElement, {
    searchEnabled: false,
    itemSelectText: '',

    classNames: {
      containerOuter: selectRegion.classSelectOuter,
      containerInner: selectRegion.classSelectInner,
      item: selectRegion.classSelectItem,
    }
  });

  const choicesCategory = new Choices(selectCategory.selectElement, {
    searchEnabled: false,
    itemSelectText: '',
    placeholder: true,
    customProperties: {
      random: 'I am a custom property'
    },
    classNames: {
      containerOuter: selectCategory.classSelectOuter,
      containerInner: selectCategory.classSelectInner,
      item: selectCategory.classSelectItem,
    }
  });
}
