const http = require("http");

const PORT = 8000; // PORTA DO SERVIDOR
// CRIANDO O SERVIDOR HTTP
const servidor = http.createServer((req, res) => {
  // console.log(req.url, req.method);
  if (req.url === "/") {
    res.writeHead(404, "Content-Type", "text/html");
    res.write("<h1>Olá, home page!</h1>");
    res.end();
  } else if (req.url === "/sobre") {
    res.writeHead(404, "Content-Type", "text/html");
    res.write("<h1>Saiba mais...</h1>");
    res.end();
  }
});
// INICIANDO O SERVIDOR NA PORTA 8000
servidor.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
