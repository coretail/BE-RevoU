const express = require('express');
const router = express.Router();
const consumentController = require('../controllers/consumentController')

router.get('/consument', consumentController.getAllConsument);
router.post('/consument', consumentController.createConsument);

module.exports = router;
