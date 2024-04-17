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
}

module.exports = actorsAPIController;