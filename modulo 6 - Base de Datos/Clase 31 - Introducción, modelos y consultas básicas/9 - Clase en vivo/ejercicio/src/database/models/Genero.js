module.exports = (sequelize, DataTypes) => {
  let alias = "Generos";

  let config = {
    tableName: "genres", 
    timestamps: true,    
  };

  let cols = {

    id: {
      type: DataTypes.INTEGER.UNSIGNED, 
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    ranking: {
      type: DataTypes.INTEGER.UNSIGNED, 
      allowNull: false,
      unique: true,
    },

    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },

  };

  const Genero = sequelize.define(alias, cols, config);

  return Genero;
};