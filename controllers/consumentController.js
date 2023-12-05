const consumentService = require('../sevices/consumentServices');

async function getAllConsument(req, res) {
    const consument = await consumentService.getAllConsument();
    res.json(consument)
}

module.exports = {
    getAllConsument
}