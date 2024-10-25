// src/app.js

const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user'); // Ensure this import is present
const db = require('./models'); // Import your models

const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Use user routes
app.use('/api/users', userRoutes);

// Database connection and table creation
db.sequelize.sync()
    .then(() => {
        console.log("Database & tables created!");
    })
    .catch((error) => {
        console.error("Error creating database & tables:", error);
    });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
