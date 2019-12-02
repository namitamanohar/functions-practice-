// Age in Dog Years
const calculateAgeInDogYears = ageOfPerson => {
  const ageInDogYears = ageOfPerson / 7;
  console.log(ageInDogYears);

  return ageInDogYears;
};
const dogAge = calculateAgeInDogYears(22);
console.log(dogAge);
// Practice: Best in Show
// const dogEntered=window.prompt("What is your favorite dog breed?")
// const takeDogBreed = (dogBreedName) => {
//   if (dogBreedName=='meow'){
//     return "I like cats "
//   }else {
//   const dogSentence = "My favorite dog breed is " + dogBreedName;
//   return dogSentence
// }
// }
// const myFavorite = takeDogBreed(dogEntered)
// console.log("when it comes to pets " + myFavorite)

// Practice: Addition
const add = (number1, number2) => {
  const sum = number1 + number2;
  return sum;
};
const total = add(5, 4);
console.log(total);
// Practice Self Driving Cars
const go = (direction, speed) => {
  if (speed > 75) {
    const speedSentence =
      "The car is moving " + direction + " at " + speed + " mph. SLOW DOWN!!!!";
    return speedSentence;
  } else {
    const speedSentence =
      "The car is moving " + direction + " at " + speed + " mph";
    return speedSentence;
  }
};
console.log(go("forwards", 45));
// Practice: Even or Odds
var numberArray = [8, 17, 10, 5, 72, 81];
const evenOrOdd = number => {
  const remainder = number % 2;
  if (remainder == 0) {
    return "Even";
  } else if (remainder == 1) {
    return "Odd";
  }
};
for (const num of numberArray) {
  console.log(evenOrOdd(num));
}
// Practice: Double Functions
const words = [
  "The",
  "killing",
  "complex",
  "houses",
  "married",
  "kittens",
  "and",
  "single",
  "soldiers",
  "and",
  "their",
  "kleptomaniacal",
  "families"
];
const kwords = array => {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (!element.startsWith("k")) {
      newArray.push(element);
    }
  }
  return newArray;
};
console.log(kwords(words).join(" "));

// Practice: You Can Tune a Piano, But You Can't...
const chancesCatchingTuna = () => {
  const randomNumber = Math.random() * 2;
  console.log(randomNumber);
  if (randomNumber < 1 && randomNumber > 0) {
    return "Sven hooked a tuna";
  } else if (randomNumber > 1 && randomNumber < 2) {
    return "Sven came up empty handed";
  }
};
console.log(chancesCatchingTuna());

// Practice: Fast Food

const orderMeal = (sandwich, side, drink, dessert) => {
  const mealObject = {
    sandwich: sandwich,
    side: side,
    drink: drink,
    dessert: dessert
  };
  return mealObject;
};
console.log(
  orderMeal("Ultimate Slammer", "Fudge sundae", "Mr. Pepper", "Potato wedges")
);

// Practice: Same Chores, Different Days
const twice = number => number * 2;
const fiveTimes = number => number * 5;
const squared = number => number * number;
const cube = number => number * number * number;

const bigify = (number, operationFunction) => {
  const result = operationFunction(number);
  return result;
};
const number = 7;
const by2 = bigify(number, twice);
const by5 = bigify(number, fiveTimes);
const byItself = bigify(number, squared);
const byCubed = bigify(number, cube);
console.log(by2);
console.log(by5);
console.log(byItself);
console.log(byCubed);

const person ={
  firstName: "Namita",
  lastName: "Manohar"
}
const takeOutTrash = (personObject) => {
  return `${person.firstName} ${person.lastName}  take out the trash`;
}

const walkTheDog = (personObject) =>{
  return `${person.firstName} ${person.lastName} walk the dog`
}
const loadTheDishwasher =(personObject) => {
  return `${person.firstName} ${person.lastName} load the dishes`
}
const washAndFoldClothes =(personObject) => {
  return `${person.firstName} ${person.lastName} wash and fold clothes`
}
const vacuumTheFloor = (personObject) =>{
  return `${person.firstName} ${person.lastName} vacuum the floor`
}
const cleanFridge = (personObject) =>{
  return `${person.firstName} ${person.lastName} cleans fridge`
}

const dayPlanner = (chore, person, day) =>{
  const sentence = chore(person)
  return `${sentence} on ${day}`
}




console.log(dayPlanner(takeOutTrash,person,"Tuesday"))  





console.log(dayPlanner(walkTheDog,person, "Wednesday"))
console.log(dayPlanner(loadTheDishwasher,person, "Thursday"))
console.log(dayPlanner(vacuumTheFloor,person, "Friday"))
console.log(dayPlanner(cleanFridge,person, "Saturday"))
console.log(dayPlanner(washAndFoldClothes,person, "Sunday"))


const busyDayPlanner = (firstChore, secondChore, thirdChore, person, day) => {
  const chore1 =firstChore(person)
  const chore2 = secondChore(person)
  const chore3 =thirdChore(person) 
  return `On ${day} ${chore1}, and ${chore2}, and ${chore3}`
}

console.log(busyDayPlanner(takeOutTrash, walkTheDog, vacuumTheFloor, person, "Sunday"))


const words2 = [
  "The",
  "killing",
  "complex",
  "houses",
  "married",
  "kittens",
  "and",
  "single",
  "soldiers",
  "and",
  "their",
  "kleptomaniacal",
  "families"
];

const filterOutK = (arrayOfWords) =>{
  let wordsWithoutK =[]
  for (const word of arrayOfWords){
    if(!word.startsWith('k')){
      wordsWithoutK.push(word)
    }
  }
  return (wordsWithoutK.join(" "))
}
console.log(filterOutK(words2))

