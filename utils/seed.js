const connection = require('../config/connection');
const { User, Thought } = require('../models');
const getUsers = require('./data');

console.time('seeding');

connection.on('error', (err) => err);

// Creates a connection to mongodb
connection.once('open', async () => {
    console.log('connected');

const users = [];
const thought = [];
const reaction = [];

users.push({
    username,
    email,
})

await User.collection.insertOne(users);
await Thought.collection.insertMany(thoughts);

console.table(users);
console.table(thought);
console.table(reaction);
console.timeEnd('seeding complete!');
process.exit(0);
});
