const fs = require('fs');
var text = fs.readFileSync('users.json', 'utf-8');
var profiles = JSON.parse(text);
console.log(profiles.length);
// console.log(profiles[0]);
let user = {
  name: 'Jesse Farmer',
  email: 'jesse@20bits.com',
  gender: 'M',
  location: 'San Francisco, CA',
  birthYear: 1983,
}
//console.log(profiles);
// let everyUser = [
//   user1,
//   user2,
//   user3,
//   user4,
//   user5,
// ];
/*
Use JSON.stringify to turn a JavaScript objects into a string that you can write to a file
Use JSON.parse to turn a JSON string into the corresponding JavaScript object
*/
function filter(array, checkFn) {
  let results = [];
  for (let item of array) {
    if (checkFn(item)) {
      results.push(item);
    }
  }
  return results;
}
function isMale(user) {
  return user.gender === 'M';
}
function age(user) {
  let age = 2020 - user.birthYear;
  return age === userAgePreference
}

// These three all do the same thing.
 let allMen = filter(profiles, isMale);
 console.log(`there are ${allMen.length} matches`);
