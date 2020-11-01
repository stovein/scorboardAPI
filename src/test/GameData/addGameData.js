const addMultipleGames = require('./addMultipleGames');
const addSingleGame = require('./addSingleGame');
const addSingleGameAlternative = require('./addSingleGameFromMultiple');

module.exports = function () {
    addMultipleGames();
    addSingleGame();
    addSingleGameAlternative();
}