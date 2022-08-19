const { Schema, model } = require('mongoose');

const userSchema = new Schema (
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
            // must match a valid email address
        },
        thoughts: [
            // an array of _id values referencing the Thought model
            { type: Schema.Types.ObjectId, ref: 'Thoughts'}
            // thoughtsSchema
        ],
        friends: [
            // array of _id values refencing the User model (self-reference)
            { type: Schema.Types.ObjectId, ref: 'user'}
            // userSchema
        ]
    });

userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;