const faker = require('faker');
const specialties = require('../data/specialties');
const Trainer = require('../').trainer;

const generateSpecialties = () => {
  let specialtiesArr = [];
  let randomNumArr = [];
  for (var i = 0; i < 3; i++) {
    let randomIndex = faker.random.number({min: 0, max: 14});
    if (!randomNumArr.includes(randomIndex)) {
      randomNumArr.push(randomIndex);
      specialtiesArr.push(specialties[randomIndex]);
    } else {
      i--;
    }
  }
  return specialtiesArr.join(' | ');
};

const generateTrainerData = () => {
  let trainers = [];
  for (var i = 0; i < 40; i++) {
    let randomNum = 3 + Math.floor(Math.random() * 8);
    for (var j = 0; j < randomNum; j++) {
      let trainer = {
        trainer_id: i,
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        specialties: generateSpecialties(),
        image: faker.image.people(),
        num_of_rating: faker.random.number({min: 0, max: 20}),
        rating: Number(faker.finance.amount(0, 5, 1))
      };
      trainers.push(trainer);
    }
  }
  return trainers;
};

const seedTrainerData = () => {
  const trainers = generateTrainerData();
  trainers.forEach((trainer) => Trainer.create(trainer));
};

seedTrainerData();





