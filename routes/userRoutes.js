const express = require('express');
const { handleSignUp, handleLogin } = require('../controllers/userController');
const router = express.Router();


router.post('/create-user', handleSignUp);
router.post('/sign-in', handleLogin);

module.exports = router;



