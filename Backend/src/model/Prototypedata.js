const mongoose = require("mongoose");

// cloud database
mongoose.connect("mongodb+srv://AnjaliPeter:dressown@dressown.ncrb9.mongodb.net/DressOwn?retryWrites=true&w=majority");

// mongoose.connect("mongodb://localhost:27017/dressown");

const Schema = mongoose.Schema;

const PrototypeSchema = new Schema({
    category : String,
    color : String,
    image : String
});

var Prototypedata = mongoose.model("prototypedata",PrototypeSchema);
module.exports = Prototypedata;