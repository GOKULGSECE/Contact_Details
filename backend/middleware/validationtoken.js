const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');


const validationtoken = asyncHandler(async(req,res,next)=>{
    let token;
    let auth = req.headers.Authorization||req.headers.authorization;
    if(auth && auth.startsWith("Bearer"))
        {
            token = auth.split(" ")[1];
            jwt.verify(token, process.env.ACCESS_WEB_TOKEN,(err,decoded)=>{
                if(err){
                    res.status(400);
                    throw new Error("User not found or authorized");
                }
                console.log(decoded);
            })
        }
});

module.exports = validationtoken;