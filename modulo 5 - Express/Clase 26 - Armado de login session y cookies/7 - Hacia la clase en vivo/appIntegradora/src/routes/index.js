var express = require('express');
var router = express.Router();
const controller = require("../controllers/controller")

/* GET home page. */
router.get('/', controller.index);

router.post('/', controller.process);

module.exports = router;
