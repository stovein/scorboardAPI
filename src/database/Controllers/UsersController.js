const UsersModel = require('../Models/Users.model');

class UsersController {
    constructor() {
        this.model = UsersModel;    
    }

    async findAllUsers() {
        const allUsers = await this.model.find({}).exec();
        return allUsers;
    }

    addUser(name) {
        const userID = this.findLastID() + 1
        const newUser = new UsersModel({
            userID: userID,
            name: name
        });
        this.model.create(newUser);
    }

    findLastID(){
        const lastID = await this.model.find({}).sort({userID: -1}).limit(1).exec()
        return lastID['userID'] || -1;
    }
}


module.exports = UsersController;