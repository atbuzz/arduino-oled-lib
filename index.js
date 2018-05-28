var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function(){

});

module.exports = {
  five: five,
  board: board
}
