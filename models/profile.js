const mongoose = require("mongoose");
const ProfileSchema = new mongoose.Schema({
    profile : {
        type : String
        
    },
    name : {
        type : String,
        required : true,
    },
    age : {
        type : Number,
        required : true,
    },
    profession :{
        type : String,
        reuired : true
    },
    Cast : {
        type : String,
        required : true
    },
    religion : {
        type : String,
        reuired : true,
    },
    city : {
        type : String,
        required : true,
    },
     salary : {
        type : String,
        required : true,

    }
    
});
const Profile = mongoose.model("Profile", ProfileSchema);
module.exports = Profile;