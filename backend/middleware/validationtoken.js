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
                    throw new Error("User not found or unauthorized");
                }
                req.check = decoded.check;
                next();
                console.log(decoded);
            })
            if(!token)
                {
                    res.status(400);
                    throw new Error("TOken is expired or unauthorized");
                }
        }
});

module.exports = validationtoken;