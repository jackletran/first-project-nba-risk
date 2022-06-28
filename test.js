const stephCurry = {
  team: null,
  boostUnits: 0,
  stateInfo: {
    statesArray: [],
    statesCount: 0,
    unitsInThatState: {
      TX: 0,
      WA: 0,
      OR: 0,
      ID: 0,
      MT: 0,
      WY: 0,
      CA: 0,
      HI: 0,
      AK: 0,
      NV: 0,
      UT: 0,
      CO: 0,
      NM: 0,
      AZ: 0,
      ND: 0,
      SD: 0,
      NE: 0,
      KS: 0,
      OK: 0,
      MN: 0,
      IA: 0,
      MO: 0,
      AR: 0,
      LA: 0,
      WI: 0,
      IL: 0,
      MI: 0,
      IN: 0,
      OH: 0,
      AL: 0,
      KY: 0,
      MS: 0,
      TN: 0,
    },
  },
};

const kyrieIrving = {
  team: null,
  boostUnits: 0,
  stateInfo: {
    statesArray: [],
    statesCount: 0,
    unitsInThatState: {
      TX: 0,
      WA: 0,
      OR: 0,
      ID: 0,
      MT: 0,
      WY: 0,
      CA: 0,
      HI: 0,
      AK: 0,
      NV: 0,
      UT: 0,
      CO: 0,
      NM: 0,
      AZ: 0,
      ND: 0,
      SD: 0,
      NE: 0,
      KS: 0,
      OK: 0,
      MN: 0,
      IA: 0,
      MO: 0,
      AR: 0,
      LA: 0,
      WI: 0,
      IL: 0,
      MI: 0,
      IN: 0,
      OH: 0,
      AL: 0,
      KY: 0,
      MS: 0,
      TN: 0,
    },
  },
};

const statesLoopArray = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CZ",
  "CO",
  "CT",
  "DE",
  "DC",
  "FL",
  "GA",
  "GU",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "PR",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VI",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];

function rollDice() {
  rollAttackerDice();
  rollDefenderDice();
  compareDice();
}

function rollAttackerDice() {
  let attack1 = 1 + Math.floor(6 * Math.random());
  const die1Collection = document.getElementsByClassName("attack-die-one");
  const die1Array = [...die1Collection];
  die1Array.forEach((element) => (element.innerHTML = attack1));

  let attack2 = 1 + Math.floor(6 * Math.random());
  const die2Collection = document.getElementsByClassName("attack-die-two");
  const die2Array = [...die2Collection];
  die2Array.forEach((element) => (element.innerHTML = attack2));

  let attack3 = 1 + Math.floor(6 * Math.random());
  const die3Collection = document.getElementsByClassName("attack-die-three");
  const die3Array = [...die3Collection];
  die3Array.forEach((element) => (element.innerHTML = attack3));

  resultAttack = [attack1, attack2, attack3];

  resultAttack.sort((a, b) => b - a);

  return resultAttack;
}

function rollDefenderDice() {
  let defense1 = 1 + Math.floor(6 * Math.random());
  const die4Collection = document.getElementsByClassName("defense-die-one");
  const die4Array = [...die4Collection];
  die4Array.forEach((element) => (element.innerHTML = defense1));

  let defense2 = 1 + Math.floor(6 * Math.random());
  const die5Collection = document.getElementsByClassName("defense-die-two");
  const die5Array = [...die5Collection];
  die5Array.forEach((element) => (element.innerHTML = defense2));

  resultDefense = [defense1, defense2];

  resultDefense.sort((a, b) => b - a);

  return resultDefense;
}

function compareDice() {
  let finalResult;
  let innerResultCollection;
  let innerResultArray;
  switch (true) {
    case resultAttack[0] > resultDefense[0] &&
      resultAttack[1] > resultDefense[1]:
      finalResult = "Offense wins both!!!";
      innerResultCollection = document.getElementsByClassName("inner-result");
      innerResultArray = [...innerResultCollection];
      innerResultArray.forEach((element) => (element.innerHTML = finalResult));
      break;
    case resultAttack[0] <= resultDefense[0] &&
      resultAttack[1] <= resultDefense[1]:
      finalResult = "Defense wins both!!!";
      innerResultCollection = document.getElementsByClassName("inner-result");
      innerResultArray = [...innerResultCollection];
      innerResultArray.forEach((element) => (element.innerHTML = finalResult));
      break;
    case resultAttack[0] > resultDefense[0] &&
      resultAttack[1] <= resultDefense[1]:
      finalResult = "Offense wins first, Defense wins second!!!";
      innerResultCollection = document.getElementsByClassName("inner-result");
      innerResultArray = [...innerResultCollection];
      innerResultArray.forEach((element) => (element.innerHTML = finalResult));
      break;
    case resultAttack[0] <= resultDefense[0] &&
      resultAttack[1] > resultDefense[1]:
      finalResult = "Defense wins first, Offense wins second!!!";
      innerResultCollection = document.getElementsByClassName("inner-result");
      innerResultArray = [...innerResultCollection];
      innerResultArray.forEach((element) => (element.innerHTML = finalResult));
      break;
    default:
      console.log("something is wrong, you are terrible");
      break;
  }
}

function attachBoostEventListener() {
  const getInnerResultBox = document.getElementById("inner-result");
  const svgGameboard = document.getElementById("svg");
  const boostButtonCollection = document.getElementsByClassName("boost");
  const boostButtonArray = [...boostButtonCollection];
  const boostButtonSelect = boostButtonArray[0];
  let selectedState;
  let boostLeftover = stephCurry.boostUnits;
  let howManyUnitsYouHavePlaced = 0;
  const stephCurryStates = Object.keys(stephCurry.stateInfo.unitsInThatState);
  const stephCurryUnitsInThatState = Object.values(
    stephCurry.stateInfo.unitsInThatState
  );

  boostButtonSelect.addEventListener(
    "click",
    () => {
      // add 3 units
      boostLeftover += 20; // wie kann man das nur 1x erlauben
      selectedState = event.target.id;
      getInnerResultBox.innerHTML = `You have ${boostLeftover} Units left.`;
      resetDice();
    },
    { once: true }
  );

  svgGameboard.addEventListener("click", () => {
    // place unit on "selected State"
    if (boostLeftover > 0) {
      boostLeftover--;
      selectedState = event.target.id;
      for (let i = 0; i < stephCurryStates.length; i++) {
        if (stephCurryStates[i].includes(selectedState)) {
          let stateText = document.getElementById(
            `${stephCurryStates[i]}-text`
          );
          stephCurry.stateInfo.unitsInThatState[`${selectedState}`]++;
          stateText.innerHTML =
            stephCurry.stateInfo.unitsInThatState[`${selectedState}`];
        }
      }
      howManyUnitsYouHavePlaced++;
      getInnerResultBox.innerHTML = `You placed ${howManyUnitsYouHavePlaced} units on ${selectedState}. You have ${boostLeftover} units left.`;
      displayUnits();
      resetDice();
    } else {
      getInnerResultBox.innerHTML = `You have used up all your units!`;
      resetDice();
    }
  });
}

//
//
//
//
// Info Console log
//
//
//
//

console.log(stephCurry.team);
console.log(stephCurry.boostUnits);
console.log(stephCurry.stateInfo);
console.log(stephCurry.stateInfo.statesArray);
console.log(stephCurry.stateInfo.statesCount);
console.log(stephCurry.stateInfo.unitsInThatState);
console.log(stephCurry.stateInfo.unitsInThatState.TX);
console.log(stephCurry.stateInfo.unitsInThatState.UT);

console.log(Object.keys(stephCurry.stateInfo.unitsInThatState));
console.log(Object.values(stephCurry.stateInfo.unitsInThatState));

function attachOffenseEventListener() {
  const offenseButtonCollection = document.getElementsByClassName("offense");
  const offenseButtonArray = [...offenseButtonCollection];
  const offenseButtonSelect = offenseButtonArray[0];
  offenseButtonSelect.addEventListener("click", () => rollDice());
}

function attachEndturnEventListener() {
  const endturnButtonCollection = document.getElementsByClassName("endturn");
  const endturnButtonArray = [...endturnButtonCollection];
  const endturnButtonSelect = endturnButtonArray[0];

  endturnButtonSelect.addEventListener("click", () => {
    // display "End turn"
    finalResult = "The Warriors ended their turn.";
    innerResultCollection = document.getElementsByClassName("inner-result");
    innerResultArray = [...innerResultCollection];
    innerResultArray.forEach((element) => (element.innerHTML = finalResult));
    resetDice();
  });
}

function attachSelectedStateEventListener() {
  const getInnerResultBox = document.getElementById("inner-result");
  const svgGameboard = document.getElementById("svg");
  let selectedState;

  svgGameboard.addEventListener("click", (event) => {
    // display "selected State"
    console.log("You clicked on this selectedState: " + event.target.id);
    selectedState = event.target.id;
    getInnerResultBox.innerHTML = `You have selected: ${selectedState}`;
    resetDice();
    showCoords(event);
  });
} // AAAAAAAAAAAAAAAA if it's offense phase, attach attachSelectedStateEventListener

function attachAllEventListeners() {
  attachBoostEventListener();
  attachOffenseEventListener();
  attachEndturnEventListener();
}

function displayUnits() {
  const kyrieStateArray = Object.keys(kyrieIrving.stateInfo.unitsInThatState);
  const kyrieUnitsArray = Object.values(kyrieIrving.stateInfo.unitsInThatState);
  const stephStateArray = Object.keys(stephCurry.stateInfo.unitsInThatState);
  const stephUnitsArray = Object.values(stephCurry.stateInfo.unitsInThatState);
  // SVG Data
  // Add image icon
  var logoWarriors = "./Images/Icons/gsw-logo.png";
  var logoNets = "./Images/Icons/brooklyn_logo.png";
  // const targetSvg = document.getElementById("svg");
  // let newImage = document.createElement("image");
  // newImage.setAttribute("x", "385");
  // newImage.setAttribute("y", "285");
  // newImage.setAttribute("href", "./Images/Icons/gsw-logo.png");
  // targetSvg.appendChild(newImage);

  // Kyrie
  for (let i = 0; i < kyrieStateArray.length; i++) {
    let stateText = document.getElementById(`${kyrieStateArray[i]}-text`);
    let stateArea = document.getElementById(kyrieStateArray[i]);
    var stateIcon = document.getElementById(`${kyrieStateArray[i]}-icon`);

    if (kyrieUnitsArray[i] > 0) {
      stateText.innerHTML = `${kyrieUnitsArray[i]}`;
      stateText.style.fill = "var(--nets-black)";
      stateArea.style.fill = "var(--nets-white)";
      // Add image icon
      stateIcon.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "href",
        logoNets
      );
    }
  }

  for (let c = 0; c < stephStateArray.length; c++) {
    let stateText = document.getElementById(`${stephStateArray[c]}-text`);
    let stateArea = document.getElementById(stephStateArray[c]);
    var stateIcon = document.getElementById(`${stephStateArray[c]}-icon`);

    if (stephUnitsArray[c] > 0) {
      stateText.innerHTML = `${stephUnitsArray[c]}`;
      stateText.style.fill = "var(--warriors-gold)";
      stateArea.style.fill = "var(--warriors-blue)";
      // Add image icon
      stateIcon.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "href",
        logoWarriors
      );
    }
  }
}

function resetDice() {
  // reset the dice
  const dieCollection = document.getElementsByClassName("die");
  const dieArray = [...dieCollection];
  dieArray.forEach((element) => (element.innerHTML = "?"));
}

function showCoords(event) {
  var x = event.screenX;
  var y = event.screenY;
  var coords = "X coords: " + x + ", Y coords: " + y;
  console.log(coords);
  document.getElementById("coordinates").innerHTML = coords;
}

displayUnits();
attachAllEventListeners();
// attachSelectedStateEventListener();
