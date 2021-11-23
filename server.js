const express = require("express");
const customerWallets = require("./api/data/customer-wallets");
const app = express();

console.log(customerWallets);

app.use(express.json());

const port = 8000;

app.get("/api", (request, response) => {
  response.json(customerWallets);
});

app.get("/", (request, response) => {
  response.send(console.log(`Servidor rodando na porta ${port}`));
});

app.listen(port);
