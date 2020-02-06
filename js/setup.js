'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green', 'lightblue'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var MaxWizardsAmount = 4;

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var setup = document.querySelector('.setup');
var listSimilarWizard = document.querySelector('.setup-similar-list');
var closeSetup = document.querySelector('.setup-close');
document.querySelector('.setup-similar').classList.remove('hidden');
var setupOpen = document.querySelector('.setup-open');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var userNameInput = setup.querySelector('.setup-user-name');

var inputCoatColor = setup.querySelector('input[name="coat-color"]');
var inputEyesColor = setup.querySelector('input[name="eyes-color"]');
var inputFireBallColor = setup.querySelector('input[name="fireball-color"]');

var wizardFireball = setup.querySelector('.setup-fireball-wrap');
var wizardCoat = setup.querySelector('.wizard-coat');
var wizardEyes = setup.querySelector('.wizard-eyes');

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

closeSetup.addEventListener('click', function () {
  closePopup();
});

closeSetup.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});


var getRandomData = function (array) {
  return Math.floor(Math.random() * array.length);
};

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2 - х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25 - ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

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

wizardCoat.addEventListener('click', function () {
  var color = COAT_COLORS[getRandomData(COAT_COLORS)];
  wizardCoat.style.fill = color;
  inputCoatColor.value = color;
});


wizardEyes.addEventListener('click', function () {
  var color = EYES_COLOR[getRandomData(EYES_COLOR)];
  wizardEyes.style.fill = color;
  inputEyesColor.value = color;
});


wizardFireball.addEventListener('click', function () {
  var color = FIREBALL_COLORS[getRandomData(FIREBALL_COLORS)];
  wizardFireball.style.background = color;
  inputFireBallColor.value = color;
});


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
wizardCoat();
