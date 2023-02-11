const express = require("express");

const productServices = require("../services/servicesProducts");

const router = express.Router();

const { validatorHandler } = require("../middleware/validator.handler");
const {
  schemaProductCreate,
  updateSchemaProduct,
  getProductSchema,
} = require("../schema/schemaProduct");

router.get("/", async (req, res, next) => {
  try {
    const product = await productServices.getAllProducts(req, res);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  validatorHandler(schemaProductCreate, "body"),
  async (req, res) => {
    const createProduct = await productServices.createNewProduct(req, res);
    return createProduct;
  }
);

router.patch(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  validatorHandler(updateSchemaProduct, "body"),
  async (req, res) => {
    const updateProduct = await productServices.updateProduct(req, res);
    return updateProduct;
  }
);

router.delete("/:id", async (req, res) => {
  const deleteProduct = await productServices.deleteProduct(req, res);
  return deleteProduct;
});

// params -> /:id
router.get(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  async (req, res) => {
    const getOneProduct = await productServices.getOneProduct(req, res);
    return getOneProduct;
  }
);

module.exports = router;
