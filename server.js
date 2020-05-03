require('dotenv').config()
var express = require('express')
var app = express()
var path = require('path')
var port = 9090;
var fs   = require('fs')
app.use(express.static(process.env.BUNDLE_PATH));

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.get('/', function (req, res) {
  res.send('Welcome!')
})
 
app.get('/_.txt', function (req, res) {
  let content = fs.readFileSync('./_.txt', 'utf-8')
  res.send(content)
})
app.listen(port)
console.log('ok! listening:',port);