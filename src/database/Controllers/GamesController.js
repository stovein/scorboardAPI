const GamesModel = require('../Models/Games.model');

class GamesController {
    constructor() {
        this.model = GamesModel;
    }

    async findAllGames() {
        const allGames = await this.model.find({}).exec()
        .catch((e) => {console.log(e)})
        return allGames;
    }

    async findAllActiveGames() {
        const allActiveGames = await this.model.find({isActive: true}).exec()
        .catch((e) => {console.log(e)})
        return allActiveGames;
    }

    async findOneGame(gameID) {
        const theGame = await this.model.find({gameID: gameID}).exec()
        .catch((e) => {console.log(e)})
        return theGame;
    }

    async addGame(title, isActive) {
        const gameID = await this.findLastID() + 1;
        const newGame = new GamesModel({
            gameID: gameID,
            title: title,
            isActive: isActive,
        });
        this.model.create(newGame);
    }

    async addMultipleGames(games) {
        if (games.length > 1) {
            const gameID = await this.findLastID() + 1

            games = games.map(function (game, idx) {
                return new GamesModel({...game, gameID: gameID + idx});
            })

            this.model.create(games);
        }
        else if (games.length === 1) {
            const title = games[0].title
            const isActive = games[0].isActive
            await this.addGame(title, isActive);
        }
        else {
            throw new Error ('Lütfen oyun bilgileri giriniz.');
        }
    }

    async findLastID(){
        const lastID = await this.findAllGames()
        .catch((e) => {console.log(e)})
        return lastID.length;
    }
}


module.exports = GamesController;