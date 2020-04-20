const dbInfo = require('../database/index.js').info.sequelize;
const dbGym = require('../database/index.js').gym.sequelize;
const dbTrainer = require('../database/index.js').trainer.sequelize;
const Profile = require('./schema/Profile');
const Gym = require('./schema/Gym');
const Trainer = require('./schema/Trainer');
const args = require('./arguments');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema
} = require('graphql');

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => {
    return {
      profiles: {
        type: new GraphQLList(Profile),
        args: {
          email: {
            type: GraphQLString
          }
        },
        resolve(root, args) {
          return dbInfo.models.Info.findAll({ where: args });
        }
      },
      gyms: {
        type: new GraphQLList(Gym),
        args: {
          zip: {
            type: GraphQLInt
          }
        },
        resolve(root, args) {
          return dbGym.models.Gym.findAll({ where: args });
        }
      },
      trainers: {
        type: new GraphQLList(Trainer),
        args: {
          trainer_id: {
            type: GraphQLInt
          }
        },
        resolve(root, args) {
          return dbTrainer.models.Trainer.findAll({ attributes: {exclude: ['GymId']}, where: args });
        }
      }
    };
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Functions to update profile',
  fields: {
    updateProfile: {
      type: Profile,
      args,
      resolve(_, args) {
        return dbInfo.models.Info.update(args, { where: { email: args.email } });
      }
    },
    addUser: {
      type: Profile,
      args,
      resolve(_, args) {
        return dbInfo.models.Info.create(args);
      }
    }
  }
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

module.exports = Schema;
