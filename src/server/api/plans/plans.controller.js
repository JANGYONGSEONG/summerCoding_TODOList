const MyApp = require("../../app");
const bodyParser = MyApp.bodyParser;

const mysql = require('mysql');

const dbConfig = {
  host: 'localhost',
  port: 3306,
  user: 'summer',
  password: '123123',
  database: 'todo'
};

var connection;

function handleDisconnect(){
  connection = mysql.createConnection(dbConfig);
  connection.connect(function onConnect(err){
    if(err){
        console.log('error when connection to db:', err);
        setTimeout(handleDisconnect, 10000);
    }
  });

  connection.on('error', function onError(err){
    console.log();
    if(err.code == 'PROTOCOL_CONNECTION_LOST'){
      handleDisconnect();
    }else{
      throw err;
    }
  });
}

handleDisconnect();


exports.show = (req,res) => {
  connection.query('select * from plan',function(err,row){
    if(err){
      throw err;
    }
    return res.status(200).json(row);
  });
}

exports.create = (req,res) => {
  const title = req.body.title;
  const content = req.body.content;
  connection.query('insert into plan(title,content) values (?,?)',[title,content],function(err,result){
    if(err){
      throw err;
    }
    return res.status(201).json(
      {
        title:title,
        content:content
      }
    );
  });
}

/*
exports.destroy = (req,res) => {

}

exports.modifyTitle = (req,res) => {

}

exports.modifyContent = (req,res) => {

}

exports.modifyDeadLine = (req,res) => {

}

exports.modifyPriority = (req,res) => {

}

exports.modifyComplete = (req,res) => {

}

exports.modifyAlarm = (req,res) => {

}
*/