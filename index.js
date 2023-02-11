const express = require("express");

const apiRouter = require("./server");

const app = express();

const port = 3000;

// req -> la request o peticion
// res -> responds o respuesta
// hay q usar api y version para que el usuario no se quede sin info si estamos acutaliznaod o modificando la api

app.get("/", (req, res) => {
  res.send("Hola mundo desde ruta raiz");
});

apiRouter(app);

app.listen(port, (req, res) => {
  console.log("Escuchando en el puert: ", port);
});
