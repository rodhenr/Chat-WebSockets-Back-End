const express = require("express");
const WebSocket = require("ws");
const http = require("http");
const port = 8080;

const app = express();

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    console.log(`Recebi a mensagem: "${data}"`);
    ws.send("Olá, mensagem recebida!");
  });

  ws.send("Servidor WebSocket iniciado!");
});

server.listen(port, () => {
  console.log(`Server iniciado na porta ${port}`);
});
