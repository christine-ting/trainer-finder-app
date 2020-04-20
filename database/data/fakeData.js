const faker = require('faker');
const zipcodes = require('zipcodes');
const la = zipcodes.lookup(90014);
const sf = zipcodes.lookup(94008);
const ny = zipcodes.lookup(10001);
const db = zipcodes.lookup(91765);
const key = require('../env/key').googleAPI;
const axios = require('axios');


// website: 'lafitness.com',
// hours: 'Mon 6am-10pm | Tue 6am-10pm | Wed 6am-10pm | Thu 6am-10pm | Fri 6am-10pm | Sat 6am-10pm | Sun 6-8pm',
// image: 'https://mvpuploadimg.s3-us-west-1.amazonaws.com/Screen+Shot+2020-04-17+at+1.02.13+PM.png',
// phone: '(909) 595-0045',

// faker.random.number({min: 0, max: 20}),
// Number(faker.finance.amount(0, 5, 1))

const storeRealGymData = (data, zipcode) => {
  let result = [];
  for (var i = 0; i < data.length; i++) {
    let gym = {
      name: data[i].name,
      address: data[i].vicinity,
      zip: zipcode,
      num_of_rating: data[i].user_ratings_total || 0,
      rating: data[i].rating || 0
    };
    result.push(gym);
  }
  return result;
};

let data;

axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${db.latitude},${db.longitude}&radius=3000&type=gym&key=${key}`)
  .then((response) => {
    data = response.data.results;
    data = storeRealGymData(data, 91765);
    console.log(data);
  })
  .catch((err) => console.error(err));

// let dbData = [];


// console.log(faker.address.streetAddress())

