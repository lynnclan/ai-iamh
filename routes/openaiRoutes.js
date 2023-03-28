const express= require('express');
const {generateimage}  = require('../controllers/openaiController.js');
const router = express.Router();

router.post('/generateimage', generateimage);

module.exports = router;