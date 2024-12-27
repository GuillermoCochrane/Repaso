module.exports = (sequelize, dataTypes) => {
    let alias = 'Movie'; 
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false
        },
        awards: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        release_date: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        length: dataTypes.BIGINT(10),
        genre_id: {
            type: dataTypes.BIGINT(10),
            allowNull: true, // Permite que sea null si el género es eliminado
            references: {
                model: 'genres', // Nombre de la tabla a la que hace referencia
                key: 'id'
            },
            onDelete: 'SET NULL', // Establece null si se elimina el género
            onUpdate: 'CASCADE' // Actualiza automáticamente si cambia el id del género
        }
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Movie = sequelize.define(alias,cols,config);

    Movie.associate = function (models) {
        Movie.belongsTo(models.Genre, {
            as: 'genero',
            foreignKey: 'genre_id',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        });

        Movie.belongsToMany(models.Actor, {
            through: 'actor_movie',
            as: 'actores',
            foreignKey: 'movie_id',
            otherKey: 'actor_id',
            timestamps: false
        });
    };

    return Movie
};