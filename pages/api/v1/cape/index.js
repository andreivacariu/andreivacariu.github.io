import { PrismaClient } from ".prisma/client"

const prisma = new PrismaClient()


export default async function (req, res) {
    const { method } = req;

    if (method === "GET") {
        const data = await prisma.capes.findMany()
        return res.status(200).json(data)
    }

}