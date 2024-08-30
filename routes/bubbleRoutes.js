const express = require('express');
const { createNewBubble, } = require('../controllers/bubbleController');
const router = express.Router();


router.post('/create-bubble', createNewBubble);


module.exports = router;
