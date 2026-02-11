const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    username:{
        type: String,
        required : true,
        unique : true,
    },
    email:{
        type : String,
        required :true,
        unique :true,
    },
    password : {
        type : String,
        required : true,
    },
    role :{
        type : String,
        enum :['user','artist'], //enum tell the properties, among 2 which value will comes.
        default : 'user', 
    }

})

const userModel = mongoose.model("user",userSchema);

module.exports = userModel;