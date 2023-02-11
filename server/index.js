const productsRouter = require("../routes/products");
const usersRouter = require("../routes/users");

function apiRouter(app) {
  app.use("/products", productsRouter);
  app.use("/users", usersRouter);
}

module.exports = apiRouter;
