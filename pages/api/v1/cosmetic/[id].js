import prisma from "../../../../lib/prisma";

export default async function handle(req, res) {
  const cosmeticId = req.query.id;

  if (req.method === "GET") {
    handleGET(cosmeticId, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}

async function handleGET(cosmeticId, res) {
  const cosmetic = await prisma.cosmetics.findFirst({
      where: {id: cosmeticId}
  })
  return res.status(200).json(cosmetic);
}
