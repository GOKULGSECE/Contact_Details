const mongoose = require('mongoose');
// const dotenv = require('dotenv').config();
const connectDB = async()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_DB);
        console.log(`Database Connected on ${process.env.MONGO_DB}`)
    }catch{
        console.log(err);
        process.exit(0);
    }
}

//xmn9waijuK0LZDHP
//gokulg2022cce 
module.exports = connectDB