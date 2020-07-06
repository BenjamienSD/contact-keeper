// contains login, authentication route.
const express = require('express');
const router = express.Router();
const User = require('../models/UserModel');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

// @route   GET api/auth
// @desc    Get (validate) logged in user
// @access  Private
router.get('/', (req, res) => {
  res.send('Get logged in user');
});

module.exports = router;

// @route   POST api/auth
// @desc    Authenticate user & get token
// @access  Public
router.post(
  '/',

  [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    // return errors if there are any
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    // check for valid email and password
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Incorrect password' });
      }

      // create payload: object to be sent in the token
      const payload = {
        user: {
          id: user.id,
        },
      };

      // Synchronously sign the given payload into a JSON Web Token string payload
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 36000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error...(auth.js)');
    }
  }
);

module.exports = router;
