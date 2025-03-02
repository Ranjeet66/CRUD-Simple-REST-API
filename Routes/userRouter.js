const express = require('express');
const routes = express.Router();
const User = require('../model/usermodel');

//Create a User – Accepts name, email, and age, then stores them in a database.
routes.post('/signUp',async(req,res)=>{
    try {
    const userdata = req.body;
    const newUser = new User(userdata);
    const response = await newUser.save();
    console.log('User Created Successfully', response);
    res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal Server Error'});
    }
});

//Retrieve All Users – Returns a list of users.
routes.get('/login',async(req,res)=>{
try {
    const getdata = await User.find();
    console.log('Fetched All Users Data', getdata);
    res.status(200).json(getdata);
} catch (error) {
    console.log(error);
    res.status(500).json({error:'Internal Server Error'})
    
}
});

//Retrieve a Single User – Fetches a user by ID.
routes.get('/login/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if (!user){
        return res.status(404).json({ error: 'User not found' });
        }
        console.log('Find User By ID Data Successfully:', user);
        res.status(200).json(user);
      }catch (error){
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//Update a User – Updates user details using an ID.
 routes.put('/login/:id',async(req,res)=>{
    try {
     const userId = req.params.id;
     const newdata = req.body;
     const response = await User.findByIdAndUpdate(userId,newdata,{
         new:true, // Return the updated document
         runValidators: true, // Run Mongoose validation
     });
     if(!response){
         return res.status(404).json({ error: 'User not found' });  
     }
     console.log('User Updated Successfully', response);
     res.status(200).json(response);
 
    } catch (error) {
     console.log(error);
     res.status(500).json({error:'Internal Server Error'});
    }
 });
 
 //Delete a User – Removes a user from the database using an ID.
 routes.delete('/login/:id',async(req,res)=>{
     try {
         const userId = req.params.id;
         const response = await User.findByIdAndDelete(userId);
         console.log('User Deleted Successfully', response);
         if(!response){
             return res.status(404).json({ error: 'User not found' });
         }else{
             res.status(200).json(response);
         }
 
     } catch (error) {
         console.log(error);
         res.status(500).json({error:'Internal Server Error'});
     }
 });
module.exports = routes;