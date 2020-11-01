const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gamesSchema = new Schema(
    {
        gameID: { type: Number, required: true, unique: true },
        title: { type: String, required: true },
        users: [{ type: Schema.Types.ObjectId, ref:'users'}],
        total_play_count: {type: Number}
    },
    {
        timestamps: true
    }
);

const Games = mongoose.model('games', gamesSchema);

module.exports = Games;