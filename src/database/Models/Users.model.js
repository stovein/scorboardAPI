const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema(
    {
        userID: { type: Number, required: true, unique: true },
        name: { type: String, required: true },
    },
    {
        timestamps: true
    }
);

const Users = mongoose.model('users', usersSchema);

module.exports = Users;