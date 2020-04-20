const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = require('graphql');

const Trainer = new GraphQLObjectType({
  name: 'Trainer',
  description: 'This represents a Trainer',
  fields: () => {
    return {
      trainer_id: {
        type: GraphQLInt,
        resolve(trainer) {
          return trainer.trainer_id;
        }
      },
      first_name: {
        type: GraphQLString,
        resolve(trainer) {
          return trainer.first_name;
        }
      },
      last_name: {
        type: GraphQLString,
        resolve(trainer) {
          return trainer.last_name;
        }
      },
      specialties: {
        type: GraphQLString,
        resolve(trainer) {
          return trainer.specialties;
        }
      },
      image: {
        type: GraphQLString,
        resolve(trainer) {
          return trainer.image;
        }
      },
      price: {
        type: GraphQLString,
        resolve(trainer) {
          return trainer.price;
        }
      },
      num_of_rating: {
        type: GraphQLInt,
        resolve(trainer) {
          return trainer.num_of_rating;
        }
      },
      rating: {
        type: GraphQLString,
        resolve(trainer) {
          return trainer.rating;
        }
      }
    };
  }
});

module.exports = Trainer;