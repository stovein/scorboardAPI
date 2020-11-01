const addMultipleGames = require('./addMultipleGames');
const addSingleGame = require('./addSingleGame');
const addSingleGameAlternative = require('./addSingleGameFromMultiple');

module.exports = async function () {
    await addMultipleGames();
    await addSingleGame();
    await addSingleGameAlternative();
}