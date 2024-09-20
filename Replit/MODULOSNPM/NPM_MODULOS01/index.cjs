// CRIAR O SERVIDOR
const express = require("express");
const app = express();
const PORT = 3333;

// CRIAR ROTAS
app.get("/", (req, res) => {
  res.sendFile(./public/index.html);
});

// RODAR SERVIDOR NUMA DADA PORTA
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta $(PORT)`);
});
