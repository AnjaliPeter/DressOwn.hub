const express = require("express");

const accountRouter = express.Router();

const Accountdata = require("../model/Accountdata");


// designs
accountRouter.get("/",(req,res) =>
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    Accountdata.find()
    .then(function(accounts)
    {
        res.send(accounts);
    });
});


// add new account
accountRouter.post("/addaccount",(req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    console.log(req.body);

    // new account
    var accnt = {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        designation : req.body.designation,
        purpose : req.body.purpose,
        password : req.body.password,
        phoneno : req.body.phoneno
    }

    // pass to AccountSchema
    var account = Accountdata(accnt);
    account.save();
    res.send("success");
});

// search account
accountRouter.get("/searchaccount/:email",(req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    const email = req.params.email;

    Accountdata.findOne({email : email})
    .then(function(account){
        res.send(account);
        console.log(account);
    });

});


module.exports = accountRouter;