const consumentService = require('../sevices/consumentServices');

async function getAllConsument(req, res) {
    const consument = await consumentService.getAllConsument();
    res.json(consument)
}

async function createConsument(req, res) {
    const consument = req.body;
    const createdConsument = await consumentService.createConsument(consument)
    res.status(201).json(createdConsument);
}

module.exports = {
    getAllConsument,
    createConsument
}
