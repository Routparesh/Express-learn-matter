require('dotenv').config();
var express = require('express');
var router = express.Router();
const userModel = require('./users')

/* GET home page. */
router.get('/', function(req, res){
  // req.session.ban = true;
  res.cookie('name','paresh')
  res.render('index')
})

router.get('/create',async function(req, res){
  const createduser = await userModel.create({
    username : 'Bapu',
    name: 'Bapu',
    age: 27,
  })
  res.send(createduser)
})

router.get('/allusers',async function(req, res){
  var allusers = await userModel.find();
  res.send(allusers)
})

router.get('/delete',async function(req, res){
  var userdelete = await userModel.findOneAndDelete({
    username : 'paresh'
  })
  res.send(userdelete)
})

router.get('/checkban',function(req,res){
  if(req.session.ban === true){
    res.send("<h1>You are Banned</h1>")
    console.log(req.session)
  } else{
    res.send('<h1>Not Banned</h1>')
  }
})

router.get('/removeban',function(req,res){
  req.session.destroy(function(err){
    if (err) throw err;
    res.send("<h1>Banned Removed</h1>")
  })
})

router.get('/read',function(req,res){
  console.log(req.cookies);
  res.send('<h1>Check</h1>')
})

router.get('/deletecookie',function(req,res){
  console.log(res.clearCookie('name'))
  res.send('<h1>Cookie clear</h1>')
})

module.exports = router;

