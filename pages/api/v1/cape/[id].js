import prisma from "../../../../lib/prisma";

export default async function handle(req, res) {
  const capeId = req.query.id;

  if (req.method === "GET") {
    handleGET(capeId, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}

async function handleGET(capeId, res) {
  const cape = await prisma.capes.findFirst({
      where: {id: capeId}
  })
  return res.status(200).json(cape);
}
