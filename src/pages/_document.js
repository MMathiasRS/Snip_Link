import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>
            LinkSnip - O Melhor Encurtador de Links | Create Next App
          </title>
          <meta
            name="description"
            content="O LinkSnip é o encurtador de links definitivo para otimizar suas estratégias de marketing digital. Crie links curtos e personalizados para melhorar a experiência do usuário. Experimente o LinkSnip hoje mesmo!"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          />
          <link
            rel="icon"
            href="https://media.giphy.com/media/VgCDAzcKvsR6OM0uWg/giphy.gif"
          />
        </Head>
        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
