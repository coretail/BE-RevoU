const prisma = require("../config/prisma")

async function getAllMenu() {
    try {
        const menu = await prisma.menu.findMany()
    return menu;
    } catch (err) {
        throw err;
    }

} 

module.exports = {
    getAllMenu
}