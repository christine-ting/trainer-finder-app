const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = require('graphql');

const Gym = new GraphQLObjectType({
  name: 'Gym',
  description: 'This represents a Gym',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(gym) {
          return gym.id;
        }
      },
      name: {
        type: GraphQLString,
        resolve(gym) {
          return gym.name;
        }
      },
      address: {
        type: GraphQLString,
        resolve(gym) {
          return gym.address;
        }
      },
      zip: {
        type: GraphQLInt,
        resolve(gym) {
          return gym.zip;
        }
      },
      website: {
        type: GraphQLString,
        resolve(gym) {
          return gym.website;
        }
      },
      hours: {
        type: GraphQLString,
        resolve(gym) {
          return gym.hours;
        }
      },
      image: {
        type: GraphQLString,
        resolve(gym) {
          return gym.image;
        }
      },
      phone: {
        type: GraphQLString,
        resolve(gym) {
          return gym.phone;
        }
      },
      num_of_rating: {
        type: GraphQLInt,
        resolve(gym) {
          return gym.num_of_rating;
        }
      },
      rating: {
        type: GraphQLString,
        resolve(gym) {
          return gym.rating;
        }
      }
    };
  }
});

module.exports = Gym;