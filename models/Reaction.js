const { Schema, model } = require('mongoose');

// schema for reactions
const reactionSchema = new Schema({
    reactionID: {
        type: Schema.Types.ObjectId,
        default: new ObjectId,
    },
    reactionBody: {
        type: String,
        required: true,
        // 280 character max
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date, 
        default: Date.now,
        // getter method to format the timestamp on query
    }
});

// not a model, but the reaction field's subdoc schema in the Thought model

const Reactions = model('reaction', reactionSchema);

module.exports = Reactions;