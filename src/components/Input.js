import { useState } from "react";
import style from "@/styles/Input.module.css";
import axios from "axios";
import PacmanLoader from "react-spinners/PacmanLoader";
export default function InputSelection() {
  const [url, SetUrl] = useState("");
  const [data, SetData] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  async function PostUrl() {
    try {
      const res = await axios.post("/api/link", {
        url: url,
      });
      SetData(res.data.urlCurta);
      setErr(null)
    } catch (error) {
      setErr(error.response.data.message)
    }
  }

  async function Enviar(e) {
    e.preventDefault();

    setLoading(true);
    setTimeout(() => {
      PostUrl();
      setLoading(false);
      SetUrl("");
      e.target.reset();
    }, 3000);
  }

  return (
    <>
      <div className={style.Conteiner}>
        <form onSubmit={Enviar}>
          <input
            type="text"
            placeholder="Colar url aqui..."
            onChange={(urlText) => SetUrl(urlText.target.value)}
            style={{ touchAction: 'manipulation' }}

          />

          <div className={style.ConteinerBtn}>
            <p>
              {loading ? (
                <PacmanLoader
                  color={"#8257E5"}
                  loading={loading}
                  cssOverride={override}
                  size={10}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                err ? err : data
              )}
            </p>
            <input type="submit" value="Encurtar"></input>
          </div>
        </form>
      </div>
    </>
  );
}
