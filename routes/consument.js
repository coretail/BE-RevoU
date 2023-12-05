const express = require('express');
const router = express.Router();
const consumentController = require('../controllers/consumentController').default

router.get('/consument', consumentController.getAllConsument);

module.exports = router;
