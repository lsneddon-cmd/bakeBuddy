// Assign DOM elements variables
// Pages
const pageOne = document.getElementById('first-window');
const pageTwo = document.getElementById('second-window');
const pageThree = document.getElementById('third-window');
const pageFour = document.getElementById('fourth-window');
const pageFive = document.getElementById('fifth-window');
// Ingredient buttons
const flourBtn = document.getElementById('flour-button');
const sugarBtn = document.getElementById('sugar-button');
const butterBtn = document.getElementById('butter-button');
const cocoaBtn = document.getElementById('cocoa-button');
const liquidBtn = document.getElementById('liquid-button');
// System Buttons
const impBtn = document.getElementById('imp');
const usBtn = document.getElementById('us');
// Volume Buttons
const cupsBtn = document.getElementById('cups');
const tspBtn = document.getElementById('tsp');
const tbspBtn = document.getElementById('tbsp');
const flOzBtn = document.getElementById('floz');
const flDBtn = document.getElementById('fld');
// Value input and calculate Button
const inputValue = document.getElementById('input-value');
const calcBtn = document.getElementById('calculate');
// Output Screen Reset Button
const resetBtn = document.getElementById('reset-button');
// Output Text
outputText = document.getElementById('output-text');

// Global Variables
let ingredient;
let system;
let volume;
let userInput;

// Ingredients Specific Weight
const ingredientWeights = {
  "flour": 0.42268,
  "sugar": 0.8,
  "cocoa": 0.528,
  "butter": 0.955,
  "almond-flour": 0.406,
  "rice-flour": 0.68
}

// Volume conversion tables
const imperialVolumeRates = {
  "cups": 284,
  "tsp": 5,
  "tbsp": 17.7582,
  "flD": 3.696691,
  "flOz": 28.4131
}
const usLegalVolumeRates = {
  "cups": 240.131,
  "tsp": 5,
  "tbsp": 14.7868,
  "flD": 3.696691,
  "flOz": 29.57344
}

// Functions
// Next cycle through pages
const nextPage = (currentPage, nextPage) => {
  currentPage.classList.add('inactive-window');
  currentPage.classList.remove('active-window');
  nextPage.classList.add('active-window');
  nextPage.classList.remove('inacitve-window');
};

// Convert imperial to metric volume
const convertVolume = (system, type, amount) => {
  let conversionRate;
  if (system ==='imp') {
    for (let [key, value] of Object.entries(imperialVolumeRates)){
      if (key === type) {
        conversionRate = value;
      }
    }
    } else if (system === 'us') {
      for (let [key, value] of Object.entries(imperialVolumeRates)){
        if(key === type){
          conversionRate = value;
        }
      }
  }
  return conversionRate * amount;
}

// Convert volume to weight
const volumeToWeight = () => {
  // parameters
  // loop through ingredients object to lookup correct conversion rate
}

// Calculate and display Output
const calculateOutput = (ingredient, system, volume, userInput) => {
  const convertedVolume = convertVolume(system, volume, userInput);
  if (ingredient === 'liquid') {
    outputText.innerHTML = `${convertedVolume}`;
  }
  
}

// Event Functions
// Page 1 Functions
const flourEvent = () => {
  ingredient = 'flour';
  nextPage(pageOne, pageTwo);
}
const sugarEvent = () => {
  ingredient = 'sugar'
  nextPage(pageOne, pageTwo)
};
const butterEvent = () => {
  ingredient = 'butter';
  nextPage(pageOne, pageTwo)
};
const cocoaEvent = () => {
  ingredient = 'cocoa';
  nextPage(pageOne, pageTwo)
};
const liquidEvent = () => {
  ingredient = 'liquid';
  nextPage(pageOne, pageTwo)
};
// Page 2 Functions
const imperialEvent = () => {
  system = 'imp';
  nextPage(pageTwo, pageThree);
}
const usLegalEvent = () => {
  system = 'us';
  nextPage(pageTwo, pageThree)
}
// Page 3 Functions
const cupsEvent = () => {
  volume = 'cups';
  nextPage(pageThree, pageFour);
}
const tspEvent = () => {
  volume = 'tsp';
  nextPage(pageThree, pageFour);
}
const tbspEvent = () => {
  volume = 'tbsp';
  nextPage(pageThree, pageFour);
}
const flOzEvent = () => {
  volume = 'floz';
  nextPage(pageThree, pageFour);
}
const flDEvent = () => {
  volume = 'fld';
  nextPage(pageThree, pageFour);
}
// Page 4 Functions
function inputEvent(e) {
  userInput = e.target.value;
}
const calcBtnEvent = () => {
  calculateOutput(ingredient, system, volume, userInput);
  nextPage(pageFour, pageFive);
}
// Page 5 Functions
const resetEvent = () => {
  ingredient = '';
  system = '';
  volume = '';
  value = '';
  userInput = 0;
  nextPage(pageFive, pageOne);
}

// Event Handlers
// Page 1 - Ingredient button Event Handlers 
flourBtn.addEventListener("click", () =>{flourEvent()});
sugarBtn.addEventListener("click", () =>{sugarEvent()});
butterBtn.addEventListener("click", () =>{butterEvent});
cocoaBtn.addEventListener("click", () =>{cocoaEvent()});
liquidBtn.addEventListener("click", () =>{liquidEvent()});
// Page 2 - Measurement system Event Handlers
impBtn.addEventListener("click", () =>{imperialEvent()});
usBtn.addEventListener("click", () =>{usLegalEvent()});
// Page 3 - Volume Button Event Handlers
cupsBtn.addEventListener("click", () =>{cupsEvent()});
tspBtn.addEventListener("click", () =>{tspEvent()});
tbspBtn.addEventListener("click", () =>{tbspEvent()});
flOzBtn.addEventListener("click", () =>{flOzEvent()});
flDBtn.addEventListener("click", () =>{flDEvent()});
// Page 4 - Value Event Handlers
calcBtn.addEventListener("click", () =>{calcBtnEvent()});
inputValue.addEventListener("change", inputEvent);
// Page 5 - Output Event Handlers
resetBtn.addEventListener("click", () =>{resetEvent()});