import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import db from "../firebase";

export default async function ShotGet(req, res) {
  if (req.method === "GET") {
    const { code } = req.query;

    try {
      const docRef = collection(db, "Links");
      const snapshot = await getDocs(docRef);

      let urlOriginal = null;
      let countLink = 0;
      let docToUpdate = null;
      let urlCurta = null;
      
      snapshot.forEach((doc) => {
        const data = doc.data();

        const shortUrl = data.urlCurta;

        const urlCode = shortUrl.substring(shortUrl.lastIndexOf("/") + 1);

        if (code === urlCode) {
          urlOriginal = data.urlOriginal;
          urlOriginal = data.urlOriginal;
          urlCurta = data.urlCurta;
          countLink = data.countLink;
          docToUpdate = doc.ref;
          console.log(countLink);
        }
      });

      if (urlOriginal) {
        const novoCountLink = countLink + 1;
        await updateDoc(docToUpdate, { countLink: novoCountLink });
        return res.json({ urlOriginal, countLink,urlCurta});
      } else {
        return res.status(404).json({ error: "Código não encontrado" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao processar a requisição" });
    }
  }
}
