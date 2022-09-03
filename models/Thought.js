const { Schema, model, mongoose } = require('mongoose');

const thoughtSchema = new Schema(
    {
    
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        }, 
        createdAt: {
            type: Date, default: new Date 
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [
            // references reactionSchema
            reactionSchema
        ]
    }, 
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

// virtual to leave commented until we add routes
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// initialize Thoughts model
const Thought = model('thoughts', thoughtSchema);

module.exports = Thought;
