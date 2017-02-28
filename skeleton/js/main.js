// const View = ("./ttt-view");// require appropriate file
// const Game = ("./game");// require appropriate file
const View = require("./ttt-view");
const Game = require("./game");

$( () => {
  const rootEl = $('.ttt');
  const game = new Game();// Your code here
  new View(game, rootEl);
});
