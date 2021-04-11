const express = require("express");
const app = new express();

// port selection
const port = process.env.PORT || 9999;
console.log("server is on "+port);


var cors = require("cors");
app.use(cors());

var bodyparser = require("body-parser");
app.use(bodyparser.json());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const designRouter = require("./src/routes/designRouter");
const prototypeRouter = require("./src/routes/prototypeRouter");
const stitchRouter = require("./src/routes/stitchRouter");
const accountRouter = require("./src/routes/accountRouter");

app.use("/designs",designRouter);
app.use("/prototypes",prototypeRouter);
app.use("/stitch",stitchRouter);
app.use("/accounts",accountRouter);


app.get("/",(req,res)=>
{
    res.send("hai");
});

// server port
app.listen(port);