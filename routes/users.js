// contains the register route
const express = require('express');
const router = express.Router();
const User = require('../models/UserModel');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post(
  '/',
  [
    check('name', 'Please add a name').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // extract name, email and password from the request body
    const { name, email, password } = req.body;

    try {
      // check if user exists by checking if email exists
      let user = await User.findOne({ email });

      // if user exist return error
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      // create new user
      user = new User({
        name,
        email,
        password,
      });

      // before we add a user to the database we have to encrypt the password using bcrypt
      // Asynchronously generates a salt, defaults to 10 rounds.
      const salt = await bcrypt.genSalt();

      // create hash
      user.password = await bcrypt.hash(password, salt);

      // save user
      await user.save();

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

      // error handling
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error...');
    }
  }
);

module.exports = router;
