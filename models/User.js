const { Schema, model, mongoose } = require('mongoose');

const userSchema = new mongoose.Schema (
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trimmed: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please provide a valid email address']
        },
        thoughts: [
            // an array of _id values referencing the Thought model
            { type: Schema.Types.ObjectId, ref: 'thoughts'}
        ],
        friends: [
            // array of _id values refencing the User model (self-reference)
            {
                type: Schema.Types.ObjectId,
                ref: 'user'
            }
    
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    });

    // uncomment when you add routes - this counts the friends!
userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});

const User = mongoose.model('user', userSchema);

module.exports = User;