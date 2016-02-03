var mongoose=require('mongoose'),
    config = require('../config');

mongoose.Promise = require('bluebird');

mongoose.connect(config.get('db:connection'));
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log('db is connected');
});
module.exports = db;