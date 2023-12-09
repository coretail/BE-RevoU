const prisma = require("../config/prisma");

async function getAllConsument() {
    try {
        const consument = await prisma.consument.findMany()
        return consument;
    } catch (err) {
        throw err;
    }
}

async function createConsument(consument) {
    
    try {
        const { name, cake, cakeSum, address } = consument
        return await prisma.consument.create({
            data: {
                name,
                cake,
                cakeSum: Number(cakeSum),
                address
            }
        });
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getAllConsument,
    createConsument
}