const express = require("express");

const designRouter = express.Router();

const Designdata = require("../model/Designdata");


// designs
designRouter.get("/",(req,res) =>
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    Designdata.find()
    .then(function(designs)
    {
        res.send(designs);
    });
});


// add new design
designRouter.get("/adddesign",(req,res)=>
{
    var designItem = {
        title : "Casual 3/4 Sleeve Solid Women Yellow Top",
        category : "Top",
        color : "Yellow",
        image : "top6.jpeg",
        description : "U neck,3/4 sleeve,Georgette,Regular top",
        price : 500,
        offer : "20% Off",
        size : "S,M,L,XL"
    }

    var design = Designdata(designItem);
    design.save();
    res.send("success");
});


// single design
designRouter.get("/singledesign/:id",(req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    const id = req.params.id;

    Designdata.findOne({_id : id})
    .then(function(design){
        res.send(design);
    });

});

module.exports = designRouter;