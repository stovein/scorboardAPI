const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gamesSchema = new Schema(
    {
        gameID: { type: Number, required: true, unique: true },
        title: { type: String, required: true },
        total_play_count: {type: Number, default: 0}
    },
    {
        timestamps: true
    }
);

const Games = mongoose.model('games', gamesSchema);

module.exports = Games;