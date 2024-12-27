const db = require('../database/models');
const Movies = db.Movie;
const Genres = db.Genre;
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const utilities = require('../utilities/utilities');

const genresController = {
    list: (req, res) => {
        Genres.findAll()
            .then(genres => {
                let data = { title: 'Listado de generos' };
                res.render('genres/genresList.ejs', { genres, data });
            })
            .catch(err => {
                console.error(err);
                res.status(500).send('Error interno del servidor');
            });
    },

    detail: (req, res) => {
        Genres.findByPk(req.params.id, {
            include: [
                {
                    model: Movies,
                    as: 'peliculas'
                }
            ]
        })
            .then(genre => {
                if (!genre) {
                    return res.status(404).send('Género no encontrado');
                }
                res.render('genres/genresDetail.ejs', { 
                    title: genre.name,
                    genre,
                    movies: genre.peliculas 
                });
            })
            .catch(err => {
                console.error(err);
                res.status(500).send('Error interno del servidor');
            });
    }
};

module.exports = genresController;
