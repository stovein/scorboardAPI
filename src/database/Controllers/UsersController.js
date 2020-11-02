const UsersModel = require('../Models/Users.model');

class UsersController {
    constructor() {
        this.model = UsersModel;    
    }

    async findAllUsers() {
        const allUsers = await this.model.find({}).exec()
        .catch((e) => {console.log(e)})
        return allUsers;
    }

    async findOneUser(userID) {
        const user = await this.model.find({userID: userID}).exec()
        .catch((e) => {console.log(e)})
        return user;
    }

    async addUser(name) {
        const userID = await this.findLastID() + 1
        const newUser = new UsersModel({
            userID: userID,
            name: name
        });
        this.model.create(newUser);
    }

    async addMultipleUsers(users) {
        if (users.length > 1) {
            const userID = await this.findLastID() + 1

            users = users.map(function (user, idx) {
                return new UsersModel({...user, userID: userID + idx});
            })

            this.model.create(users);
        }
        else if (users.length === 1) {
            const name = users[0].name
            await this.addUser(name);
        }
        else {
            throw new Error ('Lütfen kullanıcı bilgileri giriniz.');
        }
    }

    async findLastID(){
        const lastID = await this.findAllUsers()
        .catch((e) => {console.log(e)})
        return lastID.length;
    }
}


module.exports = UsersController;