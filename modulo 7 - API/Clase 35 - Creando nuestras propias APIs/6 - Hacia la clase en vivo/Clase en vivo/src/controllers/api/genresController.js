const db = require('../../database/models');
const sequelize = db.sequelize;


const genresController = {
    'list': (req, res) => {
        db.Genre.findAll()
            .then(genres => {
                let data = {
                    meta: {
                        status: 200,
                        url: "api/genres",
                        total: genres.length
                    },
                    data: genres
                }
                return res.json(data)
            })
    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                let data = {
                    meta: {
                        status: 200,
                        url: `api/genres/detail/${genre.id}`,
                        id: genre.id
                    },
                    data: genre
                }
                return res.json(data)
            });
    }

}

module.exports = genresController;