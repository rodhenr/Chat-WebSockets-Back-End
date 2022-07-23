const express = require("express");
const port = 8080;

const app = express();

app.listen(port, () => {
  console.log(`Server iniciado na porta ${port}...`);
});

module.exports = app;
