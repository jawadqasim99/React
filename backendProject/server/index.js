const express = require('express')
const dotenv = require('dotenv').config();
const cors = require('cors');



const app = express(); 
const port = 8000; 
app.use('/' , require('./router/authUser'));
app.listen(port , ()=>{
console.log("Server Start!!");
})

