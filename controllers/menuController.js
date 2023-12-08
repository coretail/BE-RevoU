const menuService = require('../sevices/menuServices');

async function getAllMenu(req, res) {
    const menu = await menuService.getAllMenu();
    res.json(menu)
}

module.exports = {
    getAllMenu
}