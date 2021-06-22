const express = require('express')
const { check, body, validationResult } = require('express-validator');
const { signUp } = require('../controllers/authController');

// setUp Router 
const router = express.Router()

router.post('/signup', signUp)

module.exports = router