const db = require('../database/models');
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const utilities = require('../utilities/utilities');

const actorsController = {
    list: (req, res) => {
      return res.send('lista de actores');
    }
};

module.exports = actorsController;