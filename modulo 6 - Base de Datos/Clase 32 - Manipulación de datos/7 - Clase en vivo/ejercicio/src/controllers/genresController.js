const db = require("../database/models");
const { Generos } = db;

let GenresController = {
  list: function(req, res) {
    Generos.findAll()
      .then(genres => {
        res.render('genresList', { genres });
      })
      .catch(error => {
        res.status(500).send(error);
      });
  },

  detail: function(req, res) {
    let id = req.params.id;
    Generos.findByPk(id)
      .then(genre => {
        res.render('genresDetail', { genre });
      })
      .catch(error => {
        res.status(500).send(error);
      });
  },
};

module.exports = GenresController;