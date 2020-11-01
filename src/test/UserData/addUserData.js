const addMultipleUsers = require('./addMultipleUsers');
const addSingleUser = require('./addSingleUser');
const addSingleUserFromMultiple = require('./addSingleUserFromMultiple');

module.exports = function () {
    addMultipleUsers();
    addSingleUser();
    addSingleUserFromMultiple();
}