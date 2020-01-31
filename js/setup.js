'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green', 'lightblue'];
var COAT_COLORS = ['rgba(0, 191, 255)', 'rgba(181, 48, 255)', 'rgba(47, 213, 137)', 'rgba(255, 0, 102)', 'rgba(215, 210, 55)'];
var MaxWizardsAmount = 4;

// Персонажи
var listSimilarWizard = document.querySelector('.setup-similar-list');

document.querySelector('.setup-similar').classList.remove('hidden');

document.querySelector('.setup').classList.remove('hidden');
// Шаблон для волшебника
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


var getRandomData = function (array) {
  return Math.floor(Math.random() * array.length);
};

// заполнение массива  персонажами
var wizardsArray = [];

var createNewWizzards = function (length) {
  for (var i = 0; i < length; i++) {
    wizardsArray.push({
      name: WIZARD_NAMES[getRandomData(WIZARD_NAMES)] + ' ' + WIZARD_SURNAME[getRandomData(WIZARD_SURNAME)],
      coatColor: COAT_COLORS[getRandomData(COAT_COLORS)],
      eyesColor: EYES_COLOR[getRandomData(EYES_COLOR)],
    });
  }
};

createNewWizzards(MaxWizardsAmount);


var drawWizards = function (wizard) {
  var wizardHeros = similarWizardTemplate.cloneNode(true);
  wizardHeros.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardHeros.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardHeros.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardHeros;
};

var addPins = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizardsArray.length; i++) {
    fragment.appendChild(drawWizards(wizardsArray[i]));
  }
  listSimilarWizard.appendChild(fragment);
};

addPins();
