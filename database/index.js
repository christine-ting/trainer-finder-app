const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:@localhost:5432/findtrainer');


let db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.info = require('./models/Info.js')(sequelize, Sequelize);
db.gym = require('./models/Gym.js')(sequelize, Sequelize);
db.trainer = require('./models/Trainer.js')(sequelize, Sequelize);
db.gym.hasMany(db.trainer);

sequelize
  .authenticate()
  .then(() => {
    console.log('\u001B[33mConnection has been established successfully.');
  })
  .catch(err => {
    console.error('\u001B[31mUnable to connect to the database:', err);
  });

module.exports = db;