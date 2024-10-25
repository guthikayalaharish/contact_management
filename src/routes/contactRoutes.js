// src/routes/contactRoutes.js
const express = require('express');
const { createContact, getContacts, updateContact, deleteContact, uploadContacts } = require('../controllers/contactController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', protect, createContact);
router.get('/', protect, getContacts);
router.put('/:id', protect, updateContact);
router.delete('/:id', protect, deleteContact);
router.post('/upload', protect, uploadContacts);

module.exports = router;
