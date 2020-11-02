const ScorboardController = require('../../database/Controllers/ScorboardController');
const GamesController = require('../../database/Controllers/GamesController');

function getScorboard(app){
    const scorboardController = new ScorboardController();
    const gamesController = new GamesController();

    app.get('/api/get_scoreboard/:game_id', (req, res) =>{

        const gameID = req.params.game_id

        gamesController.findOneGame(gameID).then((game) => {
            if (game.length === 0 ){
                res.send('Aradığınız oyunu bulamadık.');
            }
        })        

        scorboardController.getScoreboardForOneGame(gameID).then((scoreboard) => {
            scoreboard = scoreboard.map(function (user, idx) {
                return {...user, rank: idx+1}
            })
            
            res.send(scoreboard);
        })
        
    })    
}

module.exports = getScorboard;