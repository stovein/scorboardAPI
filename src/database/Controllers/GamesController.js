const GamesModel = require('../Models/Games.model');

class GamesController {
    constructor() {
        this.model = GamesModel;
    }

    async findAllGames() {
        const allGames = await this.model.find({}).exec();
        return allGames;
    }

    addGame(title) {
        const gameID = this.findLastID() + 1
        const newGame = new GamesModel({
            gameID: gameID,
            title: title
        });
        this.model.create(newGame);
    }

    findLastID(){
        const lastID = await this.model.find({}).sort({gameID: -1}).limit(1).exec()
        return lastID['gameID'] || -1;
    }
}


module.exports = GamesController;