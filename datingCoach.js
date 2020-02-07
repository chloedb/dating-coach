let readlineSync = require('readline-sync');
let process = require('process');

function newUser() {// firstName, lastName, gender, lookingFor) {
  let newUserProfile = [];

  newUserProfile['firstName'] = readlineSync.question('What is your first name?')
  newUserProfile['lastName'] = readlineSync.question('Last name?')
  newUserProfile['gender'] = readlineSync.question('What is your gender?')
  newUserProfile['lookingFor'] = readlineSync.question('What gender are you searching for? M is Male, F is Female, and N is neither')
  // console.log(newUserProfile['firstName'])
  console.log(`Welcome to DatingCoach, ${newUserProfile['firstName']}.`)
}

function userCharacteristics(name, gender, birthYear, email) {
  let user = {};

  user.name = name
  user.gender = gender
  user.birthYear = birthYear
  user.email = email

  return user
}

let allUsers = [
  userCharacteristics('Chris Kop', 'M', 1998, 'heythere@hi.com'),
  userCharacteristics('Glory', 'F', 1990, 'hithere@gmail.com')
]

function isMale(user) {
  console.log(user)
  return user.gender === 'M'
}

let allMen = allUsers.filter(isMale)

function isFemale(user) {
  return user.gender === 'F'
}



// console.log(userCharacteristics('Chris Kop', 'M', 1998, 'heythere@hi.com'));
// console.log(isMale(allMen));
// cannot do this because the other parameters are missing
// console.log(allMen);
