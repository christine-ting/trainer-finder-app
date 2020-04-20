module.exports = (sequelize, DataTypes) => {
  const Trainer = sequelize.define('Trainer', {
    trainer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'gym',
        key: 'id'
      }
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    specialties: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    price: {
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
    tableName: 'trainer',
    timestamps: false // opt out of timestamps
  });
  return Trainer;
};

