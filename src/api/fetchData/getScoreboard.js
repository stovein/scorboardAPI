const ScorboardController = require('../../database/Controllers/ScorboardController');
const GamesController = require('../../database/Controllers/GamesController');


function getScorboard(app){
    const scorboardController = new ScorboardController();
    const gamesController = new GamesController();

    if (gamesController.findOneGame(gameID).length === 0 ){
        throw new Error('Game not found');
    }
    
    let scoreboard = scorboardController.getScoreboardForOneGame(gameID)
    scoreboard = scoreboard.map(function (user, idx) {
        return {...user, rank: idx+1}
    })

    return scoreboard;
}

module.exports = getScorboard;