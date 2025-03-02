const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./dbConnection/db');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("Backend Developer Intern Assignment Develop a Simple REST API!");
    
    });

const userRoutes = require('./Routes/userRouter');
app.use('/user',userRoutes);

app.listen(PORT,(err,res)=>{
    if (err) {
        console.log('Internal Server Error',err);
    } else {
        console.log('Server is Runing on PORT',PORT);
    }
});



