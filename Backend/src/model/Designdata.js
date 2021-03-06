const mongoose = require("mongoose");

// cloud database
mongoose.connect("mongodb+srv://AnjaliPeter:dressown@dressown.ncrb9.mongodb.net/DressOwn?retryWrites=true&w=majority");

// mongoose.connect("mongodb://localhost:27017/dressown");

const Schema = mongoose.Schema;

const DesignSchema = new Schema({
    title : String,
    category : String,
    color : String,
    image : String,
    description : String,
    price : Number,
    offer : String,
    size : String
});

var Designdata = mongoose.model("designdata",DesignSchema);
module.exports = Designdata;