const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const users = require('./data');

console.time('seeding');


// Creates a connection to mongodb
connection.once('open', async () => {

const users = [];
const thought = [];
const reaction = [];

console.table(users);
console.table(thought);
console.table(reaction);
console.timeEnd('seeding complete!');
process.exit(0);
});
