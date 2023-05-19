import { getSession } from "next-auth/react";
import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  try {
    const session = await getSession({ req });

    if (!session || !session.user) {
      res.status(401).json({ error: "Usuario no autenticado." });
      return;
    }
    const { age } = req.body;

    const client = await clientPromise;
    const db = client.db("twitter-test");

    const user = await db
      .collection("users")
      .findOne({ email: session.user.email });
    console.log(user);
    if (user) {
      await db
        .collection("users")
        .updateOne({ _id: user._id }, { $set: { age: age } });

      res
        .status(200)
        .json({ message: "Edad guardada exitosamente en la base de datos." });
    } else {
      res
        .status(404)
        .json({ error: "No se encontró el usuario en la base de datos." });
    }
  } catch (error) {
    console.error("Error al guardar la edad en la base de datos:", error);
    res
      .status(500)
      .json({ error: "Error al guardar la edad en la base de datos." });
  }
}
