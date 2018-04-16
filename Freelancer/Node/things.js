var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var md5 = require('md5');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sonus@123',
    database: 'freelancer'

});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");


});

//router.get('/signup', function(req, res){
    //res.send('GET route on things.');

//});

router.post('/signup', function(req, res) {
    console.log("recieved request for signup");
    //res.send('POST route on things.');
//var name = req.body.username;
  //  connection.query('SELECT * FROM user_profile WHERE username = ?',[req.body.username], function (error, results, fields) {
    //if (error) {
      //  res.json({
        //    status:false,
          //  message:'there are some error with query'
        //})
   // }
    //else {
      //  if(name===results[0].username){
        //    res.send("username already present");
        //}

       // else {
            var users = {

                "email": req.body.email,
                "username": req.body.username,
                "passwrd": req.body.passwrd,

            }

            //res.send(users);
            var passwrd= md5(users.passwrd);
            connection.query('INSERT INTO user_profile SET ?', users, function (error, results, fields) {
                if (error) {
                    res.status(201).json({
                        status: false,
                        message: 'there are some error with query'

                    })
                } else {
                    res.status(201).json({
                        status: true,
                        message: 'user registered successfully'

                    })
                }
            });
        //}
    //}
//});

});


router.post('/tologin', function(req, res){
console.log("recieved request for login");
var uname=req.body.username;
var password=req.body.passwrd;
connection.query('SELECT * FROM user_profile WHERE username = ?',[uname], function (error, results, fields) {
    if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
    }else{
        if(results.length >0){
            if(password==results[0].passwrd){
                res.status(201).json({
                    status:201,
                    logi: 'yes',
                    username: req.body.username,
                    message:'successfully authenticated'
                })
            }else{
                res.status(201).json({
                    status:false,
                    message:"user name and password does not match"
                });
            }

        }
        else{
            res.json({
                status:false,
                message:"username does not exits"
            });
        }
    }
});
});


router.get('/projects', function(req, res){
    console.log("recieved request for projects");
    var uname=req.body.username;
    var password=req.body.passwrd;
    connection.query('SELECT * FROM user_profile WHERE username = ?',[uname], function (error, results, fields) {
        if (error) {
            res.json({
                status:false,
                message:'there are some error with query'
            })
        }else{
            if(results.length >0){
                if(password==results[0].passwrd){
                    res.status(201).json({
                        logi: 'yes',
                        username: req.body.username,
                        message:'successfully authenticated'
                    })
                }else{
                    res.json({
                        status:false,
                        message:"user name and password does not match"
                    });
                }

            }
            else{
                res.json({
                    status:false,
                    message:"username does not exits"
                });
            }
        }
    });
});
//export this router to use in our index.js
module.exports = router;