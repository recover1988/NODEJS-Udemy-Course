const express = require("express");
const { errorLogs, handlerError } = require("./middleware/error.handler");

const apiRouter = require("./server");

const app = express();

const port = 3000;

app.use(express.json()); // middleware para convertir a JSON

// req -> la request o peticion
// res -> responds o respuesta
// hay q usar api y version para que el usuario no se quede sin info si estamos acutaliznaod o modificando la api

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

apiRouter(app);

//middleware
app.use(handlerError);
app.use(errorLogs);

app.listen(port, (req, res) => {
  console.log("Escuchando en el puerto: ", port);
});
