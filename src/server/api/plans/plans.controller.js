const MyApp = require("../../app");
const bodyParser = MyApp.bodyParser;
const async = require('async');
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
    return res.status(200).json({plans:row});
  });
}

exports.create = (req,res) => {
  const title = req.body.title;
  const content = req.body.content;

  const tasks = [
    function(callback){
      connection.query('insert into plan(title,content) values (?,?)',[title,content],function(err,result){
        if(err){
          throw err;
        }
        callback(null)
      });
    },
    function(callback){
      connection.query('select id from plan where title = ?',[title],function(err,row){
        if(err){
          throw err;
        }
        return res.status(201).json({
          id: row[0].id,
          title: title,
          content: content,
          date:"",
          priority:"",
          status:"",
          alarm:""
        });
      });
    }
  ];

  async.waterfall(tasks,function(err){
    if (err)
        throw err;
  });
}

exports.destroy = (req,res) => {
  const id = req.params.id;
  connection.query('delete from plan where id = ?',[id],function(err,result){
    if(err){
      throw err;
    }
    return res.status(204).send();
  });
}

exports.modifyTitle = (req,res) => {
  const id = req.params.id;
  const title = req.params.title;
  connection.query('update plan set title = ? where id = ?',[title,id],function(err,result){
    if(err){
      throw err;
    }
    return res.status(200).json(
      {
        title: title
      }
    );
  });
}

exports.modifyContent = (req,res) => {
  const id = req.params.id;
  const content = req.params.content;
  connection.query('update plan set content = ? where id = ?',[content,id],function(err,result){
    if(err){
      throw err;
    }
    return res.status(200).json(
      {
        content: content
      }
    );
  });
}


exports.modifyDate = (req,res) => {
  const id = req.params.id;
  const date = req.params.date;
  if(date==="empty"){
    connection.query('update plan set date = NULL where id = ?',[id],function(err,result){
      if(err){
        throw err;
      }
      return res.status(200).json(
        {
          date: ""
        }
      );
    });
  }else{
    connection.query('update plan set date = ? where id = ?',[date,id],function(err,result){
      if(err){
        throw err;
      }
      return res.status(200).json(
        {
          date: date
        }
      );
    });
  }
}

exports.modifyPriority = (req,res) => {
  const id = req.params.id;
  const priority = req.params.priority;
  if(priority==="empty"){
    connection.query('update plan set priority = NULL where id = ?',[id],function(err,result){
      if(err){
        throw err;
      }
      return res.status(200).json(
        {
          priority: ""
        }
      );
    });
  }else{
    connection.query('update plan set priority = ? where id = ?',[priority,id],function(err,result){
      if(err){
        throw err;
      }
      return res.status(200).json(
        {
          priority: priority
        }
      );
    });
  }

}

exports.modifyStatus = (req,res) => {
  const id = req.params.id;
  const status = req.params.status;
  if(status==="empty"){
    connection.query('update plan set status = NULL where id = ?',[id],function(err,result){
      if(err){
        throw err;
      }
      return res.status(200).json(
        {
          status: ""
        }
      );
    });
  }else{
    connection.query('update plan set status = ? where id = ?',[status,id],function(err,result){
      if(err){
        throw err;
      }
      return res.status(200).json(
        {
          status: status
        }
      );
    });
  }
}

/*
exports.modifyAlarm = (req,res) => {

}
*/
