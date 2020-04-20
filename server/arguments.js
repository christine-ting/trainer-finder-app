const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = require('graphql');

const args = {
  email: {
    type: GraphQLString
  },
  first_name: {
    type: GraphQLString
  },
  last_name: {
    type: GraphQLString
  },
  height: {
    type: GraphQLString
  },
  weight: {
    type: GraphQLString
  },
  age: {
    type: GraphQLInt
  },
  gender: {
    type: GraphQLString
  },
  date_of_birth: {
    type: GraphQLString
  },
  zip: {
    type: GraphQLInt
  },
  goal_w: {
    type: GraphQLString
  },
  weekly_goal: {
    type: GraphQLString
  },
  activity_lvl: {
    type: GraphQLString
  },
  workouts_per_wk: {
    type: GraphQLInt
  },
  min_per_workout: {
    type: GraphQLInt
  },
  profile_pic: {
    type: GraphQLString
  },
  cover_photo: {
    type: GraphQLString
  }
};

module.exports = args;