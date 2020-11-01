const UsersController = require('../../database/Controllers/UsersController');


module.exports = function () {
    const uc = UsersController();
    uc.addUser('User Single');
}