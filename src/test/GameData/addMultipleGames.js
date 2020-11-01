const GamesController = require('../../database/Controllers/GamesController');


module.exports = function () {
    const gc = new GamesController();
    let games = []
    for(let i = 0; i < 10; i++) {
        let game = {
            title: 'Game ' + i,
            isActive: true
        };
        games.push(game);
    }
    gc.addMultipleGames(games);
}