var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', usersController.index);
router.get("/login", usersController.loginUser)

module.exports = router;
