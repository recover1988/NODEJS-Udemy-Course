const express = require("express");

const productServices = require("../services/servicesProducts");

const router = express.Router();

router.get("/", (req, res) => {
  const product = productServices.getAllProducts(req, res);
  res.json(product);
});

router.post("/", (req, res) => {
  productServices.createNewProduct(req, res);
});

router.patch("/:id", (req, res) => {
  productServices.updateProduct(req, res);
});

router.delete("/:id", (req, res) => {
  productServices.deleteProduct(req, res);
});

// params -> /:id
router.get("/:id", (req, res) => {
  productServices.getOneProduct(req, res);
});

module.exports = router;
