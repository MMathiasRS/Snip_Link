import Styles from "@/styles/Main.module.css";
import TypewriterComponent from "typewriter-effect";
export default function Main() {
  return (
    <>
      <div className={Styles.Container}>
        <div className={Styles.mob}>
          <img
            src="https://media.giphy.com/media/VgCDAzcKvsR6OM0uWg/giphy.gif"
            width="60"
          />
          <h1>
            Sua melhor escolha para
            <span>
              <br />
              links curtos e engajamento
            </span>
          </h1>
          <p>Aviso: Os links serão apagados automaticamente em 31 dias.</p>
          <p></p>
          <TypewriterComponent
            options={{
              strings: ["Seja", "Bem-Vindo!!!"],
              autoStart: true,
              loop: true,
            }}
          ></TypewriterComponent>
        </div>
      </div>
    </>
  );
}
