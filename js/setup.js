'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green', 'rgb(56, 159, 117)'];
var COAT_COLORS = ['rgba(101, 137, 164)', 'rgba(241, 43, 107)', 'rgba(146, 100, 161)', 'rgba(56, 159, 117)', 'rgba(215, 210, 55)', 'rgba(0, 0, 0)'];
var listSimilarWizard = document.querySelector('.setup-similar-list');

document.querySelector('.setup-similar').classList.remove('hidden');
document.querySelector('.setup').classList.remove('hidden');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


var getRandomData = function (array) {
  return [Math.floor(Math.random() * array.length)];
};


var createNewWizzards = function (length) {

  var wizardsArray = [];
  for (var i = 0; i < length; i++) {
    wizardsArray.push({
      name: WIZARD_NAMES[getRandomData] + '' + WIZARD_SURNAME[getRandomData],
      coatColor: COAT_COLORS[getRandomData],
      eyeColor: EYES_COLOR[getRandomData],
    });
  }
  return wizardsArray;
};

var wizards = createNewWizzards(4);

var drawWizards = function (wizard) {
  var wizardHeros = similarWizardTemplate.cloneNode(true);
  wizardHeros.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardHeros.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardHeros.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;

  return wizardHeros;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(drawWizards(wizards));
}
listSimilarWizard.appendChild(fragment);
