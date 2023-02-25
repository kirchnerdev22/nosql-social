const { connect, connection } = require('mongoose');

const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/';

connect(connectionString, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex: true,
});

module.exports = connection;