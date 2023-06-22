import Styles from "@/styles/Main.module.css";
import TypewriterComponent from "typewriter-effect";
import { useState } from "react";
import style from "@/styles/Input.module.css";
import axios from "axios";
import PacmanLoader from "react-spinners/PacmanLoader";
import Style from "@/styles/Sobre.module.css";
export default function Desempenho() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [countLink, setCountLink] = useState(0);
  const [link, setLink] = useState("");

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  async function postUrl() {
    try {
      const res = await axios.get(`/api/link/${url}`);
      setData(res.data.urlOriginal);
      setLink(res.data.urlCurta);
      setCountLink(res.data.countLink);

      setError(null);
    } catch (error) {
      setError("erro aqui");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    postUrl();
    setLoading(false);
    setUrl("");
    e.target.reset();
  }

  return (
    <>
      <div className={Styles.Container}>
        <div className={Styles.mob}>
          <img
            src="https://media.giphy.com/media/VgCDAzcKvsR6OM0uWg/giphy.gif"
            width="60"
          />
          <h1>
            Análise de Desempenho:
            <span>
              <br />
              Monitorando a Eficiência do Seu Link Encurtado
            </span>
          </h1>
          <p>
            Aviso: Colocar o codigo final do Link depois da '/'<br></br>
            <br></br> ou retira https:// <br></br>
            <br></br> Exemplo: /AqvgnjxCU
          </p>
         
        </div>

        <div className={style.Conteiner}>
          <form onSubmit={handleSubmit} style={{ paddingTop: 20 }}>
            <input
              type="text"
              placeholder="Colar url aqui..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              style={{ touchAction: "manipulation" }}
            />

            <div className={style.ConteinerBtn}>
              <input type="submit" value="Encurtar" />
            </div>
          </form>
        </div>
        <p>Link Original: {data}</p>
        <p>Link Encurtador: {link}</p>
        <p>Numero de Redirecionamento: {countLink}</p>
      </div>
      <div className={Style.ContainerMain}>
        <div>
          <div className={Style.Sobre}>
            <span>
              <h3 style={{ textAlign: "center" }}>
                Bem-vindo à nossa página dedicada à análise de desempenho do
                link encurtador!
              </h3>
            </span>
            <hr></hr>
            <p>
              Nesta plataforma, oferecemos a você as ferramentas e informações
              necessárias para monitorar e aprimorar o desempenho dos seus links
              encurtados. Sabemos que o uso de um link encurtador pode ser uma
              estratégia poderosa para compartilhar conteúdo, rastrear cliques e
              medir o engajamento do seu público. No entanto, compreender como
              esses links estão performando e como podem ser otimizados é
              fundamental
            </p>
            <p>
              Nosso objetivo é fornecer a você uma visão abrangente e detalhada
              do desempenho dos seus links encurtados. Com uma interface
              intuitiva e fácil de usar, nossa plataforma permite que você
              acompanhe métricas-chave, identifique padrões e tome decisões
              informadas para maximizar os resultados das suas campanhas de
              marketing.
            </p>

            <p>
              Através da nossa plataforma de análise de desempenho, você poderá
              acessar estatísticas em tempo real. Isso significa que você poderá
              acompanhar o número de cliques, a localização geográfica dos seus
              visitantes e os dispositivos que eles estão usando para acessar
              seus links. Essas informações em tempo real permitem que você
              tenha uma visão atualizada do engajamento do seu público-alvo e
              tome medidas imediatas, se necessário.
            </p>

            <p>
              Além disso, oferecemos a opção de criar links personalizados,
              permitindo que você atribua nomes significativos a cada link
              encurtado. Dessa forma, você poderá analisar o desempenho de cada
              link individualmente e comparar diferentes estratégias de
              encurtamento.
            </p>

            <p>
              Nossa plataforma também fornece gráficos e relatórios detalhados
              para facilitar a visualização e interpretação dos dados. Com essas
              informações em mãos, você poderá identificar tendências, períodos
              de maior atividade e picos de tráfego, o que o ajudará a otimizar
              suas ações de divulgação.
            </p>

            <p>
              Além disso, nossa plataforma pode ser integrada a outras
              ferramentas de análise e gerenciamento que você já utiliza. Isso
              permite que você potencialize sua análise combinando dados de
              diferentes fontes e obtenha uma visão holística do desempenho dos
              seus links.
            </p>

            <p>
              Por fim, oferecemos opções avançadas de segmentação para ajudá-lo
              a direcionar suas estratégias de marketing de forma mais eficaz.
              Com recursos de segmentação, você pode entender melhor o
              comportamento do seu público e personalizar suas ações de acordo
              com suas necessidades específicas.
            </p>

            <p>
              Não perca mais tempo! Junte-se a nós e tenha controle completo
              sobre o desempenho dos seus links encurtados. Registre-se
              gratuitamente em nossa plataforma e comece a otimizar suas
              campanhas, rastrear seu desempenho e impulsionar seus resultados.
            </p>

            <p>
              Seja bem-vindo à análise de desempenho do link encurtador, onde o
              sucesso do seu marketing está ao seu alcance!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
