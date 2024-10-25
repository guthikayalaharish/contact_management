const db = require('../models');
const User = db.User; // Ensure you're getting the User model

// Login user function
exports.loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Basic validation
        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        // Find user by username
        const user = await User.findOne({ where: { username } });

        // Check if user exists and password matches (use hashing in a real app)
        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Optionally, send back user info (omit password)
        res.status(200).json({ message: 'Login successful', user: { id: user.id, username: user.username } });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
