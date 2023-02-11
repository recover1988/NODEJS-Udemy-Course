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
  console.log(req.params.id);
  const { id } = req.params;
  res.json({
    id,
    name: "teclado",
    price: 2000,
    category: "tecnology",
  });
});

module.exports = router;
