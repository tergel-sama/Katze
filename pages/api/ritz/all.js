import prisma from "../../../lib/prisma";

// Get all ritz
export default async function handle(req, res) {
  try {
    const skip = parseInt(req.query.page) * 5;
    const count = await prisma.ritz.count();
    const result = await prisma.ritz.findMany({
      skip,
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: true,
      },
    });
    res.status(200).json({ count, ritz: result });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}
