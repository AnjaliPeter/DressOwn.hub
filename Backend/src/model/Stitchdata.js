const mongoose = require("mongoose");

// cloud database
mongoose.connect("mongodb+srv://AnjaliPeter:dressown@dressown.ncrb9.mongodb.net/DressOwn?retryWrites=true&w=majority");

// mongoose.connect("mongodb://localhost:27017/dressown");

const Schema = mongoose.Schema;

const StitchSchema = new Schema({
    title : String,
    customerid : String,
    category : String,
    image : String,
    description : String,
    price : String,
    size : String,
    bust : Number,
    waist : Number,
    hip : Number,
    neck : Number,
    shoulder : Number,
    bustspread : Number,
    backwidth : Number,
    frontlength : Number,
    backlength : Number
});

var Stitchdata = mongoose.model("stitchdata",StitchSchema);
module.exports = Stitchdata;