const db = require("../database/models");
const {Peliculas} = db;

let MoviesController = {

  list: function(req, res, ) {
    Peliculas.findAll()
      .then(movies => {
        res.render('moviesList', { movies });
      })
      .catch(error => {
        res.status(500).send(error);
      });
  }

};

module.exports = MoviesController;