const express = require('express');
const { handleSignUp, fetchAllUsers } = require('../controllers/userController');
const router = express.Router();


router.post('/create-user', handleSignUp);
router.get('/get-all-user', fetchAllUsers);

module.exports = router;



