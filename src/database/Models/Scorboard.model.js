const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scorboardSchema = new Schema(
    {
        users: [{ type: Schema.Types.ObjectId, ref:'users'}],
        games: [{ type: Schema.Types.ObjectId, ref:'games'}],
        score: { type: Number, required: true },
    },
    {
        timestamps: true
    }
);

const Scorboard = mongoose.model('scorboard', scorboardSchema);

module.exports = Scorboard;