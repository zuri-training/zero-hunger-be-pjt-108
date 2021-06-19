const express = require('express')
const { check, body, validationResult } = require('express-validator');

// setUp Router 
const router = express.Router()

router.post('/api/v1/auth/signup')