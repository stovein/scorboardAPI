const UsersController = require('../../database/Controllers/UsersController');


module.exports = function () {
    const uc = new UsersController();
    uc.addUser('User Single');
}