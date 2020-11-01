const GamesController = require('../../database/Controllers/GamesController');

function getGames(app){
    // unique users eklenecek
    const gamesController = new GamesController();
    gamesController.findAllActiveGames().then(games => {
        app.get('/api/get_games', (req, res) => {
            res.send(games);
        })
    })
}


module.exports = getGames;