const express = require('express');
const dotenv = require('dotenv');
const { message } = require('antd');
const connectDB = require('./config/dbcoonection')
const errorhandler = require("./middleware/errorhandling");
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(errorhandler);
const PORT =  process.env.PORT || 5000;

app.use("/api/contacts",require("./routes/contactmanager"));
app.use("/api/users",require("./routes/userroutes"));

app.listen(PORT,()=>console.log(`Server running at ${process.env.PORT}`));