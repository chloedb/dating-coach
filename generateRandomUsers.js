let faker = require('faker');

function randomRange(min,max) {
  return Math.floor(Math.random() * (max-min) + min );
}

function randomElement(array) {
  return array[randomRange(0,array.length)];
}

function generateRandomUser() {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    gender: randomElement(['Male', 'Female', 'Other',]),
    Eyecolor: randomElement(['Blue', 'Green', 'Brown', 'Purple']),
    Age: randomRange(18,50),

  }
}

let users = [];

for (let i = 0; i < 200; i++) {
  users.push(generateRandomUser());
}

console.log(JSON.stringify(users));
