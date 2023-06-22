import db from "../firebase";
import { collection, getDoc, doc } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const postId = req.query.code;

    try {
      const postDocRef = doc(db, "Blog", postId);
      const postDocSnap = await getDoc(postDocRef);

      if (postDocSnap.exists()) {
        const postData = postDocSnap.data();
        res.status(200).json(postData);
      } else {
        res.status(404).json({ message: "Post não encontrado" });
      }
    } catch {
      res.status(500).json({ message: "Erro no servidor" });
    }
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
}







