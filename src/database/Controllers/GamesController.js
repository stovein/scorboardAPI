const GamesModel = require('../Models/Games.model');

class GamesController {
    constructor() {
        this.model = GamesModel;
    }

    async findAllGames() {
        const allGames = await this.model.find({}).exec();
        return allGames;
    }

    async findOneGame(gameID) {
        const theGame = await this.model.find({gameID: gameID}).exec();
        return theGame;
    }

    addGame(title, isActive) {
        const gameID = this.findLastID() + 1
        const newGame = new GamesModel({
            gameID: gameID,
            title: title,
            isActive: isActive,
        });
        this.model.create(newGame);
    }

    findLastID(){
        const lastID = await this.model.find({}).sort({gameID: -1}).limit(1).exec()
        return lastID['gameID'] || -1;
    }
}


module.exports = GamesController;