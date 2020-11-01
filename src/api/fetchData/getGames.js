const GamesController = require('../../database/Controllers/GamesController');
const ScorboardController = require('../../database/Controllers/ScorboardController');

function getGames(){
    // unique users eklenecek
    const gamesController = new GamesController();
    return gamesController.findAllActiveGames();
}


module.exports = getGames;