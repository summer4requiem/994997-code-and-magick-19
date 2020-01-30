'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var COAT_COLORS = ['rgba(101, 137, 164)', 'rgba(241, 43, 107)', 'rgba(146, 100, 161)', 'rgba(56, 159, 117)', 'rgba(215, 210, 55)', 'rgba(215, 260, 55)'];
// Персонажи
var listSimilarWizard = document.querySelector('.setup-similar-list');

document.querySelector('.setup-similar').classList.remove('hidden');

document.querySelector('.setup').classList.remove('hidden');
// Шаблон для волшебника
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


var getRandomData = function (array) {
  return Math.floor(Math.random() * Math.floor(array - 1));

};

// заполнение массива  персонажами
var wizardsArray = [];

var createNewWizzards = function (length) {
  for (var i = 0; i < length; i++) {
    wizardsArray.push({
      name: WIZARD_NAMES[getRandomData(WIZARD_NAMES.length)] + ' ' + WIZARD_NAMES[getRandomData(WIZARD_SURNAME.length)],
      coatColor: COAT_COLORS[getRandomData(COAT_COLORS.length)],
      eyesColor: EYES_COLOR[getRandomData(EYES_COLOR.length)]
    });
  }
};

createNewWizzards(wizardsArray);


var drawWizards = function (wizard) {
  var wizardHeros = similarWizardTemplate.cloneNode(true);
  wizardHeros.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardHeros.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardHeros.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;
  return wizardHeros;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizardsArray; i++) {
  fragment.appendChild(drawWizards(wizardsArray[i]));
}

listSimilarWizard.appendChild(fragment);
