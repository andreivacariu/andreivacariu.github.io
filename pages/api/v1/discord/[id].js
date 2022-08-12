import prisma from "../../../../lib/prisma";

export default async function handle(req, res) {
  const userId = req.query.id;

  if (req.method === "GET") {
    handleGET(userId, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}

async function handleGET(userId, res) {
  const users = await prisma.users.findMany();
  const user = users.filter((x) => x.discordID == userId);
  if (!user) {
      
  }
  return res.status(200).json(user[0]);
}
