const consumentService = require('../sevices/consumentServices');

async function getAllConsument(req, res) {
    const consument = await consumentService.getAllConsument();

    res.json(consument);
};

async function createConsument(req, res){
    const consument = req.body;

    const createConsument = await consumentService.createConsument(consument);
    res.status(201).json(createConsument);
}

module.exports = {
    getAllConsument,
    createConsument
};