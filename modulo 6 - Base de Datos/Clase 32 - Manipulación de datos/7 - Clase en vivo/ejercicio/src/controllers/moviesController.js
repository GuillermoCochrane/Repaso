const { where } = require("sequelize");
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
    return res.render('moviesAdd');
  },

  create: function (req, res) {
    const data = req.body;

      Peliculas.create({
        title:        data.title,
        rating:       data.rating,
        awards:       data.awards,
        release_date: data.release_date,
        length:       data.length,
      })
      .then(movie => {
        res.redirect('/movies');
      })
      .catch(error => {
        res.status(500).send(error);
      });
  },

  edit: function(req, res) {
      let id = req.params.id;

      Peliculas.findByPk(id)
        .then(Movie => {
          return res.render('moviesEdit', { Movie });
        })
        .catch(error => {
          res.status(500).send(error);
        });
  },

  update: function (req,res) {
      let id = req.params.id;
      let data = req.body

      Peliculas.update({
        title:        data.title,
        rating:       data.rating,
        awards:       data.awards,
        release_date: data.release_date,
        length:       data.length,
      },
      {
        where: {id: id}
      }
    )
    .then(() => {
      return res.redirect('/movies/detail/' + id);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  },

  delete: function (req, res) {
      let {id} = req.params;
      Peliculas.findByPk(id)
        .then((Movie) => {
          return res.render("moviesDelete", { Movie });
        })
        .catch(error => {
          res.status(500).send(error);
        });
  },

  destroy: function (req, res) {
      let {id} = req.params;
      Peliculas.destroy({
        where: {id: id}
      })
      .then(() => {
        return res.redirect('/movies');
      })
      .catch(error => {
        res.status(500).send(error);
      });
  }

};

module.exports = moviesController;