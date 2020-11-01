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

    async getScoreboardForOneGameLimitless(gameID) {
        const scoreboard = await this.model.find({ gameID: gameID }).exec();
        return scoreboard;
    }

    async getScoreForOneUserAndGame(gameID, userID) {
        const user = await this.model.find({ gameID: gameID, userID: userID}).exec();
        return user;
    }

    async addScore(gameID, userID, score) {
        const scoreboardForAGame = getScoreboardForOneGameLimitless(gameID).then((scoreboard) => {
            Object.values(scoreboard).forEach((object, idx) => {
                console.log(object.users.userID)
                if (object.users.userID === userID) {
                    return [true, scoreboard, idx];
                }
            })
            return [false, scoreboard];
        })
        .then((arr) => {
            const scoreboard = arr[1];
            const idx = arr[2];
            if (arr[0] === true) {
                const oldScore = scoreboard[idx];
                
            }
            else {
                const oldScore = -1;
            }
        })

    }

    async uniqueUsersForAGame(gameID) {
        const allUsers = await this.model.find({ gameID: gameID }).exec();
        return allUsers;
    }
}


module.exports = ScorboardController;