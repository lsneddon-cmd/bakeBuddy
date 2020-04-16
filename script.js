/*
    Lewis Sneddon
    Bake Buddy
    created 5th March 2020
*/

const cupSelect = document.getElementById("cup-select");
const flour = document.getElementById("flour");
const butter = document.getElementById("butter");
const cocoa = document.getElementById("cocoa");
const water = document.getElementById("water");

function calculateFlour(cupSelect) {
  flourResult = cupSelect * 150;
  window.alert(`There are ${flourResult}grams in ${cupSelect} cups of flour`);
}

function calculateButter(cupSelect) {
  butterResult = cupSelect * 227;
  window.alert(`There are ${butterResult}grams in ${cupSelect} cups of butter`);
}

function calculateCocoa(cupSelect) {
  cocoaResult = cupSelect * 100;
  window.alert(`There are ${cocoaResult}grams in ${cupSelect} cups of cocoa`);
}

function calculateWater(cupSelect) {
  waterResult = cupSelect * 237;
  window.alert(`There are ${waterResult}ml in ${cupSelect} cups of water`);
}

// Event listeners
cupSelect.addEventListener("change", function(e) {
  numberOfCups = e.target.value;
  return numberOfCups;
});

flour.addEventListener("click", function(e) {
  return calculateFlour(cupSelect.value);
});

butter.addEventListener("click", function(e) {
  return calculateButter(cupSelect.value);
});

cocoa.addEventListener("click", function(e) {
  return calculateCocoa(cupSelect.value);
});

water.addEventListener("click", function(e) {
  return calculateWater(cupSelect.value);
});
