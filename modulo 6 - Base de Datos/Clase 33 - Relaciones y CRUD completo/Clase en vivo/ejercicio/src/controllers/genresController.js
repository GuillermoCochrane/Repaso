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
                let data = { title: 'Detalle del género: ' + genre.name };
                data.id = genre.id;
                data.path = 'genres';
                res.render('genres/genresDetail.ejs', { 
                    data,
                    genre,
                    movies: genre.peliculas 
                });
            })
            .catch(err => {
                console.error(err);
                res.status(500).send('Error interno del servidor');
            });
    },

    add:  (req, res) => {
        let data = { title: "Agregar Género"}
        res.render('genres/genresAdd.ejs', {data});
    },

    create: (req, res) => {
        Genres.findOne({
            order: [['id', 'DESC']]
        })
        .then(lastGenre => {
            const newRanking = lastGenre ? lastGenre.id + 1 : 1; 
            // Calcular ranking, usando el último + 1
            return Genres.create({
                name: req.body.name,
                ranking: newRanking,
                active: true 
            });
        })
        .then(() => {
            res.redirect('/genres');
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Error al crear el género');
        });
    },

    edit: (req, res) => {
        Genres.findByPk(req.params.id)
            .then(Genre => {
                if (!Genre) {
                    return res.status(404).send('Género no encontrado');
                }
                let data = { title: 'Editar Género: ' + Genre.name };
                data.id = Genre.id;
                data.path = 'genres';
                res.render('genres/genresEdit.ejs', { data, Genre });
            })
            .catch(err => {
                console.error(err);
                res.status(500).send('Error interno del servidor');
            });
    },

    update: (req, res) => {
        
    }
};

module.exports = genresController;
