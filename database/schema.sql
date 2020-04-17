DROP DATABASE IF EXISTS profile;

CREATE DATABASE profile;

\c profile;

DROP TABLE IF EXISTS info;
DROP TABLE IF EXISTS gym;
DROP TABLE IF EXISTS trainer;
DROP TABLE IF EXISTS hour;

CREATE TABLE info (
  id SERIAL,
  email VARCHAR NOT NULL,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  height VARCHAR NOT NULL,
  weight VARCHAR NOT NULL,
  age INT NOT NULL,
  gender VARCHAR NOT NULL,
  date_of_birth VARCHAR NOT NULL,
  zip INT NOT NULL,
  goal_w VARCHAR NOT NULL,
  weekly_goal VARCHAR NOT NULL,
  activity_lvl VARCHAR NOT NULL,
  workouts_per_wk INT NOT NULL,
  min_per_workout INT NOT NULL,
  profile_pic VARCHAR,
  cover_photo VARCHAR
);

CREATE TABLE gym (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  address VARCHAR NOT NULL,
  zip INT NOT NULL,
  website VARCHAR NOT NULL,
  phone VARCHAR NOT NULL,
  rating INT NOT NULL
);

CREATE TABLE trainer (
  id SERIAL,
  trainer_id INT NOT NULL,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  specialties VARCHAR NOT NULL,
  rating INT NOT NULL,
  FOREIGN KEY (trainer_id) REFERENCES gym (id)
);

CREATE TABLE hour (
  id SERIAL,
  hour_id INT NOT NULL,
  hours VARCHAR NOT NULL,
  FOREIGN KEY (hour_id) REFERENCES gym (id)
)