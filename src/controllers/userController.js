// src/controllers/userController.js

const db = require('../models');
const User = db.User; // Ensure you're getting the User model

exports.registerUser = async (req, res) => {
    // Your register logic here
};

exports.loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Basic validation
        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        const user = await User.findOne({ where: { username } });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Here you would check the password (this is just an example)
        // If you are hashing passwords, use bcrypt to compare them
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Return success message or user data
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

