const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gamesSchema = new Schema(
    {
        gameID: { type: Number, required: true, unique: true },
        title: { type: String, required: true },
        uniqueUsers: {type: Number, default: 0},
        totalPlayCount: {type: Number, default: 0},
        isActive : {type: Boolean, default: true}
    },
    {
        timestamps: true
    }
);

const Games = mongoose.model('games', gamesSchema);

module.exports = Games;