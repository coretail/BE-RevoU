const prisma = require("../config/prisma");

async function getAllConsument() {
    try {
        const consument = await prisma.consument.findMany()
        return consument;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getAllConsument
}