const GamesController = require('../../database/Controllers/GamesController');


module.exports = function () {
    const gc = GamesController();
    gc.addGame('Game Single', false);
}