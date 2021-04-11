const express = require("express");

const stitchRouter = express.Router();

const Stitchdata = require("../model/Stitchdata");


// designs
stitchRouter.get("/",(req,res) =>
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    Stitchdata.find()
    .then(function(designs)
    {
        res.send(designs);
    });
});


// add new design
stitchRouter.get("/adddesign",(req,res)=>
{
    var designItem = {
        title : "Blue skirt",
        customerid : "CUSTID_100423",
        category : "Skirt",
        image : "stitchpic3.jpeg",
        description : "Entire outfit must be stitched with sapphire blue colored light weight silk. Waistline must also be made with the same material.",
        price : "500 - 1000",
        size : "S / M",
        bust : 0,
        waist : 30,
        hip : 35,
        neck : 0,
        shoulder : 0,
        bustspread : 0,
        backwidth : 45,
        frontlength : 75,
        backlength : 76
    }

    var design = Stitchdata(designItem);
    design.save();
    res.send("success");
});


// single design
stitchRouter.get("/singledesign/:id",(req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    const id = req.params.id;

    Stitchdata.findOne({_id : id})
    .then(function(design){
        res.send(design);
    });

});

module.exports = stitchRouter;