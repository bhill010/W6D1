const Game = require("./game");

class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupTowers();
    this.render();
  }

  setupTowers() {
    this.$el.empty();
    this.$el.addClass("group");

    let $tower, $disk;

    for (let towerI = 0; towerI < 3; towerI++) {
      $tower = $("<ul>");
      for (let diskI = 0; diskI < 3; diskI++) {
        $disk = $("<li>");
        $tower.append($disk);
      }
      this.$el.append($tower);
    }
  }

  render() {

  }
}

module.exports = View;
