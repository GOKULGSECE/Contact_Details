const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"users",
    },
    name:{
        type:String,
        required:[true,"please enter the name"],
    },
    email:{
        type:String,
        required:[true,"please enter the email_address"],
    },
    phoneno:{
        type:String,
        required:[true,"please enter the vaild phoneno"],
    }
},{
    timeStamps: true,
})

module.exports = mongoose.model("contacts",contactSchema);