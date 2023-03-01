const connection = require('../config/connection');
const { Thoughts, Users } = require('../models');
const { users, thoughts } = require('./data');

console.time('seeding');

connection.once('open', async () => {
  await Thoughts.deleteMany({});
  await Users.deleteMany({});

  const users = [];
  const thoughts = [];

  await Users.collection.insertMany(users);

  await Thoughts.collection.insertMany(thoughts);

  console.table(users);
  console.table(thoughts, ['published', 'users', '_id']);
  console.timeEnd('seeding');
  process.exit(0);
});