module.exports = (sequelize, DataTypes) => {
  const Gym = sequelize.define('Gym', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hours: {
      type: DataTypes.STRING,
      allowNull: false
    },
    num_of_rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rating: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'gym',
    timestamps: false // opt out of timestamps
  });
  return Gym;
};