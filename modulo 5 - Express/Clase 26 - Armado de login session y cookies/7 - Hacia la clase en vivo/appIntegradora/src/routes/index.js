var express = require('express');
var router = express.Router();
const controller = require("../controllers/controller")
const validations = require('../middlewares/validationsMDW');

/* GET home page. */
router.get('/', controller.index);

router.post('/', validations, controller.process);

module.exports = router;
