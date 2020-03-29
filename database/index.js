const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:@localhost:5432/profile');

sequelize
  .authenticate()
  .then(() => {
    console.log('\u001B[33mConnection has been established successfully.');
  })
  .catch(err => {
    console.error('\u001B[31mUnable to connect to the database:', err);
  });

const Info = sequelize.define('Info', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  username: {
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
  dob: {
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
  image: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'info',
  timestamps: false // opt out of timestamps
});

const db = { Info, sequelize };
module.exports = db;