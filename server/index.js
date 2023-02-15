const productsRouter = require("../routes/products");
const usersRouter = require("../routes/users");
const clientRouter = require("../routes/client");
const express = require("express");

function apiRouter(app) {
  const router = express.Router();
  app.use("/api/v1", router); // de esta forma estamos indicando que todas las rutas de este bloque comienzen con '/api/v1'
  router.use("/products", productsRouter);
  router.use("/users", usersRouter);
  router.use("/client", clientRouter);
}

module.exports = apiRouter;
