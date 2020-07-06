// contains CRUD functionality
// Create Read Update Delete

const express = require('express');
const router = express.Router();
const User = require('../models/UserModel');
const Contact = require('../models/ContactModel');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

// @route   GET api/contacts
// @desc    Get the contacts belonging to logged in user
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error...');
  }
});

// @route   POST api/contacts
// @desc    Add a contact for the logged in user
// @access  Private
router.post('/', (req, res) => {
  res.send('Add a contact for the logged in user');
});

// @route   PUT api/contacts/:id
// @desc    Edit a contact for the logged in user
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Edit a contact for the logged in user');
});

// @route   DELETE api/contacts/:id
// @desc    Delete a contact for the logged in user
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete a contact for the logged in user');
});

module.exports = router;
