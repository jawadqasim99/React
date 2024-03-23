const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();
const {mongoose} = require('mongoose');
const port = 8080;

// DataBase Code
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Data Base is connected!");
}).catch((e)=>{
    console.log("Data base is not connected" , e);
})

//middleware
app.use(express.json());


app.use('/' , require('./authRoutes/authRoutes'))
app.listen(port, ()=>{
    console.log("Server started");
})