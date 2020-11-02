const ScorboardModel = require('../Models/Scorboard.model');
const UsersModel = require('../Models/Users.model');
const GamesModel = require('../Models/Games.model');
const gamesController = require('./GamesController');
const usersController = require('./UsersController');

class ScorboardController {
    constructor() {
        this.model = ScorboardModel;
        this.games = gamesController;
        this.users = usersController;
    }

    async getScoreboardForOneGame(gameID, limit = 25, order=-1) {
        const scoreboard = await this.model.find({ gameID: gameID }).sort({score: order}).limit(limit).exec();
        return scoreboard;
    }

    async getScoreboardForOneGameLimitless(gameID) {
        const scoreboard = await this.model.find({ gameID: gameID }).sort({score: -1}).exec();
        return scoreboard;
    }

    async getScoreForOneUserAndGame(gameID, userID) {
        const user = await this.model.find({ gameID: gameID, userID: userID}).exec();
        return user;
    }

    async addScore(gameID, userID, score) {
        const scoreboardForAGame = getScoreboardForOneGameLimitless(gameID).then((scoreboard) => {
            Object.values(scoreboard).forEach((object, idx) => {
                if (object.users.userID === userID) {
                    return {isUserPlayedBefore: true, oldRank: idx+1};
                }
            })
            return {isUserPlayedBefore: false, oldRank: -1};
        })
        .then((obj) => {
            if (obj.isUserPlayedBefore === true) {
                //update
                let game = this.games.findOneGame(gameID);

                const scroreboardQuery = { gameID: gameID, userID: userID }
                this.model.findOneAndUpdate(scroreboardQuery, {score: score});

                game.totalPlayCount = game.totalPlayCount + 1;

                const gameQuery = { gameID: gameID };
                GamesModel.findOneAndUpdate(gameQuery, game);

            }
            else {
                // add
                const user = this.users.findOneUser(userID);
                let game = this.games.findOneGame(gameID);

                const newRecord = new ScorboardModel({
                    user: user,
                    game: game,
                    score: score
                })

                newRecord.save();

                game.uniqueUsers = game.uniqueUsers + 1;
                game.totalPlayCount = game.totalPlayCount + 1;

                const query = { gameID: gameID };
                GamesModel.findOneAndUpdate(query, game);
            }
            return oldRank
        })
        return scoreboardForAGame;
    }

    async uniqueUsersForAGame(gameID) {
        const allUsers = await this.model.find({ gameID: gameID }).exec();
        return allUsers;
    }
}


module.exports = ScorboardController;