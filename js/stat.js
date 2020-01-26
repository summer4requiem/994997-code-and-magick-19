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

var drawRect = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color || '#000';
  ctx.fillRect(x, y, width, height);
};

var drawText = function (ctx, text, x, y, color, font) {
  ctx.fillStyle = color || '#000';
  ctx.font = font || '16px PT Mono';
  ctx.fillText = (text, x, y);
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
  drawRect(ctx, LEFT + GAP, TOP + GAP, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)');
  drawRect(ctx, LEFT, TOP, CLOUD_WIDTH, CLOUD_HEIGHT, '#fff');


  var maxTime = getMaxElement(times);
  var scaleFactor = COLUMN_HEIGHT / maxTime;

  drawText(ctx, 'Ура вы победили!', LEFT + TOP, FONT_GAP + GAP);
  drawText(ctx, 'Список результатов:', LEFT + TOP, GAP + TEXT_HEIGHT);

  for (var i = 0; i < players.length; i++) {
    var barHeight = scaleFactor * times[i];
    var x = LEFT + GAP + COLUMN_SPACE + (barWidth + COLUMN_SPACE) * i;
    var y = LEFT + GAP + COLUMN_HEIGHT - barHeight;


    drawRect(ctx, x, y - FONT_GAP, barWidth, barHeight, players[i] === 'Вы' ? 'rgba(255, 0 ,0, 1)' : 'hsl(240,' + Math.random() * 100 + '%, 50%)');

    drawText(ctx, players[i], x, CLOUD_HEIGHT - GAP);
    drawText(ctx, Math.round(times[i]), x, y - TEXT_HEIGHT);
  }

};
