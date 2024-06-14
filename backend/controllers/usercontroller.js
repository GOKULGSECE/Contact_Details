const { message } = require('antd');
const asyncHandler = require('express-async-handler');
const users = require('../models/usermodels');
const bcrypt = require('bcrypt')

const registerUser = asyncHandler(async(req,res)=>{
    const{username,email,password} = req.body;
    if(!username || !email || !password)
        {
            res.status(400).json({message:"Not Found"});
        }
    const useravailable = await users.findOne({email});
    if(useravailable)
        {
            res.status(400);
            throw new Error("User already exists");
        }
    const hashpassword = await bcrypt.hash(password,15);
    console.log(hashpassword);
    const user_new = await users.create({
        username,
        email,
        password:hashpassword,
    });
    console.log(`user created: ${user_new}`)
    res.status(202).json({message:"user Registered"});
})

const LoginUser = asyncHandler(async(req,res)=>{
    res.status(202).json({message:"Login Successfull"});
})

const Currentinfo = asyncHandler(async(req,res)=>{
    res.status(202).json({message:"Fetching the current info from the user"});
})

module.exports = {registerUser,LoginUser,Currentinfo}