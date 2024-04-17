const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const Actors = db.Actor;

const actorsAPIController = {
    'list': (req, res) => {
        db.Actor.findAll()
        .then(actors => {
            let data = {
                meta: {
                    status : 200,
                    total: actors.length,
                    url: 'api/actors'
                },
                data: actors
            }
                res.json(data);
            })
    },

    'detail': (req, res) => {
        db.Actor.findByPk(req.params.id)
            .then(actor => {
                let data = {
                    meta: {
                        status: 200,
                        id: actor.id,
                        url: '/api/actor/:id'
                    },
                    data: actor
                }
                res.json(data);
            });
    },

    create: (req,res) => {
        let actorData = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            rating: req.body.rating,
            favorite_movie_id: req.body.favorite_movie_id
        }
        Actors
        .create(actorData)
        .then(confirm => {
            let data = {
                meta: {
                    status: 200,
                    total: confirm.length,
                    url: 'api/actors/create'
                },
                data:confirm
            };
            if(confirm){
                data.meta.created = true
            }else{
                data.meta.created = false;
                data.data = "No se ha creado el actor"
            }
            res.json(data);
        })    
        .catch(error => res.send(error))
    },

    update: (req,res) => {
        let actorID = req.params.id;
        let actorData = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                rating: req.body.rating,
                favorite_movie_id: req.body.favorite_movie_id,
        }
        Actors.update(actorData,{ where: {id: actorID} })
        .then(confirm => {
            let data = {
                meta: {
                    status: 200,
                    id: actorID,
                    url: 'api/actors/update/:id'
                },
                data: "Actor Modiicado"
            };
            if(confirm){
                data.meta.updated = true;
            }else{
                data.meta.status = 204;
                data.meta.updated = false;
                data.data = "No se ha modiicado el actor";
            }
            res.json(data);
        })    
        .catch(error => res.send(error))
    },

    destroy: (req,res) => {
        let actorID = req.params.id;
        Actors
        .destroy({where: {id: actorID}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(confirm => {
            let data = {
                meta: {
                    status: 200,
                    id: actorID,
                    url: 'api/actors/delete/:id'
                },
                data:confirm 
            };
            if(confirm){
                data.meta.deleted = true;
                data.data = "Actor eliminado"
                
            }else{
                data.meta.status = 204;
                data.meta.deleted = false;
                data.data = "No se ha eliminado el actor"
            }
            res.json(data);
        })    
        .catch(error => res.send(error))
    },

    'actorMovies': (req, res) => {
        db.Actor.findByPk(req.params.id,{
            include: ['movies']
        })
            .then(actor => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: actor.length,
                        url: '/api/actor/:id'
                    },
                    data: actor
                }
                res.json(respuesta);
            });
    },
}

module.exports = actorsAPIController;