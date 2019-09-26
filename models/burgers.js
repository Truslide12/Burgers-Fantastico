module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("burgers", {
    type: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a todo from being entered if it doesn't
      // have a text value
      allowNull: false,
      // len is a validation that checks that our todo is between 1 and 140 characters
      validate: {
        len: [1, 140]
      }
    },
    cooked: {
      type: DataTypes.BOOLEAN,
      // defaultValue is a flag that defaults a new todos complete value to false if
      // it isn't supplied one
      defaultValue: false
    }
  });
  var Ingredient = sequelize.define("ingredients", {
    patties: {
      type: DataTypes.Integer,
      defaultValue: 1,
    },
    buns: {
      type: DataTypes.Integer,
      defaultValue: 1,
    },
    cheese: {
      type: DataTypes.Integer,
      defaultValue: 1,
    },
    chile: {
      type: DataTypes.Integer,
      defaultValue: 1,
    },
  });
  var Inventory = sequelize.define("inventories", {
    patties: {
      type: DataTypes.Integer,
      allowNull: false
    },
    buns: {
      type: DataTypes.Integer,
      allowNull: false
    },
    cheese: {
      type: DataTypes.Integer,
      allowNull: false
    },
    chile: {
      type: DataTypes.Integer,
      allowNull: false
    },
  });
  var Finance = sequelize.define("finances", {
    income: {
      type: DataTypes.Integer,
      allowNull: false
    },
    expense: {
      type: DataTypes.Integer,
      allowNull: false
    },
  });
  return Burger, Ingredient, Inventory, Finance;
};
