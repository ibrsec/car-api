"use strict";


/* --------------------------------- imports -------------------------------- */

require('dotenv').config()
require('express-async-errors')
const express= require('express')

/* ----------------------------------- app ---------------------------------- */
const app= express();


/* ------------------------------- middlewares ------------------------------- */
/* ------------------------------- db connection ------------------------------- */
const dbConnect= require('./src/config/dbConnection');
dbConnect();

  

/* ------------------------------- routes ------------------------------- */
app.all("/",(req,res)=>{
    res.send('welcome')
})

app.use("/cars", require('./src/routes/carRoute'))

/* ------------------------------- errorhandler ------------------------------- */
/* ------------------------------- listen port ------------------------------- */



const PORT= process.env.PORT;
app.listen(PORT,()=>console.log('server is running on ',PORT))

 