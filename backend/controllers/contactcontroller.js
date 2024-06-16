 const asyncHandler = require('express-async-handler');
 const contacts = require('../models/modelsSchema');
//get all contacts by localhost:5002:api/contacts
const getContacts = asyncHandler(async(req,res)=>{
    const contact = await contacts.find({user_id: req.check.id});
    res.status(200).json(contact)
});
//post all contacts by localhost:5002:api/contacts
const createContacts = asyncHandler(async(req,res)=>{
    console.log("the created account is :",req.body);
    const {name,email,phoneno} = req.body;
    if(!name||!email||!phoneno)
        {
            res.status(400);
            throw new Error("All fields should be filled");
        }
        const contact = await contacts.create({
            name,
            email,
            phoneno,
            user_id: req.check.id
        });
        console.log(contact);
        
    res.status(201).json(contact);
});

//get particular id contacts by localhost:5002:api/contacts/:id
const getContact = asyncHandler(async(req,res)=>{
    const contact = await contacts.findById(req.params.id);
    if(!contact)
        {
            res.status(404);
            throw new Error("Error Contact details not found");
        }
    console.log(contact)
    res.status(200).json(contact);
});

//update  contacts by localhost:5002:api/contacts/:id
const putContacts = asyncHandler(async(req,res)=>{
    const contact = await contacts.findById(req.params.id);
    if(!contact)
        {
            res.status(404);
            throw new Error("Error Contact details not found");
        }
    const updatecontact = await contacts.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updatecontact);
    console.log(updatecontact);
});

//used to delete  contacts by localhost:5002:api/contacts/:id
const deleteContact = asyncHandler(async(req,res)=>{
    const contact = await contacts.findById(req.params.id);
    if(!contact)
        {
            res.status(404);
            throw new Error("Error Contact details not found");
        }
    await contacts.findByIdAndDelete(req.params.id);
    console.log(contact)
    res.status(200).json(contact);
});


module.exports = {getContacts,getContact,createContacts,putContacts,deleteContact}
//making the routes as a private specifier 