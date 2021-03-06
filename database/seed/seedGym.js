const faker = require('faker');
const zipcodes = require('zipcodes');
const key = require('../env/key').googleAPI;
const axios = require('axios');
const gymNames = require('../data/gymNames');
const Gym = require('../').gym;
const hours =
  'Mon 6am-10pm | Tue 6am-10pm | Wed 6am-10pm | Thu 6am-10pm | Fri 6am-10pm | Sat 6am-10pm | Sun 6-8pm';

const storeRealGymData = (data, zipcode) => {
  let result = [];
  for (const obj of data) {
    let gym = {
      name: obj.name,
      address: obj.vicinity,
      zip: zipcode,
      website: `${obj.name
        .split(' ')
        .join('')
        .toLowerCase()}.com`,
      hours,
      image: faker.image.sports(),
      phone: faker.phone.phoneNumberFormat(1),
      price: `$${faker.random.number({ min: 15, max: 100 }).toString()}/month`,
      num_of_rating: obj.user_ratings_total || 0,
      rating: obj.rating || 0
    };
    result.push(gym);
  }
  return result;
};

const generateFakeData = (data, zipcode) => {
  const length = data.length;
  const place = zipcodes.lookup(zipcode);
  if (length < 20) {
    const remain = 20 - length;
    for (var i = 0; i < remain; i++) {
      let gym = {
        name: gymNames[i],
        address: `$${faker.address.streetAddress()}, ${place.city}, ${
          place.state
        } ${zipcode}`,
        zip: zipcode,
        website: `${gymNames[i]
          .split(' ')
          .join('')
          .toLowerCase()}.com`,
        hours,
        image: faker.image.sports(),
        phone: faker.phone.phoneNumberFormat(1),
        price: `${faker.random.number({ min: 15, max: 100 }).toString()}/month`,
        num_of_rating: faker.random.number({ min: 0, max: 20 }),
        rating: Number(faker.finance.amount(0, 5, 1))
      };
      if (gym.num_of_rating === 0) {
        gym.rating = 0;
      }
      data.push(gym);
    }
  }
  return data;
};

const getGymDataAndSeed = (zipcode) => {
  const place = zipcodes.lookup(zipcode);
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${place.latitude},${place.longitude}&radius=5000&type=gym&key=${key}`
    )
    .then(response => {
      const realData = response.data.results;
      let data = storeRealGymData(realData, zipcode);
      data = generateFakeData(data, zipcode);
      return data;
    })
    .then(gymData => {
      gymData.forEach(data => Gym.create(data));
    })
    .catch(err => console.error(err));
};

const places = [91765, 90014, 10001, 94102];
places.forEach(zipcode => getGymDataAndSeed(zipcode));
