const addMultipleUsers = require('./addMultipleUsers');
const addSingleUser = require('./addSingleUser');
const addSingleUserFromMultiple = require('./addSingleUserFromMultiple');

module.exports = async function () {
    await addMultipleUsers();
    await addSingleUser();
    await addSingleUserFromMultiple();
}