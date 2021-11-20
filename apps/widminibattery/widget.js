(() => {
  function draw() {
    var x = this.x;
    var y = this.y;
    g.reset();
    g.drawRect(x+4, y+7, x+22, y+17);
    g.fillRect(x+22, y+10, x+24, y+14);
    g.fillRect(x+6, y+9, x+(6+Math.floor((14*(E.getBattery()/100)))), y+15);
  }

  setInterval(() => {
    WIDGETS.minimalbattery.draw(WIDGETS.minimalbattery);
  }, 10*60000);

  WIDGETS.minimalbattery = {
    area: "tr",
    width: 30,
    draw: draw
  };
})();
