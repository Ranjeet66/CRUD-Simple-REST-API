const express = require('express');
const routes = express.Router();
const User = require('../model/usermodel');

//Create a User – Accepts name, email, and age, then stores them in a database.
routes.post('/signUp', async (req, res) => {
    try {
        const userdata = req.body;

        // Check if the email already exists
        const existingUser = await User.findOne({ email: userdata.email });
        if (existingUser) {
            console.log('Duplicate Email ID Not Allowed:', userdata.email);
            return res.status(409).json({ responseCode: 409, responseMessage: 'Email already exists', existingUser: existingUser });
        }

        // Create a new user
        const newUser = new User(userdata);
        const response = await newUser.save();
        console.log('User Created Successfully:', response);
        return res.status(201).json({ responseCode: 201, responseMessage: 'User Created Successfully', response: response });
    } catch (error) {
        console.log('Internal Server Error:', error);
        res.status(500).json({ reponseCode: 500, responseMessage: 'Internal Server Error', error: error.message });
    }
});



// Retrieve All Users - Returns a list of users
routes.get('/login', async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users from MongoDB
        if (users.length === 0) {
            console.log('No users found in the database.');
            return res.status(404).json({ responseCode: 404, responseMessage: 'No users found in the database', data: users });
        }
        console.log('Fetched All Users Data:', users); // Log response in the backend
        res.status(200).json({ responseCode: 200, responseMessage: 'Users retrieved successfully', data: users });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ reponseCode: 500, responseMessage: 'Internal Server Error', error: error.message });
    }
});



// Retrieve a Single User – Fetches a user by ID.
routes.get('/login/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if (!user) {
            console.log('Error: User not found');
            return res.status(404).json({ responseCode: 404, responseMessage: 'User not found. Please check the ID', data: user });
        }

        console.log('Success: Retrieved User by ID:', user);
        res.status(200).json({ responseCode: 200, responseMessage: 'User retrieved By UserId successfully', data: user });
    } catch (error) {
        console.error('Internal Server Error:', error);
        res.status(500).json({ reponseCode: 500, responseMessage: 'Internal Server Error', error: error.message });

    }
});


// Update a User – Updates user details using an ID.
routes.put('/login/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const newdata = req.body;

        const response = await User.findByIdAndUpdate(userId, newdata, {
            new: true, // Return the updated document
            runValidators: true, // Run Mongoose validation
        });

        if (!response) {
            console.log('User not found. Please check the provided ID', response);
            return res.status(404).json({ reponseCode: 404, responseMessage: 'User not found. Please check the provided ID', updatedUser: response });
        }
        console.log('User Updated Successfully:', response);
        res.status(200).json({ reponseCode: 200, responseMessage: 'User details updated successfully', updatedUser: response });
    } catch (error) {
        console.error('Internal Server Error:', error);
        res.status(500).json({ reponseCode: 500, responseMessage: 'Internal Server Error', error: error.message });

    }
});


// Delete a User – Removes a user from the database using an ID.
routes.delete('/login/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const response = await User.findByIdAndDelete(userId);

        if (!response) {
            console.log('User not found. Cannot delete');
            return res.status(404).json({ responseCode: 404, responseMessage: 'User not found. Cannot delete', deletedUser: response });
        }

        console.log('User Deleted Successfully', response);
        return res.status(200).json({ responseCode: 200, responseMessage: 'User deleted successfully', deletedUser: response });

    } catch (error) {
        console.log('Internal Server Error', error);
        return res.status(500).json({ responseCode: 500, responseMessage: 'Internal Server Error', error: error.message });
    }
});

module.exports = routes;