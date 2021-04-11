var mongoose = require("mongoose");

// connect to cloud Database
mongoose.connect("mongodb+srv://AnjaliPeter:dressown@dressown.ncrb9.mongodb.net/DressOwn?retryWrites=true&w=majority");

// connect to manually created Database
// mongoose.connect("mongodb://localhost:27017/dressown");

var Schema = mongoose.Schema;

var AccountSchema = new Schema({
    firstname : String,
    lastname : String,
    email : String,
    designation : String,
    purpose : String,
    password : String,
    phoneno : Number
});

var Accountdata = mongoose.model("accountdata",AccountSchema);

module.exports = Accountdata;