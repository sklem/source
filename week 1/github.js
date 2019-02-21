/*
Exercise File for Week 1 Source, see Week1.txt for details
*/

/*
These are functions, but why the weird syntax? The functions intake a particular list as a parameter.
*/

const personOne = favoriteFoods => {
  return favoriteFoods[Math.floor(Math.random()*favoriteFoods.length)];
};

const personTwo = favoriteMovies => {
  return favoriteMovies[Math.floor(Math.random()*favoriteMovies.length)];
};

const personThree = favoriteAnimals => {
  return favoriteAnimals[Math.floor(Math.random()*favoriteAnimals.length)];
};

/*
What does this variable syntax do? Classifies the constants as a list of any data type of elements.
*/
const favoriteFoods = ["spaghetti", "peas", "nectarines", "donuts", "steak"],
  favoriteMovies = ["Napoleon Dynamite", "School of Rock", "Nacho Libre", "Skyfall", "The Dark Knight"],
  favoriteAnimals = ["the Labrador Retriever Dog", "the Squirrel", "the Flying Ant", "the Red Tailed Hawk", "the Silverback Gorilla"];

const iceBreaker = () => {
  let food = personOne(favoriteFoods);
  let movie = personTwo(favoriteMovies);
  let animal = personThree(favoriteAnimals);
  console.log("A particular food that I like is " + food + ".");
  console.log("A particular movie that I like is " + movie + ".");
  console.log("A particular animal that I like is " + animal + ".");
};
iceBreaker();
