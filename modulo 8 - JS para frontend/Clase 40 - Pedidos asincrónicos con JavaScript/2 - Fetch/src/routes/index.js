var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'JS Front' });
});

router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  res.render(id, { title: `Ejercicio ${id}` });
});



module.exports = router;
