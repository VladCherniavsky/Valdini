var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/userlist');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {
  console.log("db is connected");
});
module.exports = db;