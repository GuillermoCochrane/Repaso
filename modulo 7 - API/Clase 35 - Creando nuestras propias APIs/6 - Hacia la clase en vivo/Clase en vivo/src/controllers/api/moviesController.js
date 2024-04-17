const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');

//Aqui tienen otra forma de llamar a cada uno de los modelos
const Movies = db.Movie;

const moviesController = {

    'list': (req, res) => {
        db.Movie.findAll({
            include: ['genre']
        })
            .then(movies => {
                let data = {
                    meta: {
                        status: 200,
                        url: "api/movies",
                        total: movies.length
                    },
                    data: movies
                }
                res.json(data)
            })
    },

    'detail': (req, res) => {
        db.Movie.findByPk(req.params.id,
            {
                include : ['genre']
            })
            .then(movie => {
                let data = {
                    meta: {
                        status: 200,
                        url: `api/movies/detail/${movie.id}`,
                        id: movie.id
                    },
                    data: movie
                }
                res.json(data);
            });
    },

    'recomended': (req, res) => {
        db.Movie.findAll({
            include: ['genre'],
            where: {
                rating: {[db.Sequelize.Op.gte] : 8}
            },
            order: [
                ['rating', 'DESC']
            ]
        })
            .then(movies => {
                let data = {
                    meta: {
                        status: 200,
                        url: "api/movies/recommended",
                        total: movies.length
                    },
                    data: movies
                }
                res.json(data);
            });
    },

    create: function (req,res) {
        let data = {
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id
        }
        Movies
        .create(data)
        .then((newMovie)=> {
            let data = {
                meta: {
                    status: 200,
                    url: "api/movies/create"
                },
                data: newMovie
            }
            if(newMovie){
                data.meta.created = true
            } else {
                data.meta.created = false
            }
            return res.json(data)
        })            
        .catch(error => res.send(error))
    },

    update: function (req,res) {
        let movieId = req.params.id;
        let movieData ={
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
        }
        Movies
        .update(movieData,{where: {id: movieId}})
        .then(() => {
            let data = {
                meta: {
                    status: 200,
                    url: "api/movies/update/" + req.params.id,
                    movieID: req.params.id,
                    updated: true
                },
                data: "updated succesfully"
            }
            return res.json(data)})            
        .catch(error => res.send(error))
    },

    destroy: function (req,res) {
        let movieId = req.params.id;
        Movies
        .destroy({where: {id: movieId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then((response)=>{
            data = {
                meta: {
                    status: 200,
                    url: "api/movies/delete/:id",
                    movieID: req.params.id,
                    deleted: true
                },
            }
            return res.json(data)})
        .catch(error => res.send(error)) 
    },
}

module.exports = moviesController;