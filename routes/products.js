const express = require("express");

const productServices = require("../services/servicesProducts");

const router = express.Router();

router.get("/", async (req, res) => {
  const product = await productServices.getAllProducts(req, res);
  res.json(product);
});

router.post("/", async (req, res) => {
  const createProduct = await productServices.createNewProduct(req, res);
  return createProduct;
});

router.patch("/:id", async (req, res) => {
  const updateProduct = await productServices.updateProduct(req, res);
  return updateProduct;
});

router.delete("/:id", async (req, res) => {
  const deleteProduct = await productServices.deleteProduct(req, res);
  return deleteProduct;
});

// params -> /:id
router.get("/:id", async (req, res) => {
  const getOneProduct = await productServices.getOneProduct(req, res);
  return getOneProduct;
});

module.exports = router;
