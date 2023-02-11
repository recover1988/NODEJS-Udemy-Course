const express = require("express");

const app = express();

const port = 3000;

// req -> la request o peticion
// res -> responds o respuesta
// hay q usar api y version para que el usuario no se quede sin info si estamos acutaliznaod o modificando la api

app.get("/", (req, res) => {
  res.send("Hola mundo desde ruta raiz");
});

app.get("/api/v1/help", (req, res) => {
  res.status(200).send("Hola desde help");
});

// params -> /:id
app.get("/products/:id", (req, res) => {
  console.log(req.params.id);
  const { id } = req.params;
  res.json({
    id,
    name: "teclado",
    price: 2000,
    category: "tecnology",
  });
});

// limit -> registro numerico positivo, numero maximo de registros que queremos retornar
// offset -> el numero del primer registro a retornar empieza en 0
// para pasar parametros query se escribe en la URL
// |--> /users?limit=10&offset=100
app.get("/users", (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send("No hay ningun parametro");
  }
});

app.listen(port, (req, res) => {
  console.log("Escuchando en el puert: ", port);
});
