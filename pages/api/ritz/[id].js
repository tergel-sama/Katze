import prisma from "../../../lib/prisma";

// Get all ritz
export default async function handle(req, res) {
  try {
    const { id } = req.query;
    const result = await prisma.ritz.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        user: true,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}
