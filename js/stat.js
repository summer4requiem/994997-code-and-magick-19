'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var LEFT = 100;
var TOP = 10;
var GAP = 10;
var FONT_GAP = 25;
var TEXT_HEIGHT = 40;
var COLUMN_HEIGHT = 150;
var barWidth = 40;
var COLUMN_SPACE = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, LEFT + GAP, TOP + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, LEFT, TOP, '#fff');


  var maxTime = getMaxElement(times);

  var scaleFactor = COLUMN_HEIGHT / maxTime;

  for (var i = 0; i < players.length; i++) {
    var barHeight = scaleFactor * times[i];
    ctx.fillStyle = players[i] === 'Вы' ? 'rgba(255, 0 ,0, 1)' : 'hsl(240,' + Math.random() * 100 + '%, 50%)';
    ctx.fillRect(LEFT + GAP + COLUMN_SPACE + (barWidth + COLUMN_SPACE) * i, LEFT + GAP + COLUMN_HEIGHT - barHeight - FONT_GAP, barWidth, barHeight);

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 110, FONT_GAP + GAP);
    ctx.fillText('Список результатов:', 110, GAP + TEXT_HEIGHT);
    ctx.fillText(players[i], LEFT + GAP + COLUMN_SPACE + (barWidth + COLUMN_SPACE) * i, CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.round(times[i]), LEFT + GAP + COLUMN_SPACE + (barWidth + COLUMN_SPACE) * i, LEFT + GAP + COLUMN_HEIGHT - barHeight - TEXT_HEIGHT);
  }

};
