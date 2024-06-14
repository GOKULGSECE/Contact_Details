const mongoose = require('mongoose');

const usersmodel = mongoose.Schema({
    username:{
        type:String,
        required:[true,'Please enter the username'],
    },
    email:{
        type:String,
        required:[true,'Please enter the vaild email address'],
        unique:[true,'Email address already taken'],
    },
    password:{
        type:String,
        required:[true,'Please enter the password'],
    }
},{
    timestamps:true
})
module.exports = mongoose.model('users',usersmodel)