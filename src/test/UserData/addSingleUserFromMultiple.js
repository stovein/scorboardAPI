const UsersController = require('../../database/Controllers/UsersController');


module.exports = function () {
    const uc = UsersController();
    uc.addMultipleUsers([{name: 'User from Multiple Single'}])
}