const { Contact } = require('../models/contact'); // Ensure the path to Contact model is correct

// Get all contacts
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.findAll();
    return res.status(200).json(contacts);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching contacts', error });
  }
};

// Create a new contact
const createContact = async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    const newContact = await Contact.create({
      name,
      email,
      phone,
    });

    return res.status(201).json({ message: 'Contact created successfully', newContact });
  } catch (error) {
    return res.status(500).json({ message: 'Error creating contact', error });
  }
};

// Update a contact
const updateContact = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;

  try {
    const contact = await Contact.findByPk(id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    contact.name = name || contact.name;
    contact.email = email || contact.email;
    contact.phone = phone || contact.phone;

    await contact.save();
    return res.status(200).json({ message: 'Contact updated successfully', contact });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating contact', error });
  }
};

// Delete a contact
const deleteContact = async (req, res) => {
  const { id } = req.params;

  try {
    const contact = await Contact.findByPk(id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    await contact.destroy();
    return res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting contact', error });
  }
};

module.exports = {
  getAllContacts,
  createContact,
  updateContact,
  deleteContact,
};
