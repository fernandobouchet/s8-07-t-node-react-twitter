import { getSession } from "next-auth/react";

const handler = async (req, res) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  return res.status(200).json({ message: "Authorized", user: session });
};

export default handler;
