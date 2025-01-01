const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const utilities = require('../utilities/utilities');
const { raw } = require('express');

//Aqui tienen una forma de llamar a cada uno de los modelos
// const {Movies,Genres,Actor} = require('../database/models');

//Aquí tienen otra forma de llamar a los modelos creados
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;

const moviesController = {
    list: (req, res) => {
        db.Movie.findAll()
            .then(movies => {
                let data = { title: 'Listado de Películas'}
                data.path = "movies"
                res.render('movies/moviesList.ejs', {movies, data});
            })
    },

    detail: (req, res) => {
        db.Movie.findByPk(req.params.id,{
            include: [
                {
                    association: 'genero'
                },
                {
                    association: 'actores'
                }
            ],
        })
        .then(movie => {
            const plainMovie = movie.get({ plain: true });
            plainMovie.release_date = utilities.formatDateDisplay(plainMovie.release_date);;
            let data = {title: plainMovie.title};
            data.path = "movies"
            data.id = plainMovie.id
            res.render('movies/moviesDetail.ejs', {movie: plainMovie, data});
        });
    },

    new: (req, res) => {
        db.Movie.findAll({
            order : [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
            .then(movies => {
                let data = {};
                data.title = "Películas ordenas por fecha";
                for (const movie of movies) {
                    movie.dataValues.release_date = utilities.formatDateDisplay(movie.dataValues.release_date);
                }
                res.render('movies/newestMovies', {movies, data});
            });
    },

    recomended: (req, res) => {
        db.Movie.findAll({
            where: {
                rating: {[db.Sequelize.Op.gte] : 8}
            },
            order: [
                ['rating', 'DESC']
            ]
        })
            .then(movies => {
                let data = {title: "Películas ordenadas por rating"}
                res.render('movies/recommendedMovies.ejs', {movies, data});
            });
    },

    //Aqui dispongo las rutas para trabajar con el CRUD
    add: function (req, res) {
        Genres.findAll()
            .then(genres => {
                let data = {title: "Agregar Película"}
                res.render('movies/moviesAdd.ejs', {allGenres: genres, data});
            });
    },

    create: function (req,res) {
        Movies.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id
        })
        .then(movie => {
            res.redirect('/movies');
        });
    },

    edit: function(req,res) {
        let MoviePromise = Movies.findByPk(req.params.id);
        let allGenresPromise = Genres.findAll();
        Promise.all([MoviePromise,allGenresPromise])
            .then(([Movie,allGenres]) => {
                Movie.release_date = utilities.formatDateForm(Movie.release_date);
                let data = {title: "Editar Película"}
                return res.render('movies/moviesEdit.ejs', {Movie,allGenres, data});
            })
    },

    update: function (req,res) {
        Movies.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id 
        }, 
        {
            where: {
                id: req.params.id
            }
        })
        .then(movie => {
            res.redirect('/movies/detail/' + req.params.id);
        });
    },

    delete: function (req,res) {
        Movies.findByPk(req.params.id)
            .then(Movie => {
                let data = {title: "Borrado de la Película"}
                return res.render('movies/moviesDelete.ejs', {Movie,data});
            })
    },

    destroy: async function (req,res) {
        try {

            let Movie = await Movies.findByPk(req.params.id,
                {
                    include: [
                        {
                            association: 'actores'
                        }
                    ],
                }
            );

            if (!Movie) {
                return res.status(404).send('Película no encontrada');
            }

            if (Movie.actores.length > 0) {
                let data = {
                    title: "Borrado de la Película: " + Movie.title,
                    confirm: true
                };
                return res.render('movies/moviesDelete.ejs', {Movie, data});
            }

            await Movies.destroy({
                where: {
                    id: req.params.id
                }
            })
            return res.redirect('/movies');

        } catch (error) {
            console.error(error);
            res.status(500).send('Error interno del servidor');
        }
    },

    assign: async function (req,res) {
        let actors = await Actors.findAll();
        let movie = await Movies.findByPk(req.params.id);        
        let data = {title: "Asignar actor a la película " + movie.title};
        res.render('movies/moviesAssign.ejs', {actors, data, movie});
    },

    associate: async function (req,res) {
        try{
            let movie = await Movies.findByPk(req.params.id);

            if (!movie) {
                return res.status(404).send('Película no encontrada');
            }

            await movie.addActores(req.body.actor_id);
            return res.redirect('/movies/detail/' + movie.id);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error interno del servidor'); 
        }
    },

    remove: async function (req,res) {
        try{
            let movie = await Movies.findByPk(req.params.movieID);
            let actor = await Actors.findByPk(req.params.actorID);
            if (!movie) {
                return res.status(404).send('Película no encontrada');
            }
            if (!actor) {
                return res.status(404).send('Actor no encontrado');
            }
            let data = {title: "Eliminar actor de una película" };
            return res.render('movies/moviesRemove.ejs', {movie, actor, data});
        } catch (error) {
            console.error(error);
            res.status(500).send('Error interno del servidor');
        }
    },

    eliminate: async function (req,res) {
        try{
            let movie = await Movies.findByPk(req.params.movieID);
            let actor = await Actors.findByPk(req.params.actorID);
            if (!movie) {
                return res.status(404).send('Película no encontrada');
            }
            if (!actor) {
                return res.status(404).send('Actor no encontrado');
            }
            await movie.removeActores(actor);
            return res.redirect('/movies/detail/' + movie.id);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error interno del servidor'); 
        }
    },
}

module.exports = moviesController;