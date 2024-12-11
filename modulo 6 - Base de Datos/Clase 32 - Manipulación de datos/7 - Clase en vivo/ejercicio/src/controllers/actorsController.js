const db = require("../database/models");
const { Actores } = db;

let actorsController = {
  list: function(req, res) {
    Actores.findAll()
      .then(actors => {
        res.render('actorsList', { actors });
      })
      .catch(error => {
        res.status(500).send(error);
      });
  },

  detail: function(req, res) {
    let id = req.params.id;
    Actores.findByPk(id)
      .then(actor => {
        res.render('actorsDetail', { actor });
      })
      .catch(error => {
        res.status(500).send(error);
      });
  },
};

module.exports = actorsController;