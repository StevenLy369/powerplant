import { changeState, stateChanger } from './plant.js';

const feed = changeState("soil");
const blueFood = changeState("soil")(5);

const hydrate = changeState("water");
const sprinkle = changeState("water")(5);

const giveLight = changeState("light");
const sparkle = changeState("light")(100);


const newPlant = changeState("name");
const bobby = changeState("name")("bobby");







$(document).ready(function () {

  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect.
  $('#feed').click(function() {
    const newState = stateChanger(blueFood);
    $('#soil-value').text(newState.soil);
    console.log("hi im feeding");
  });

  $('#water').click(function () {
    const newState = stateChanger(sprinkle);
    $('#water-value').text(newState.water);
    console.log("hi im watering");

  });
  
  $('#light').click(function () {
    const newState = stateChanger(sparkle);
    $('#light-value').text(newState.light);
    console.log("hi im watering");

  });

  $('#bobby').click(function() {
    const newState = stateChanger(bobby);
    $('#name-value').text(newState.name)
  })


});

