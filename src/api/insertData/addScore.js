const ScorboardController = require('../../database/Controllers/ScorboardController');
const GamesController = require('../../database/Controllers/GamesController');

function addScore(app){
    const scorboardController = new ScorboardController();
    const gamesController = new GamesController();

    app.post('/api/get_scoreboard/', (req, res) =>{
        
        const game_id = req.body.game_id;
        const user_id = req.body.user_id;
        const score = req.body.score; 

        if (!game_id || !user_id || !score) {
            res.send('Lütfen parametreleri tam giriniz.')
        }

        gamesController.findOneGame(gameID).then((game) => {
            if (game.length === 0 ){
                res.send('Aradığınız oyun bulunmamaktadır.');
            }
        })        

        
    })    
}

module.exports = addScore;