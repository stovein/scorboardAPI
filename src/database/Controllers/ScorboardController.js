const ScorboardModel = require('../Models/Scorboard.model');
const UsersModel = require('../Models/Users.model');
const GamesModel = require('../Models/Games.model');

class ScorboardController {
    constructor() {
        this.model = ScorboardModel;    
    }

    async getScoreboardForOneGame(gameID, limit = 25, order=-1) {
        const scoreboard = await this.model.find({ gameID: gameID }).sort({score: order}).limit(limit).exec();
        return scoreboard;
    }

    async getScoreForOneUserAndGame(gameID, userID) {
        const user = await this.model.find({ gameID: gameID, userID: userID}).exec();
        return user;
    }

    async addScore(gameID, userID, score) {
        

    }

    async uniqueUsersForAGame(gameID) {
        const allUsers = await this.model.find({ gameID: gameID }).exec();
        return allUsers;
    }
}


module.exports = ScorboardController;