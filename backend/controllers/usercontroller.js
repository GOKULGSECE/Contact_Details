const { message } = require('antd');
const asyncHandler = require('express-async-handler');
const users = require('../models/usermodels');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

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
    if(user_new)
        {
            res.status(202).json({user:user_new.username,email:user_new.email})
        }
        else{
            res.status(400);
            throw new Error("Try again")
        }
    // res.status(202).json({message:"user Registered"});
})

const LoginUser = asyncHandler(async(req,res)=>{
    const{email,password} = req.body;
    if(!email || !password)
        {
            res.status(400).json({message:"All fields are mandatory"});
        }
    const check = await users.findOne({email});
    if(check&&(await bcrypt .compare(password,check.password))){
        const accesstoken = jwt.sign({
            check:{
                username:check.username,
                email:check.email,
                id:check.id
            }
        },process.env.ACCESS_WEB_TOKEN,
    {
        expiresIn:"10m"
    });
        res.status(200).json({message:accesstoken});
    }
    else{
        res.status(400).json({message:"Error while validation"})
    }
})

const Currentinfo = asyncHandler(async(req,res)=>{
    res.json(req.check);
})

const datafetch = asyncHandler(async(req,res)=>{
    const user = await users.find();
    res.json(user);
})

module.exports = {registerUser,LoginUser,Currentinfo,datafetch}