let process = require('process');
let chalk = require('chalk');

let readlineSync;
try {
  readlineSync = require('readline-sync');
} catch (err) {
  console.log('You must install the readline-sync module. Run the following');
  console.log('command to install it:');
  console.log();
  console.log('npm install');
  console.log();

  process.exit();
}
const fs = require('fs');

var text = fs.readFileSync('users.json', 'utf-8');
var profiles = JSON.parse(text);

let user = {
  firstName: readlineSync.question('What is your name? '),
  gender: characteristicGender(['Male', 'Female', 'Other']),
  Age: characteristicAge(['18-23', '24-28', '29-33', '34-38','39-45', '46-55','>55']),
  Eyecolor: characteristicEyecolor(['Blue','Green','Brown','Purple'])
};

  console.log();
  console.log(chalk.blue.bold('Here is your profile '));
  console.log('');
  console.log(' ');
  console.log(chalk.red.bold(`Name: ${user.firstName}`));
  console.log(chalk.blue.bold(`Gender: ${user.gender}`));
  console.log(chalk.bold(`Age: ${user.Age}`));
  console.log(chalk.green.bold(`EyeColor: ${user.Eyecolor}`));
  console.log('');

  function characteristicGender(gender) {
    for (let i = 0; i < gender.length; i ++) {
      console.log(`[${i + 1}] ${gender[i]}`);
    }
    let choice = readlineSync.question('What is your Gender?');
    console.log();

    return gender[choice - 1];
  }


   function characteristicAge(age){
    for (let i = 0; i < age.length; i += 1) {
      console.log(`[${i + 1}] ${age[i]}`);
    }
    let choice = readlineSync.question('How old are you? ')
    console.log();
    return age[choice - 1];
  }
  function characteristicEyecolor(eyecolor){
    for (let i = 0; i < eyecolor.length; i += 1) {
      console.log(`[${i + 1}] ${eyecolor[i]}`);
    }
    let choice = readlineSync.question('What color eyes do you have? ');
    console.log();
    return eyecolor[choice - 1];
  }

  console.log(chalk.red.bold(`Great now that you have created your profile, tell us your preferences!`));
  console.log(' ');

  let preferences = {
    Gender: preferenceGender(['Male', 'Female', 'Other']),
    Age: preferenceAge(['18-23', '24-28', '29-33', '34-38','39-45', '46-55','>55']),
    Eyecolor: preferenceEyecolor(['Blue','Green','Brown','Purple'])
  };

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

  console.log(chalk.green.bold('Here are your preferences!'));

  console.log(preferences.Gender,',', preferences.Age, ',', preferences.Eyecolor);

  console.log(chalk.bold('Now give us a few moments to match you with your possible soulmates.'));


  function filter(array, checkFn ,preferences) {
    let results = [];

    for (let item of array) {
      if (checkFn(item)) {
        results.push(item);

      }
    }

    return results;
  }


  function isAge(user) {
    if(preferences.Age === 18-23){
      return (18 <= user.Age <= 23);
    }
    if(preferences.Age === '24-28'){
      return (23 < user.Age <= 28);
    }
    if(preferences.Age === '29-33'){
      return (28 < user.Age <= 33);
    }
    else if(preferences.Age === '34-38'){
      return (33 < user.Age <= 38);
    }
    else if(preferences.Age === '39-45'){
      return (38 < user.Age <= 45);
    }
    else if(preferences.Age === '46-55'){
      return (45 < user.Age <= 55);
    }
    else if(preferences.Age === '>55'){
      return (55 < user.Age <= 130);
    }
    return false;


  }

  function matchesQuery(preferences, profile) {

    if(preferences.Gender === profile.gender && preferences.Eyecolor === profile.Eyecolor){
      return true;

    }


  }
  console.log(preferences.Age)
  function isEyeColor(user) {

    return user.Eyecolor === preferences.Eyecolor;
  }

  //let allGender = filter(profiles,isGender);
  //let allAge = filter(profiles,isAge);
  //console.log(allAge);
  // let allEyes = filter(profiles, isEyeColor);
  // let allGender = filter(allEyes,isGender);
  // console.log(allGender);
  function isProfileAMatch(profile){
    return matchesQuery(preferences,profile);
  }
  let matches = filter(profiles,isProfileAMatch);
  console.log('');
  console.log(matches);
  console.log('');
  console.log(chalk.red.bold(`You have ${matches.length} matches`));

  let match_name = readlineSync.question('Out of the profiles we matched you with, Enter the name of who you want to talk to! ');
  console.log('');
  console.log(' ');

  function contact(match_name){
  for(let item of profiles) {
    if(item.name === match_name) {
      return item.email;
    }
  }
}
  console.log(chalk.red.bold(`Here is their contact information:`), chalk.bold(`${contact(match_name)}`));
  console.log('HAVE A FUN TIME :)');
