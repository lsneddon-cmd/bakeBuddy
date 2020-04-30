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
// Value input calclulate Button
const calcBtn = document.getElementById('calculate');
// Output Screen Reset Button
const resetBtn = document.getElementById('reset-button');
// Output Text
outputText = document.getElementById('outut-text');


// Ingredients Object
const ingredients = {
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
const nextPage = (currentPage, nextPage) =>{
  currentPage.classList.add('inactive-window');
  currentPage.classList.remove('active-window');
  nextPage.classList.add('active-window');
  nextPage.classList.remove('inacitve-window');
};

// Calculate and display Output
const calculateOutput = () =>{
  let output = "Whoopsie! There was an error! <p>Please refresh your browser and try again</p>";
  outputText.innerHTML = `${output}`;
}

// Event Functions
// Page 1 Functions
const flourEvent = () =>{

  nextPage(pageOne, pageTwo);
}
const sugarEvent= () =>{

  nextPage(pageOne, pageTwo)
};
const butterEvent= () =>{

  nextPage(pageOne, pageTwo)
};
const cocoaEvent= () =>{

  nextPage(pageOne, pageTwo)
};
const liquidEvent= () =>{

  nextPage(pageOne, pageTwo)
};
// Page 2 Functions
const imperialEvent=()=>{

  nextPage(pageTwo, pageThree);
}
const usLegalEvent=()=>{

  nextPage(pageTwo, pageThree)
}
// Page 3 Functions
// Page 4 Functions
const calcBtnEvent = () =>{
  calculateOutput();
  nextPage(pageFour, pageFive);
}
// Page 5 Functions

// Event Handlers
// Page 1 - Ingredient button Event Handlers 
flourBtn.addEventListener("click", () =>{flourEvent()});
sugarBtn.addEventListener("click", () =>{liquidEvent()});
butterBtn.addEventListener("click", () =>{butterEvent});
cocoaBtn.addEventListener("click", () =>{cocoaEvent()});
liquidBtn.addEventListener("click", () =>{liquidEvent()});

// Page 2 - Measurement system Event Handlers
impBtn.addEventListener("click", () =>{imperialEvent()});
usBtn.addEventListener("click", () =>{usLegalEvent()});

// Page 3 - Volume Button Event Handlers
cupsBtn.addEventListener("click", () =>{
  nextPage(pageThree, pageFour)
});

tspBtn.addEventListener("click", () =>{
  nextPage(pageThree, pageFour)
});

tbspBtn.addEventListener("click", () =>{
  nextPage(pageThree, pageFour)
});

flOzBtn.addEventListener("click", () =>{
  nextPage(pageThree, pageFour)
});

flDBtn.addEventListener("click", () =>{
  nextPage(pageThree, pageFour)
});

// Page 4 - Value Event Handers
calcBtn.addEventListener("click", () =>{calcBtnEvent()});



// Page 5 - Output Event Handlers
resetBtn.addEventListener("click", () =>{
  nextPage(pageFive, pageOne)
});