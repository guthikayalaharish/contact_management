const express = require('express');
const router = express.Router();
const Contact = require('../models/contact'); // Ensure the path is correct

// Get all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.findAll();
    res.json({ message: 'Returning all contacts', contacts });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving contacts', error });
  }
});

// Add other contact routes as needed...

module.exports = router;
