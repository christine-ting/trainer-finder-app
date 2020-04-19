module.exports = (sequelize, DataTypes) => {
  const Info = sequelize.define('Info', {
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_of_birth: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    goal_w: {
      type: DataTypes.STRING,
      allowNull: false
    },
    weekly_goal: {
      type: DataTypes.STRING,
      allowNull: false
    },
    activity_lvl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    workouts_per_wk: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    min_per_workout: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    profile_pic: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cover_photo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'info',
    timestamps: false // opt out of timestamps
  });
  return Info;
};
