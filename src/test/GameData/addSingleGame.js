const GamesController = require('../../database/Controllers/GamesController');


module.exports = function () {
    const gc = new GamesController();
    gc.addGame('Game Single', false);
}