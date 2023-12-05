const express = require('express');
const router = express.Router();
const consumentController = require('../controllers/consumentController')

router.get('/consument', consumentController.getAllConsument);

module.exports = router;
