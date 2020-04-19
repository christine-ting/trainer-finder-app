const axios = require('axios');
const zipcodes = require('zipcodes');
var hills = zipcodes.lookup(91765);
var data;
// console.log(hills);
// axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${hills.latitude},${hills.longitude}&radius=8000&type=gym&key=`)
//   .then((response) => {
//     data = response.data.results;
//     console.log(JSON.stringify(data))
//   })
//   .catch((err) => console.error(err));

const infoData = [{
  id: 0,
  email: 'christine@yahoo.com',
  first_name: 'Christine',
  last_name: 'Ting',
  height: '5ft5in',
  weight: '130 lbs',
  age: 27,
  gender: 'Female',
  date_of_birth: '12/25/1992',
  zip: 90045,
  goal_w: '120 lbs',
  weekly_goal: 'Lose 0.5 lbs per week',
  activity_lvl: 'Active',
  workouts_per_wk: 3,
  min_per_workout: 60,
  profile_pic: 'https://mvpuploadimg.s3-us-west-1.amazonaws.com/IMG_3501-1583453260746.JPG',
  cover_photo: 'https://mvpuploadimg.s3-us-west-1.amazonaws.com/Screen+Shot+2020-03-09+at+9.10.16+AM.png'
}];

const gymData = [{
  name: 'LA Fitness',
  address: '20801 Golden Springs Dr, Diamond Bar, CA 91789',
  zip: 91765,
  website: 'lafitness.com',
  hours: 'Mon 6am-10pm | Tue 6am-10pm | Wed 6am-10pm | Thu 6am-10pm | Fri 6am-10pm | Sat 6am-10pm | Sun 6-8pm',
  image: 'https://mvpuploadimg.s3-us-west-1.amazonaws.com/Screen+Shot+2020-04-17+at+1.02.13+PM.png',
  phone: '(909) 595-0045',
  num_of_rating: 15,
  rating: 3.5
},
{
  name: 'Results Unlimited Inc',
  address: '21050 Golden Springs Dr, Diamond Bar, CA 91789',
  zip: 91765,
  website: '',
  hours: 'Mon 6am-10pm | Tue 6am-10pm | Wed 6am-10pm | Thu 6am-10pm | Fri 6am-10pm | Sat 6am-10pm | Sun 6-8pm',
  image: 'https://mvpuploadimg.s3-us-west-1.amazonaws.com/Screen+Shot+2020-04-18+at+4.45.15+PM.png',
  phone: '(909) 594-1249',
  num_of_rating: 7,
  rating: 4.2
}];

const trainerData = [{
  trainer_id: 1,
  first_name: 'Lauren',
  last_name: 'Greens',
  specialties: 'yoga | boxing',
  image: 'https://mvpuploadimg.s3-us-west-1.amazonaws.com/Screen+Shot+2020-04-17+at+1.07.23+PM.png',
  num_of_rating: 5,
  rating: 4.6
},
{
  trainer_id: 2,
  first_name: 'Ben',
  last_name: 'David',
  specialties: 'karate | boxing',
  image: 'https://mvpuploadimg.s3-us-west-1.amazonaws.com/Screen+Shot+2020-04-17+at+1.07.56+PM.png',
  num_of_rating: 7,
  rating: 4.2
}];


const Info = require('./').info;
const Gym = require('./').gym;
const Trainer = require('./').trainer;
Info.create(infoData[0]);
gymData.forEach(data => Gym.create(data));
trainerData.forEach(data => Trainer.create(data));




