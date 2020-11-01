const ScorboardController = require('../../database/Controllers/ScorboardController');
const GamesController = require('../../database/Controllers/GamesController');


function getScorboard(gameID){
    const scorboardController = new ScorboardController();
    const gamesController = new GamesController();

    if (gamesController.findOneGame(gameID).length === 0 ){
        throw new Error('Game not found');
    }
    
    return scorboardController.getScoreboardForOneGame(gameID);
}

module.exports = getScorboard;