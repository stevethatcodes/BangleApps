(() => {
  var WARN_THRESHOLD = 15;
  var interval;

  function draw() {
    var x = this.x;
    var y = this.y;
    var bat = E.getBattery();
    g.reset();
    g.drawRect(x+4, y+7, x+22, y+17);
    g.fillRect(x+22, y+10, x+24, y+14);
    if (bat < WARN_THRESHOLD) {
      g.setColor(255,0,0);
    }
    g.fillRect(x+6, y+9, x+(6+Math.floor((14*(bat/100)))), y+15);

    if (Bangle.isCharging()) {
      g.reset();
      g.setColor(g.theme.fg);
      g.fillPoly([
        x+4, y+6,
        x+10, y+6,
        x+11, y+7,
        x+6, y+9,
        x+8, y+9,
        x+9, y+10,
        x+4, y+16,
        x+3, y+15,
        x+3, y+14,
        x+5, y+11,
        x+1, y+11,
        x+4, y+6
      ]);
      g.setColor(g.theme.bg);
      g.drawPoly([
        x+4, y+6,
        x+10, y+6,
        x+11, y+7,
        x+6, y+9,
        x+8, y+9,
        x+9, y+10,
        x+4, y+16,
        x+3, y+15,
        x+3, y+14,
        x+5, y+11,
        x+1, y+11,
        x+4, y+6
      ]);
    }
  }

  if (Bangle.isLCDOn()) {
    interval = setInterval(() => {
      WIDGETS.minimalbattery.draw(WIDGETS.minimalbattery);
    }, 10*60000);
  } else {
    clearInterval(interval);
  }

  Bangle.on('charge', () => {
    Bangle.buzz();
  });

  WIDGETS.minimalbattery = {
    area: "tr",
    width: 30,
    draw: draw
  };
})();
