var express = require('express');
var router = express.Router();
const mainController = require("../controllers/mainController")

/* GET home page. */
router.get('/', mainController.index);
router.get("/detalle", mainController.detalle);
router.get("/detalle/:id", mainController.detalleID);

module.exports = router;
