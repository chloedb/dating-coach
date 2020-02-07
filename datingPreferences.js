let readlineSync = require('readline-sync');
let allUsers = [];
let user = {}

function runningApp() {
  let answer = readlineSync.question('Would you like to find your soulmate? (Yes or No) ')
  if (answer === 'Yes' || answer === 'yes') {
    newUser();
  }
  else {
    console.log('Thanks for stopping by!')
  }
}

function newUser() {
  let wholeUser = [];
  let user = {
    firstName: readlineSync.question('What is your name? '),
    gender: characteristicGender(['Male', 'Female', 'Other']),
    Age: characteristicAge(['18-23', '24-28', '29-33', '34-38','39-45', '46-55','>55']),
    Eyecolor: characteristicEyecolor(['Blue','Green','Brown','Purple'])
  };

  wholeUser.push(user);

  console.log();
  console.log(user.firstName,',' ,user.gender,',', user.Age, ',', user.Eyecolor);

  let answerOne = ''
  answerOne = readlineSync.question('Is your information right? (Yes or No) ');

  if (answerOne === 'Yes' || answerOne === 'yes') {
    console.log();
    console.log(`Great ${user.firstName}! We are almost done. Now please share with us your preferences: `)
    console.log();
} else {
    console.log('Okay, let us start over... ');
    newUser();
  }

  let preferences = {
    Gender: preferenceGender(['Male', 'Female', 'No preference']),
    Age: preferenceAge(['18-23', '24-28', '29-33', '34-38','39-45', '46-55','>55']),
    Eyecolor: preferenceEyecolor(['Blue','Green','Brown','Purple'])
  };

wholeUser.push(preferences);
allUsers.push(wholeUser);
console.log(preferences.Gender,',', preferences.Age, ',', preferences.Eyecolor);

let answerTwo = readlineSync.question('Are your preferences right? (Yes or No) ');

  if (answerTwo === 'Yes'|| answerTwo === 'yes'){
    console.log();
    console.log('Awesome! Give us a few moments to match you with your possible soulmates.')
    console.log();
    console.log(`We are all set ${user.firstName}!`);
    // console.log('We found' + matches + 'matches for you! So exciting!!! So many fun adventures ahead!');
  }
  // else {
  //   let preferenceStatus = readlineSync.question('What is wrong? Gender (g), age (a), or eye color (e)? ')
  //     if (preferenceStatus === 'g') {
  //       let choice = readlineSync.question('What gender do you dream your soulmate to have? ')
  //   }
  // }
}

function characteristicGender(gender) {
  for (let i = 0; i < gender.length; i += 1) {
    console.log(`[${i + 1}] ${gender[i]}`);
  }
  let choice = readlineSync.question('What is your gender? ')
  console.log();
  return gender[choice - 1];
}

 function characteristicAge(age){
  for (let i = 0; i < age.length; i += 1) {
    console.log(`[${i + 1}] ${age[i]}`);
  }
  let choice = readlineSync.question('How old are you? ')
  console.log();
  return age[choice -1];
}

function characteristicEyecolor(eyecolor){
  for (let i = 0; i < eyecolor.length; i += 1) {
    console.log(`[${i + 1}] ${eyecolor[i]}`);
  }
  let choice = readlineSync.question('What color eyes do you have? ');
  console.log();
  return eyecolor[choice - 1];
}

function preferenceGender(gender) {
  for (let i = 0; i < gender.length; i += 1) {
    console.log(`[${i + 1}] ${gender[i]}`);
   }
  let choice = readlineSync.question('What gender do you dream your soulmate to have? ')
  console.log();
  return gender[choice - 1];
}

function preferenceAge(age){
  for (let i = 0; i < age.length; i += 1) {
    console.log(`[${i + 1}] ${age[i]}`);
  }
  let choice = readlineSync.question('How old do you dream your soulmate to be? ')
console.log();
    return age[choice -1];
}
function preferenceEyecolor(eyecolor){
  for (let i = 0; i < eyecolor.length; i += 1) {
    console.log(`[${i + 1}] ${eyecolor[i]}`);
  }
  let choice = readlineSync.question('What color eyes do you dream your soulmate to have? ');
  console.log();
  return eyecolor[choice -1];
}

    function isGender(user, preferenceGender) {
      return user.gender === preferenceGender;
    }
    function isAge(user, preferenceAge) {
      return user.Age === preferenceAge;
    }
    function isEyecolor(user, preferenceEyecolor){
      return user.Eyecolor === preferenceEyecolor
    }

console.log(runningApp());
