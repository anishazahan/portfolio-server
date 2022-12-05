const express = require('express')
const app = express()
const cors = require('cors');
require ("dotenv").config();
const mongoose = require("mongoose");
const project = require('./model/model')


const port = process.env.PORT || 5000;

       mongoose.connect(process.env.DB_URL)
       .then(()=>{
        console.log("connect db")
       })
       .catch((error)=>{
        console.log(error);
       })
   


app.use(cors());
app.use(express.json());


const userRouter = require("./route/project.route")

app.use('/api',userRouter);



app.listen(port, (req,res) => {
    console.log(`Example app listening on port ${port}`)
    // res.send("connected")
  })