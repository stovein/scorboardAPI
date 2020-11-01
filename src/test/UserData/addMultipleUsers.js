const UsersController = require('../../database/Controllers/UsersController');


module.exports = function () {
    const uc = new UsersController();
    let users = []
    for(let i = 0; i < 30; i++) {
        let user = {
            name: 'User ' + i
        };
        users.push(user);
    }
    uc.addMultipleUsers(users);
}