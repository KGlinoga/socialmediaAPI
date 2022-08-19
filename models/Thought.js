const { Schema, model } = require('mongoose');

const thoughtsSchema = new Schema(
    {
        // should there not be a thoughtID bit here? 
        thoughtText: {
            type: String,
            required: true,
            // somehow limit length to 280 chars
        }, 
        createdAt: {
            type: Date, default: Date.now 
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [
            // references reactionSchema
            { type: Schema.Types.ObjectId, ref: 'Reactions' }
        ]
    }
);

// virtual to leave commented until we add routes
// thoughtsSchema.virtual('reactionCount').get(function () {
//     return this.reactions.length;
// });

// initialize Thoughts model
const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;
