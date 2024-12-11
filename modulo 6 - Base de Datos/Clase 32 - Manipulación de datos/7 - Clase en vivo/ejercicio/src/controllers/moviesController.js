const db = require("../database/models");
const {Peliculas} = db;

const moviesController = {

  list: function(req, res, ) {
    Peliculas.findAll()
      .then(movies => {
        res.render('moviesList', { movies });
      })
      .catch(error => {
        res.status(500).send(error);
      });
  },

  detail: function(req, res) {
    let id = req.params.id;
    Peliculas.findByPk(id)
      .then(movie => {
        res.render('moviesDetail', { movie });
      })
      .catch(error => {
        res.status(500).send(error);
      });
  },

  new: function(req, res) {
    Peliculas.findAll({
      order: [['release_date', 'DESC']],
      limit: 5,
    }).then(movies => {
      res.render('newestMovies', { movies });
    })
    .catch(error => {
      res.status(500).send(error);
    });
  },

  recomended: function(req, res) {
    Peliculas.findAll({
      where: {
        rating: {[db.Sequelize.Op.gte] : 8}
      },
      order: [['rating', 'DESC']],
      limit: 10,
    }).then(movies => {
      res.render('recommendedMovies', { movies });
    })
    .catch(error => {
      res.status(500).send(error);
    });
  },
  //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD
  add: function (req, res) {
    // TODO   
  },
  create: function (req, res) {
      // TODO
  },
  edit: function(req, res) {
      // TODO
  },
  update: function (req,res) {
      // TODO
  },
  delete: function (req, res) {
      // TODO
  },
  destroy: function (req, res) {
      // TODO
  }

};

module.exports = moviesController;