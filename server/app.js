const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const dbConnect = require('./config/database');

const userRoute = require('./routes/userRoute')

const PORT = process.env.PORT || 4000

//connect db
dbConnect();  

//add middlewares
app.use(express.json()) 
app.use(cors())     
app.use('/api/v1',userRoute)    

//server listen
app.listen(PORT, ()=>{
    console.log(`Server is running at port no ${PORT}`);
})