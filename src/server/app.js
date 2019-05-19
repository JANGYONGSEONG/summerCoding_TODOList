const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');

const app = express();

//app.use(express.static(path.join(__dirname,'./../public')));
app.use(express.static(path.join(__dirname,'./../../dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: true }));

app.use('/plans',require('./api/plans/index'));

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname+'./../public/index.html'))
});

module.exports = {
  app: app,
  bodyParser: bodyParser
}
