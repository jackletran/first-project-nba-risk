const stephCurry = {
  team: null,
  boostUnits: 0,
  stateInfo: {
    statesArray: [],
    statesCount: 0,
    unitsInThatState: {
      SC: 0,
      SD: 0,
      TN: 0,
      TX: 1,
      UT: 2,
      VT: 3,
      VI: 4,
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
      WA: 2,
      OR: 2,
      ID: 2,
      MT: 2,
      WY: 2,
      CA: 2,
      HI: 2,
      AK: 2,
      NV: 2,
      CA: 2,
      CO: 2,
      NM: 2,
      AZ: 2,
      ND: 2,
      SD: 2,
      NE: 2,
      KS: 2,
      OK: 2,
      MN: 2,
      IA: 2,
      MO: 2,
      AR: 2,
      LA: 2,
      WI: 2,
      IL: 2,
      MI: 2,
      IN: 2,
      OH: 2,
      AL: 2,
      UT: 0,
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

function attachOffenseEventListener() {
  const offenseButtonCollection = document.getElementsByClassName("offense");
  const offenseButtonArray = [...offenseButtonCollection];
  const offenseButtonSelect = offenseButtonArray[0];
  offenseButtonSelect.addEventListener("click", () => rollDice());
}

function attachBoostEventListener() {
  const boostButtonCollection = document.getElementsByClassName("boost");
  const boostButtonArray = [...boostButtonCollection];
  const boostButtonSelect = boostButtonArray[0];

  // display "Boost stamina"
  boostButtonSelect.addEventListener("click", () => {
    finalResult = "The Warriors boost their stamina.";
    innerResultCollection = document.getElementsByClassName("inner-result");
    innerResultArray = [...innerResultCollection];
    innerResultArray.forEach((element) => (element.innerHTML = finalResult));

    // reset the dice
    const dieCollection = document.getElementsByClassName("die");
    const dieArray = [...dieCollection];
    dieArray.forEach((element) => (element.innerHTML = "?"));
  });
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
    // reset the dice
    const dieCollection = document.getElementsByClassName("die");
    const dieArray = [...dieCollection];
    dieArray.forEach((element) => (element.innerHTML = "?"));
  });
}

function attachSelectedStateEventListener() {
  const getInnerResultBox = document.getElementById("inner-result");
  const gameboard = document.getElementById("svg");
  let selectedState;

  gameboard.addEventListener("click", () => {
    // display "selected State"
    console.log("You clicked on this selectedState: " + event.target.id);
    selectedState = event.target.id;
    getInnerResultBox.innerHTML = `You have selected: ${selectedState}`;

    // reset the dice
    const dieCollection = document.getElementsByClassName("die");
    const dieArray = [...dieCollection];
    dieArray.forEach((element) => (element.innerHTML = "?"));
  });
}

function attachAllEventListeners() {
  attachOffenseEventListener();
  attachBoostEventListener();
  attachEndturnEventListener();
  attachSelectedStateEventListener();
}

console.log(stephCurry.team);
console.log(stephCurry.boostUnits);
console.log(stephCurry.stateInfo);
console.log(stephCurry.stateInfo.statesArray);
console.log(stephCurry.stateInfo.statesCount);
console.log(stephCurry.stateInfo.unitsInThatState);
console.log(stephCurry.stateInfo.unitsInThatState.SC);
console.log(stephCurry.stateInfo.unitsInThatState.SD);
console.log(stephCurry.stateInfo.unitsInThatState.TN);
console.log(stephCurry.stateInfo.unitsInThatState.TX);

console.log(Object.keys(kyrieIrving.stateInfo.unitsInThatState));
console.log(Object.values(kyrieIrving.stateInfo.unitsInThatState));

function changeText() {
  const kyrieStateArray = Object.keys(kyrieIrving.stateInfo.unitsInThatState);
  const kyrieUnitsArray = Object.values(kyrieIrving.stateInfo.unitsInThatState);
  const stephStateArray = Object.keys(stephCurry.stateInfo.unitsInThatState);
  const stephUnitsArray = Object.values(stephCurry.stateInfo.unitsInThatState);

  // Kyrie
  for (let i = 0; i < kyrieStateArray.length; i++) {
    let stateText = document.getElementById(`${kyrieStateArray[i]}-text`);
    let stateArea = document.getElementById(kyrieStateArray[i]);

    if (kyrieUnitsArray[i] > 0) {
      stateText.innerHTML = `Units: ${kyrieUnitsArray[i]}`;
      stateText.style.fill = "var(--nets-black)";
      stateArea.style.fill = "var(--nets-white)";
    }
  }
  // Curry läuft, wenn Kyrie aus ist

  for (let c = 0; c < stephStateArray.length; c++) {
    let stateText = document.getElementById(`${stephStateArray[c]}-text`);
    let stateArea = document.getElementById(stephStateArray[c]);

    if (stephUnitsArray[c] > 0) {
      stateText.innerHTML = `Units: ${stephUnitsArray[c]}`;
      stateText.style.fill = "var(--warriors-gold)";
      stateArea.style.fill = "var(--warriors-blue)";
    }
  }
}

stephCurry.stateInfo.unitsInThatState.TX += 5;

attachAllEventListeners();
changeText();
