// contains CRUD functionality
// Create Read Update Delete

const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    Get the contacts belonging to logged in user
// @access  Private
router.get('/', (req, res) => {
  res.send('Get the contacts belonging to logged in user');
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
