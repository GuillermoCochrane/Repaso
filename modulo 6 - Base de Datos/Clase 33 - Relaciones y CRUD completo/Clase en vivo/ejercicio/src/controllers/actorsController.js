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

    detail: async(req, res) => {
        try {
            let actor = await Actors.findByPk(req.params.id, {
                include: [
                    {
                        model: Movies,
                        as: 'peliculas'
                    }
                ]
            });
            if (!actor) {
                return res.status(404).send('Actor no encontrado');
            }
            let data = { title: 'Detalle del actor: ' + actor.first_name + ' ' + actor.last_name };
            data.id = actor.id;
            data.path = 'actors';
            data.section = 'Actor';
            return res.render('actors/actorDetail.ejs', { data, actor, movies: actor.peliculas });
            } catch (error) {
                console.error(error);
                res.status(500).send('Error interno del servidor');
            }
    },

    add: (req, res) => {
        let data = { title: "Agregar Actor"}
        data.path = 'actors';
        data.section = 'Actor';
        return res.render('actors/actorAdd.ejs', {data});
    },

    create: async(req, res) => {
        try {
            const actor = await Actors.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                rating: req.body.rating
            });
            return res.redirect('/actors/detail/' + actor.id);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error interno del servidor');
        }
    },

    edit: async(req, res) => {
        try {
            let Actor = await Actors.findByPk(req.params.id);
            if (!Actor) {
                return res.status(404).send('Actor no encontrado');
            }
            let data = { title: 'Editar Actor: ' + Actor.first_name + ' ' + Actor.last_name };
            data.id = Actor.id;
            data.path = 'actors';
            data.section = 'Actor';
            return res.render('actors/actorEdit.ejs', { data, Actor });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error interno del servidor');
        }
    },

    update: async(req, res) => {
        try {
            let Actor = await Actors.update({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                rating: req.body.rating
            }, {
                where: {
                    id: req.params.id
                }
            });
            return res.redirect('/actors/detail/' + req.params.id);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error interno del servidor');
        }
    },

    delete: async(req, res) => {
        try {
            let Actor = await Actors.findByPk(req.params.id);
            if (!Actor) {
                return res.status(404).send('Actor no encontrado');
            }
            let data = { title: 'Eliminar Actor: ' + Actor.first_name + ' ' + Actor.last_name };
            return res.render('actors/actorDelete.ejs', { data, Actor });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error interno del servidor');
        }
    },

    destroy: async(req, res) => {
        try {
            let Actor = await Actors.findByPk(req.params.id);
            if (!Actor) {
                return res.status(404).send('Actor no encontrado');
            }
            let process = await Actors.destroy({
                where: {
                    id: req.params.id
                }
                });
            return res.redirect('/actors');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error interno del servidor');
        }
    },

};

module.exports = actorsController;