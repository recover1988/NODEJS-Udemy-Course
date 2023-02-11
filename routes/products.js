const express = require("express");
const faker = require("faker");

const router = express.Router();

router.get("/", (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 5;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }

  res.json(products);
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
