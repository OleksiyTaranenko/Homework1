console.log('Hi teacher, let me introduce myself a little..');
console.log('Just a little, I promise :)');

let name = 'Oleksii';
let surname = 'Taranenko';
let age = 32;
let profession = 'event organizer';
let amIDrugDealer = false;
let hobby = 'writing';
let exHobby = 'boxing';
let numberOfTeeth = 32;
let amILucky = true;
let mainGoal = `${hobby} best-seller`;
let mainDream = 'create a happy family and grow one or two geniuses';
let didISeeYetti = false;
let didISeeUfo = true;
let flightsToMoon = 100 - 100;
let votedForZelensky = null;
let amIAshamed = true;

console.log(name, typeof name);
console.log(surname, typeof surname);
console.log(age, typeof age);
console.log(profession, typeof profession);
console.log(amIDrugDealer, typeof amIDrugDealer);
console.log(hobby, typeof hobby);
console.log(exHobby, typeof exHobby);
console.log(numberOfTeeth, typeof numberOfTeeth);
console.log(amILucky, typeof amILucky);
console.log(mainGoal, typeof mainGoal);
console.log(mainDream, typeof mainDream);
console.log(didISeeYetti, typeof didISeeYetti);
console.log(didISeeUfo, typeof didISeeUfo);
console.log(flightsToMoon, typeof flightsToMoon);
console.log(votedForZelensky, typeof votedForZelensky);
console.log(amIAshamed, typeof amIAshamed);


let aboutMe = {
    firstName: 'Oleksii',
    lastName: 'Taranenko',
    age: 32,
    sex: 'male',
    height: 172,
    weight: 75,
    doILikeToCook: true,
    favoriteRecipe: 'boiled eggs with adding pinch of salt',
    doILikeCinema: true,
    favoriteScreenwriter: 'Quentin Tarantino',
    collectionOfMovies: 128,
    favoriteUkrainianDish: 'borsch',
    favoriteKoreanDish: null,
    doILikeSport: true,
    favoriteKindOfSport: 'chess',
};

console.log(aboutMe);


let userNamePromptModal = prompt('Hi what is your name?');
console.log(userNamePromptModal, typeof userNamePromptModal);

alert('Welcome, ' + (userNamePromptModal) + ', I have few questions for you :)');

let userAgePromptModal = prompt('How old are you, '+ (userNamePromptModal) + '?');
console.log(userAgePromptModal, typeof userAgePromptModal);

let userHobbiesPromptModal = prompt((userNamePromptModal) + ', what hobbies do you have?');
console.log(userHobbiesPromptModal, typeof userHobbiesPromptModal);

let cinemaQuestionConfirmModal = confirm('Okay, ' + (userNamePromptModal) + ', let\'s talk more seriously, do you like when other cinema spectators eat popcorn loudly at the cinema?');
console.log(cinemaQuestionConfirmModal, typeof cinemaQuestionConfirmModal);

let favoriteNamePromptModal = prompt('Tell me please, ' + (userNamePromptModal) + ', what is your favorite female name?');
console.log(favoriteNamePromptModal, typeof favoriteNamePromptModal);

let cityNameConfirmModal = confirm('Oh, ' + (userNamePromptModal) + ', do you want to rename your city into ' + (favoriteNamePromptModal) + '-city?');
console.log(cityNameConfirmModal, typeof cityNameConfirmModal);

alert('WinRAR: Please buy our license. Finally we catch you, ' + (userNamePromptModal) + '!');

let winrarQuestionConfirmModal = confirm('WinRAR: We are once again asking for your financial support. ' + (userNamePromptModal) + ', can you pay now?');
console.log(winrarQuestionConfirmModal, typeof winrarQuestionConfirmModal);

alert('OK, you can still use our program, but tomorrow we will ask again');