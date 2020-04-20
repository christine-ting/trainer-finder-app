const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = require('graphql');

const Profile = new GraphQLObjectType({
  name: 'Profile',
  description: 'This represents a Profile',
  fields: () => {
    return {
      email: {
        type: GraphQLString,
        resolve(profile) {
          return profile.email;
        }
      },
      first_name: {
        type: GraphQLString,
        resolve(profile) {
          return profile.first_name;
        }
      },
      last_name: {
        type: GraphQLString,
        resolve(profile) {
          return profile.last_name;
        }
      },
      height: {
        type: GraphQLString,
        resolve(profile) {
          return profile.height;
        }
      },
      weight: {
        type: GraphQLString,
        resolve(profile) {
          return profile.weight;
        }
      },
      age: {
        type: GraphQLInt,
        resolve(profile) {
          return profile.age;
        }
      },
      gender: {
        type: GraphQLString,
        resolve(profile) {
          return profile.gender;
        }
      },
      date_of_birth: {
        type: GraphQLString,
        resolve(profile) {
          return profile.date_of_birth;
        }
      },
      zip: {
        type: GraphQLInt,
        resolve(profile) {
          return profile.zip;
        }
      },
      goal_w: {
        type: GraphQLString,
        resolve(profile) {
          return profile.goal_w;
        }
      },
      weekly_goal: {
        type: GraphQLString,
        resolve(profile) {
          return profile.weekly_goal;
        }
      },
      activity_lvl: {
        type: GraphQLString,
        resolve(profile) {
          return profile.activity_lvl;
        }
      },
      workouts_per_wk: {
        type: GraphQLInt,
        resolve(profile) {
          return profile.workouts_per_wk;
        }
      },
      min_per_workout: {
        type: GraphQLInt,
        resolve(profile) {
          return profile.min_per_workout;
        }
      },
      profile_pic: {
        type: GraphQLString,
        resolve(profile) {
          return profile.profile_pic;
        }
      },
      cover_photo: {
        type: GraphQLString,
        resolve(profile) {
          return profile.cover_photo;
        }
      }
    };
  }
});

module.exports = Profile;