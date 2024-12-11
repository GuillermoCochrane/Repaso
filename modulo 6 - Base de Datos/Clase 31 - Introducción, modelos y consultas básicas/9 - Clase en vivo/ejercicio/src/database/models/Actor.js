module.exports = (sequelize, DataTypes) => {
  let alias = "Actores";

  let config = {
    tableName: "actors", 
    timestamps: true,
    createdAt: 'created_at', // Nombre personalizado para la columna createdAt
    updatedAt: 'updated_at', // Nombre personalizado para la columna updatedAt      
  };

  let cols = {

    id: {
      type: DataTypes.INTEGER.UNSIGNED, 
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    first_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    last_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    rating: {
      type: DataTypes.DECIMAL(3, 1), 
      defaultValue: null,
    },

    favorite_movie_id: {
      type: DataTypes.INTEGER.UNSIGNED, 
      references: {
        model: "movies", 
        key: "id",       
      },
      onUpdate: "CASCADE", 
      onDelete: "SET NULL",
      defaultValue: null,
    },
  };

  const Genero = sequelize.define(alias, cols, config);

  return Genero;
};