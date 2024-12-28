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
                data.path = 'genres';
                data.section = 'Género';
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
                data.section = 'Género';
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
        data.path = 'genres';
        data.section = 'Género';
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
                data.section = 'Género';
                res.render('genres/genresEdit.ejs', { data, Genre });
            })
            .catch(err => {
                console.error(err);
                res.status(500).send('Error interno del servidor');
            });
    },

    update: (req, res) => {
        Genres.update({
            name: req.body.name
        }, {
            where: {
                id: req.params.id
            }
        }).then(() => {
            res.redirect('/genres/edit/' + req.params.id);
        }).catch(err => {
            console.error(err);
            res.status(500).send('Error interno del servidor');
        })
    },

    delete:  (req, res) => {
        Genres.findByPk(req.params.id)
            .then(Genre => {
                if (!Genre) {
                    return res.status(404).send('Género no encontrado');
                }

                let data = { title: 'Eliminar Género: ' + Genre.name };
                res.render('genres/genresDelete.ejs', { data, Genre });
            })
            .catch(err => {
                console.error(err);
                res.status(500).send('Error interno del servidor');
            });
    },

    destroy: (req, res) => {
        Genres.findByPk(req.params.id, {
            include: [{ model: Movies, as: 'peliculas' }]
        })
        .then(Genre => {
            if (!Genre) {
                return res.status(404).send('Género no encontrado');
            }
            // Si el género tiene películas asociadas, renderiza la vista de confirmación
            if (Genre.peliculas.length > 0) {
                let data = { 
                    title: 'Eliminar Género: ' + Genre.name,
                    confirm: true 
                };
                return res.render('genres/genresDelete.ejs', { data, Genre });
            }
            // Si no tiene películas asociadas, elimina directamente
            return Genres.destroy({
                where: { id: req.params.id }
            }).then(() => {
                res.redirect('/genres'); // Redirige después de eliminar
            });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error al eliminar el género');
        });
    },

    confirm: (req, res) => {
        Genres.findByPk(req.params.id, {
            include: [{ model: Movies, as: 'peliculas' }]
        })
        .then(Genre => {
            if (!Genre) {
                return res.status(404).send('Género no encontrado');
            }
            // Actualiza las películas asociadas al género para que su genre_id sea NULL
            return Movies.update(
                { genre_id: null }, 
                { where: { genre_id: Genre.id } } 
            )
            .then(() => {
                // Después de desvincular las películas, elimina el género
                return Genres.destroy({
                    where: { id: req.params.id }
                });
            });
        })
        .then(() => {
            res.redirect('/genres'); // Redirige después de confirmar la eliminación
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error al confirmar la eliminación del género');
        });
    },
    
};

module.exports = genresController;