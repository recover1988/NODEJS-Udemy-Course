const faker = require("faker");

const boom = require("@hapi/boom");
const pool = require("../libs/postgres");

const getAllProducts = async (req, res) => {
  try {
    const query = "SELECT * FROM tasks";
    const response = await pool.query(query);
    return response.rows;
  } catch (error) {
    console.log(error);
  }
};

const createNewProduct = (req, res) => {
  try {
    const body = req.body;
    res.json({
      ok: true,
      data: body,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = (req, res) => {
  try {
    const { id } = req.params;
    // if (id != 1) {
    //   throw boom.notFound('Product not found');
    // }
    const body = req.body;
    res.json({
      message: "success",
      id,
      product: body,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = (req, res) => {
  try {
    const { id } = req.params;
    res.json({
      message: "delete",
      id,
    });
  } catch (error) {
    console.log(error);
  }
};

const getOneProduct = (req, res) => {
  try {
    const { id } = req.params;
    res.json({
      id,
      name: "teclado",
      price: 2000,
      category: "tecnology",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllProducts,
  createNewProduct,
  updateProduct,
  deleteProduct,
  getOneProduct,
};
