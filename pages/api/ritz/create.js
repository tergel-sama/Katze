import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

// POST /api/ritz/create
export default async function handle(req, res) {
  const { title, content } = req.body;
  try {
    const session = await getSession({ req });
    const result = await prisma.ritz.create({
      data: {
        title: title,
        content: content,
        user: { connect: { email: session?.user?.email } },
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}
