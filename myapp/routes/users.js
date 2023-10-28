// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)

// mongoose.connect('mongodb://l27.0.0.1:27017/expressendgame')

const userschema = mongoose.Schema({ username : String,
  name: String,
  age: Number, });

module.exports = mongoose.model('user',userschema)
