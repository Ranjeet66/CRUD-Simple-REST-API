const mongoose = require('mongoose');
const mongodbURL = 'mongodb://localhost:27017/CRUDRESTAPI'; 
//const mongodbURL = 'mongodb://0.0.0.0:27017/CRUDRESTAPI
mongoose.connect(mongodbURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db = mongoose.connection;
db.on('connected',()=>{
    console.log('Mongodb Connected Sucessfully');
});
db.on('error',(err)=>{
    console.log('Server Internal Mongodb',err);
});
db.on('diconnected',()=>{
    console.log('Disconnted Mongodb Server');
});
module.exports = db;