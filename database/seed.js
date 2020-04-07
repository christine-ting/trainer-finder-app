const example = [{
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

const Info = require('./index.js').Info;
Info.create(example[0]);
