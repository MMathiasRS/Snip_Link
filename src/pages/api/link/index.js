import { addDoc, collection } from "firebase/firestore";
import db from "@/pages/api/firebase";
import shortid from "shortid";
import requestIp from "request-ip";

const rate_Limit_time = 1000 * 60 * 60 * 24;
const max_requests = 3;

const requestCountMap = new Map();

export default async function Shoten(req, res) {
  if (req.method === "POST") {
    const { url } = req.body;

    const Shortid = shortid.generate();
    const urlLink = `https://www.linksnip.com.br/${Shortid}`;

    const ip = requestIp.getClientIp(req);
    let requestCount = requestCountMap.get(ip) || 0;

    if (requestCount >= max_requests) {
      console.log(requestCount);
      return res.status(429).json({
        message: "Limite de requisições atingido. Tente novamente mais tarde.",
      });
    }

    try {
      if (url !== "") {
        requestCount += 1; 
        requestCountMap.set(ip, requestCount); 
        console.log(requestCountMap);
        const docRef = await addDoc(collection(db, "Links"), {
          urlOriginal: url,
          urlCurta: urlLink,
          urlData: new Date(),
          countLink: 0,
        });

        const response = {
          urlCurta: urlLink,
          countLink: 0,
        };

        res.status(200).json(response);
      } else {
        res.status(404).json({ message: "Url inválida" });
      }
    } catch {
      res.status(500).json({ message: "Servidor off" });
    }
  }
}

setInterval(() => {
  requestCountMap.clear();
}, rate_Limit_time);
