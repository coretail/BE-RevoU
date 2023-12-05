const prisma = require("../config/prisma");

async function getAllConsument() {
    try {
        const consument = await prisma.consument.findMany()
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getAllConsument
}