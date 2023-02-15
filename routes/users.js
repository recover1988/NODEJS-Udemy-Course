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

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const getUser = await servicesUsers.findOne(id);
    return res.json(getUser);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const body = req.body;
    const newUser = await servicesUsers.createUser(body);
    return newUser;
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const updateUser = await servicesUsers.updateUser({ id, body });
    return res.json({ updateUser });
  } catch (error) {
    next(error);
  }
});

router.delete("/", async (req, res, next) => {
  try {
    const { id } = req.params;
    const userDelete = await servicesUsers.deleteUser({ id });
    return res.json(userDelete);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
