const ScorboardController = require('../../database/Controllers/ScorboardController');
const GamesController = require('../../database/Controllers/GamesController');
const UsersController = require('../../database/Controllers/UsersController');

function addScore(app){
    const scoreboardController = new ScorboardController();
    const gamesController = new GamesController();
    const usersController =new UsersController();

    app.post('/api/add_score/', (req, res) =>{
        
        const gameID = req.body.game_id;
        const userID = req.body.user_id;
        const score = req.body.score; 

        if (!gameID || !userID || !score) {
            res.send('Lütfen parametreleri tam giriniz.')
        }

        gamesController.findOneGame(gameID).then((game) => {
            if (game.length === 0 ){
                res.send('Aradığınız oyun bulunmamaktadır.');
            }
        })

        usersController.findOneUser(userID).then((user) => {
            if (user.length === 0 ){
                res.send('Aradığınız kullanıcı bulunmamaktadır.');
            }
        })

        scoreboardController.addScore(gameID, userID, score).then((oldRank) => {
            getScoreboardForOneGameLimitless(gameID).then((scoreboard) => {
                Object.values(scoreboard).forEach((object, idx) => {
                    if (object.user.userID === userID) {
                        return {scoreboard: scoreboard, newRank: idx+1};
                    }
                })
            }).then((obj) => {
                const newRank = obj.newRank;
            
                if (oldRank === -1){
                    res.send({
                        oldRank: -1,
                        newRank: newRank,
                        sweep: []
                    })
                }
                const scoreboard = obj.scoreboard;
                let sweep = [];

                for(let i = newRank; i < oldRank; i++){
                    sweep.push(scoreboard[i].user.userID);
                }
                
                res.send({
                    oldRank: oldRank,
                    newRank: newRank,
                    sweep: sweep
                })
            })
        });
    })    
}

module.exports = addScore;