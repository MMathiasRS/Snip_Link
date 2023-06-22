import db from "../firebase";
import { collection, getDocs, setDoc, doc, addDoc } from "firebase/firestore";

export default async function Post(req, res) {
  if (req.method === "POST") {
    const {
      title,
      content,
      author,
      category,
      tags,
      publishDate,
      publishStatus,
      featuredImg,
    } = req.body;

    const newPost = {
      title: title,
      content: content,
      author: author,
      category: category,
      tags: tags,
      publishDate: publishDate,
      publishStatus: publishStatus,
      featuredImg: featuredImg,
    };
    try {
      if (
        title !== "" &&
        content !== "" &&
        author !== "" &&
        category !== "" &&
        publishDate !== ""
      ) {
        await setDoc(doc(db, "Blog", title), newPost);
        res.status(202).json({ message: "Sucesso" });
      } else {
        res.status(404).json({ message: "Falha" });
      }
    } catch {
      res.status(500).json({ message: "Erro no servidor" });
    }
  } else {
    if (req.method === "GET") {
      const data = [];
      const querySnap = await getDocs(collection(db, "Blog"));
      querySnap.forEach((doc) => {
        const docData = doc.data();
        const DocId = {id:doc.id,...docData}
        data.push(DocId);
      });
      res.json(data);
    }
  }
}
