const express = require('express')
const router = express.Router()
const {authController} = require('../controllers/authControllers')


router.get('/auth', authController);




module.exports = router;