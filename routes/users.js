const express = require("express");
const servicesUsers = require("../services/servicesUsers");

const router = express.Router();

// limit -> registro numerico positivo, numero maximo de registros que queremos retornar
// offset -> el numero del primer registro a retornar empieza en 0
// para pasar parametros query se escribe en la URL
// |--> /users?limit=10&offset=100
router.get("/", async (req, res, next) => {
  try {
    const getUsers = await servicesUsers.getAllUser(req, res);
    return res.send({ getUsers });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
