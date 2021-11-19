(() => {
  function draw() {
    g.reset();
    g.drawRect(2, 7, 20, 17);
    g.fillRect(20, 10, 22, 14);
    g.fillRect(4, 9, (4+Math.floor((14*(E.getBattery()/100)))), 15);
  }

  setInterval(() => {
    WIDGETS.minimalbattery.draw(WIDGETS.minimalbattery);
  }, 10*60000);

  WIDGETS.minimalbattery = {
    area: "tr",
    width: 24,
    draw: draw
  };
})();
