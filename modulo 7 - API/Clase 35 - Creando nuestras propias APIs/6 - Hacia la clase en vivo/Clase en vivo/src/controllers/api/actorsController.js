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
                data.meta.created = false
            }
            res.json(data);
        })    
        .catch(error => res.send(error))
    },
}

module.exports = actorsAPIController;