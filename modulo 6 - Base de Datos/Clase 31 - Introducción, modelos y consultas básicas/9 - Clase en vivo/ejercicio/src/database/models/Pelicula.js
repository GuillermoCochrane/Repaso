module.exports = (sequelize, DataTypes) => {
  let alias = "Peliculas";

  let config = {
    tableName: "movies", 
    timestamps: true,    
  };

  let cols = {
    id: {
      type: DataTypes.INTEGER.UNSIGNED, 
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    title: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },

    rating: {
      type: DataTypes.DECIMAL(3, 1), 
      allowNull: false,
      validate: {
        min: 0,                     
      },//equivalente a UNSIGNED de INTEGER
    },

    awards: {
      type: DataTypes.INTEGER.UNSIGNED, 
      allowNull: false,
      defaultValue: 0,
    },

    release_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    length: {
      type: DataTypes.INTEGER.UNSIGNED, 
      allowNull: true,
      defaultValue: null,
    },

    genre_id: {
      type: DataTypes.INTEGER.UNSIGNED, 
      allowNull: true, 
      references: {
        model: "genres", 
        key: "id",       
      },
      onUpdate: "CASCADE", 
      onDelete: "SET NULL",
      defaultValue: null,
    },
  };

  const Pelicula = sequelize.define(alias, cols, config);

  return Pelicula;
};
