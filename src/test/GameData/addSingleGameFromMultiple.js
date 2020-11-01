const GamesController = require('../../database/Controllers/GamesController');


module.exports = function () {
    const gc = new GamesController();
    gc.addMultipleGames([{title: 'Game Single Added With Multiple', isActive: false}])
}