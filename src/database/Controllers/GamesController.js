const GamesModel = require('../Models/Games.model');

class GamesController {
    constructor() {
        this.model = GamesModel;
    }

    async findAllGames() {
        const allGames = await this.model.find({}).exec();
        return allGames;
    }

    async findAllActiveGames() {
        const allActiveGames = await this.model.find({isActive: true}).exec();
        return allActiveGames;
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

    addMultipleGames(games) {
        if (games.length > 1) {
            const gameID = this.findLastID() + 1

            games = games.map(function (game, idx) {
                return new GamesModel({...game, gameID: gameID + idx});
            })

            this.model.create(games);
        }
        else if (games.length === 1) {
            const title = games[0].title
            const isActive = games[0].isActive
            this.addGame(title, isActive);
        }
        else {
            throw new Error ('Lütfen oyun bilgileri giriniz.');
        }
    }

    findLastID(){
        const lastID = await this.model.find({}).sort({gameID: -1}).limit(1).exec()
        return lastID['gameID'] || -1;
    }
}


module.exports = GamesController;