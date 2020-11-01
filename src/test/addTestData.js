const addGameData = require('./GameData/addGameData');
const addUserData = require('./UserData/addUserData');

module.exports = function () {
    addGameData();
    addUserData();
}