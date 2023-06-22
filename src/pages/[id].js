import axios from "axios";

export default function TagId() {
  return null;
}

export async function getServerSideProps({ query, res, req }) {
  const { id } = query;

  try {
    let baseUrl = "";
    if (req.headers.host.includes("localhost")) {
      baseUrl = "http://localhost:3000";
    } else {
      // Defina aqui a URL de produção ou externa desejada
      baseUrl = "https://linksnip.com.br/";
    }

    const response = await axios.get(`${baseUrl}/api/link/${id}`);
    
    const { urlOriginal } = response.data;

   

    res.writeHead(302, { Location: urlOriginal });
    res.end();

    return {
      props: {},
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
}