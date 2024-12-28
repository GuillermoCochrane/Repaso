const db = require('../database/models');
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const utilities = require('../utilities/utilities');

const actorsController = {
    list: async(req, res) => {
        try {
            let actors = await Actors.findAll();

            let data = { title: 'Listado de actores' };
            data.path = 'actors';
            data.section = 'Actor';
            return res.render('actors/actorsList.ejs', { actors, data });
            } catch (error) {
                console.error(error);
                res.status(500).send('Error interno del servidor');
            }
    },

};

module.exports = actorsController;