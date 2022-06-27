const stephCurry = {
  team: null,
  boostUnits: 0,
  stateInfo: {
    statesArray: [],
    statesCount: 0,
    unitsInThatState: {
      TX: 330,
      WA: 11,
      OR: 12,
      ID: 13,
      MT: 14,
      WY: 15,
      CA: 16,
      HI: 17,
      AK: 18,
      NV: 19,
      CA: 20,
      UT: 331,
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
      // TX: 0,
      CO: 21,
      NM: 22,
      AZ: 23,
      ND: 24,
      SD: 25,
      NE: 26,
      KS: 27,
      OK: 28,
      MN: 29,
      IA: 2,
      MO: 3,
      AR: 4,
      LA: 5,
      WI: 6,
      IL: 7,
      MI: 8,
      IN: 9,
      OH: 10,
      AL: 98,
      UT: 99,
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
  let CURRYCOUNTRY = stephCurry.stateInfo.unitsInThatState.TX; // man muss die genaue info da hinschreiben, die Variable bringt nichts
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
      // for (let i = 0; i < stephCurryStates.length; i++) {
      //   if (stephCurryStates[i].includes(selectedState)) {
      //     stephCurryUnitsInThatState++;
      //     //
      //     let stateText = document.getElementById(
      //       `${stephCurryStates[i]}-text`
      //     );
      //     stateText.innerHTML = `${stephCurryUnitsInThatState[i]}`;
      //     // stephCurry.stateInfo.unitsInThatState.TX = .stephCurryUnitsInThatState;
      //     // OR
      //     // stephCurry.stateInfo.unitsInThatState.TX++;
      //   }
      // }
      switch (true) {
        case selectedState === "AL":
          stephCurry.stateInfo.unitsInThatState.AL++;
          break;
        case selectedState === "AK":
          stephCurry.stateInfo.unitsInThatState.AK++;
          break;
        case selectedState === "AZ":
          stephCurry.stateInfo.unitsInThatState.AZ++;
          break;
        case selectedState === "AR":
          stephCurry.stateInfo.unitsInThatState.AR++;
          break;
        case selectedState === "CA":
          stephCurry.stateInfo.unitsInThatState.CA++;
          break;
        case selectedState === "CZ":
          stephCurry.stateInfo.unitsInThatState.CZ++;
          break;
        case selectedState === "CO":
          stephCurry.stateInfo.unitsInThatState.CO++;
          break;
        case selectedState === "CT":
          stephCurry.stateInfo.unitsInThatState.CT++;
          break;
        case selectedState === "DE":
          stephCurry.stateInfo.unitsInThatState.DE++;
          break;
        case selectedState === "DC":
          stephCurry.stateInfo.unitsInThatState.DC++;
          break;
        case selectedState === "FL":
          stephCurry.stateInfo.unitsInThatState.FL++;
          break;
        case selectedState === "GA":
          stephCurry.stateInfo.unitsInThatState.GA++;
          break;
        case selectedState === "GU":
          stephCurry.stateInfo.unitsInThatState.GU++;
          break;
        case selectedState === "HI":
          stephCurry.stateInfo.unitsInThatState.HI++;
          break;
        case selectedState === "ID":
          stephCurry.stateInfo.unitsInThatState.ID++;
          break;
        case selectedState === "IL":
          stephCurry.stateInfo.unitsInThatState.IL++;
          break;
        case selectedState === "IN":
          stephCurry.stateInfo.unitsInThatState.IN++;
          break;
        case selectedState === "IA":
          stephCurry.stateInfo.unitsInThatState.IA++;
          break;
        case selectedState === "KS":
          stephCurry.stateInfo.unitsInThatState.KS++;
          break;
        case selectedState === "KY":
          stephCurry.stateInfo.unitsInThatState.KY++;
          break;
        case selectedState === "LA":
          stephCurry.stateInfo.unitsInThatState.LA++;
          break;
        case selectedState === "ME":
          stephCurry.stateInfo.unitsInThatState.ME++;
          break;
        case selectedState === "MD":
          stephCurry.stateInfo.unitsInThatState.MD++;
          break;
        case selectedState === "MA":
          stephCurry.stateInfo.unitsInThatState.MA++;
          break;
        case selectedState === "MI":
          stephCurry.stateInfo.unitsInThatState.MI++;
          break;
        case selectedState === "MN":
          stephCurry.stateInfo.unitsInThatState.MN++;
          break;
        case selectedState === "MS":
          stephCurry.stateInfo.unitsInThatState.MS++;
          break;
        case selectedState === "MO":
          stephCurry.stateInfo.unitsInThatState.MO++;
          break;
        case selectedState === "MT":
          stephCurry.stateInfo.unitsInThatState.MT++;
          break;
        case selectedState === "NE":
          stephCurry.stateInfo.unitsInThatState.NE++;
          break;
        case selectedState === "NV":
          stephCurry.stateInfo.unitsInThatState.NV++;
          break;
        case selectedState === "NH":
          stephCurry.stateInfo.unitsInThatState.NH++;
          break;
        case selectedState === "NJ":
          stephCurry.stateInfo.unitsInThatState.NJ++;
          break;
        case selectedState === "NM":
          stephCurry.stateInfo.unitsInThatState.NM++;
          break;
        case selectedState === "NY":
          stephCurry.stateInfo.unitsInThatState.NY++;
          break;
        case selectedState === "NC":
          stephCurry.stateInfo.unitsInThatState.NC++;
          break;
        case selectedState === "ND":
          stephCurry.stateInfo.unitsInThatState.ND++;
          break;
        case selectedState === "OH":
          stephCurry.stateInfo.unitsInThatState.OH++;
          break;
        case selectedState === "OK":
          stephCurry.stateInfo.unitsInThatState.OK++;
          break;
        case selectedState === "OR":
          stephCurry.stateInfo.unitsInThatState.OR++;
          break;
        case selectedState === "PA":
          stephCurry.stateInfo.unitsInThatState.PA++;
          break;
        case selectedState === "PR":
          stephCurry.stateInfo.unitsInThatState.PR++;
          break;
        case selectedState === "RI":
          stephCurry.stateInfo.unitsInThatState.RI++;
          break;
        case selectedState === "SC":
          stephCurry.stateInfo.unitsInThatState.SC++;
          break;
        case selectedState === "SD":
          stephCurry.stateInfo.unitsInThatState.SD++;
          break;
        case selectedState === "TN":
          stephCurry.stateInfo.unitsInThatState.TN++;
          break;
        case selectedState === "TX":
          stephCurry.stateInfo.unitsInThatState.TX++;
          break;
        case selectedState === "UT":
          stephCurry.stateInfo.unitsInThatState.UT++;
          break;
        case selectedState === "VT":
          stephCurry.stateInfo.unitsInThatState.VT++;
          break;
        case selectedState === "VI":
          stephCurry.stateInfo.unitsInThatState.VI++;
          break;
        case selectedState === "VA":
          stephCurry.stateInfo.unitsInThatState.VA++;
          break;
        case selectedState === "WA":
          stephCurry.stateInfo.unitsInThatState.WA++;
          break;
        case selectedState === "WV":
          stephCurry.stateInfo.unitsInThatState.WV++;
          break;
        case selectedState === "WI":
          stephCurry.stateInfo.unitsInThatState.WI++;
          break;
        case selectedState === "WY":
          stephCurry.stateInfo.unitsInThatState.WY++;
          break;
        // Wenn Spieler 2 dran ist
        // case selectedState === "AL":
        //   kyrieIrving.stateInfo.unitsInThatState.AL++;
        //   break;
        // case selectedState === "AK":
        //   kyrieIrving.stateInfo.unitsInThatState.AK++;
        //   break;
        // case selectedState === "AZ":
        //   kyrieIrving.stateInfo.unitsInThatState.AZ++;
        //   break;
        // case selectedState === "AR":
        //   kyrieIrving.stateInfo.unitsInThatState.AR++;
        //   break;
        // case selectedState === "CA":
        //   kyrieIrving.stateInfo.unitsInThatState.CA++;
        //   break;
        // case selectedState === "CZ":
        //   kyrieIrving.stateInfo.unitsInThatState.CZ++;
        //   break;
        // case selectedState === "CO":
        //   kyrieIrving.stateInfo.unitsInThatState.CO++;
        //   break;
        // case selectedState === "CT":
        //   kyrieIrving.stateInfo.unitsInThatState.CT++;
        //   break;
        // case selectedState === "DE":
        //   kyrieIrving.stateInfo.unitsInThatState.DE++;
        //   break;
        // case selectedState === "DC":
        //   kyrieIrving.stateInfo.unitsInThatState.DC++;
        //   break;
        // case selectedState === "FL":
        //   kyrieIrving.stateInfo.unitsInThatState.FL++;
        //   break;
        // case selectedState === "GA":
        //   kyrieIrving.stateInfo.unitsInThatState.GA++;
        //   break;
        // case selectedState === "GU":
        //   kyrieIrving.stateInfo.unitsInThatState.GU++;
        //   break;
        // case selectedState === "HI":
        //   kyrieIrving.stateInfo.unitsInThatState.HI++;
        //   break;
        // case selectedState === "ID":
        //   kyrieIrving.stateInfo.unitsInThatState.ID++;
        //   break;
        // case selectedState === "IL":
        //   kyrieIrving.stateInfo.unitsInThatState.IL++;
        //   break;
        // case selectedState === "IN":
        //   kyrieIrving.stateInfo.unitsInThatState.IN++;
        //   break;
        // case selectedState === "IA":
        //   kyrieIrving.stateInfo.unitsInThatState.IA++;
        //   break;
        // case selectedState === "KS":
        //   kyrieIrving.stateInfo.unitsInThatState.KS++;
        //   break;
        // case selectedState === "KY":
        //   kyrieIrving.stateInfo.unitsInThatState.KY++;
        //   break;
        // case selectedState === "LA":
        //   kyrieIrving.stateInfo.unitsInThatState.LA++;
        //   break;
        // case selectedState === "ME":
        //   kyrieIrving.stateInfo.unitsInThatState.ME++;
        //   break;
        // case selectedState === "MD":
        //   kyrieIrving.stateInfo.unitsInThatState.MD++;
        //   break;
        // case selectedState === "MA":
        //   kyrieIrving.stateInfo.unitsInThatState.MA++;
        //   break;
        // case selectedState === "MI":
        //   kyrieIrving.stateInfo.unitsInThatState.MI++;
        //   break;
        // case selectedState === "MN":
        //   kyrieIrving.stateInfo.unitsInThatState.MN++;
        //   break;
        // case selectedState === "MS":
        //   kyrieIrving.stateInfo.unitsInThatState.MS++;
        //   break;
        // case selectedState === "MO":
        //   kyrieIrving.stateInfo.unitsInThatState.MO++;
        //   break;
        // case selectedState === "MT":
        //   kyrieIrving.stateInfo.unitsInThatState.MT++;
        //   break;
        // case selectedState === "NE":
        //   kyrieIrving.stateInfo.unitsInThatState.NE++;
        //   break;
        // case selectedState === "NV":
        //   kyrieIrving.stateInfo.unitsInThatState.NV++;
        //   break;
        // case selectedState === "NH":
        //   kyrieIrving.stateInfo.unitsInThatState.NH++;
        //   break;
        // case selectedState === "NJ":
        //   kyrieIrving.stateInfo.unitsInThatState.NJ++;
        //   break;
        // case selectedState === "NM":
        //   kyrieIrving.stateInfo.unitsInThatState.NM++;
        //   break;
        // case selectedState === "NY":
        //   kyrieIrving.stateInfo.unitsInThatState.NY++;
        //   break;
        // case selectedState === "NC":
        //   kyrieIrving.stateInfo.unitsInThatState.NC++;
        //   break;
        // case selectedState === "ND":
        //   kyrieIrving.stateInfo.unitsInThatState.ND++;
        //   break;
        // case selectedState === "OH":
        //   kyrieIrving.stateInfo.unitsInThatState.OH++;
        //   break;
        // case selectedState === "OK":
        //   kyrieIrving.stateInfo.unitsInThatState.OK++;
        //   break;
        // case selectedState === "OR":
        //   kyrieIrving.stateInfo.unitsInThatState.OR++;
        //   break;
        // case selectedState === "PA":
        //   kyrieIrving.stateInfo.unitsInThatState.PA++;
        //   break;
        // case selectedState === "PR":
        //   kyrieIrving.stateInfo.unitsInThatState.PR++;
        //   break;
        // case selectedState === "RI":
        //   kyrieIrving.stateInfo.unitsInThatState.RI++;
        //   break;
        // case selectedState === "SC":
        //   kyrieIrving.stateInfo.unitsInThatState.SC++;
        //   break;
        // case selectedState === "SD":
        //   kyrieIrving.stateInfo.unitsInThatState.SD++;
        //   break;
        // case selectedState === "TN":
        //   kyrieIrving.stateInfo.unitsInThatState.TN++;
        //   break;
        // case selectedState === "TX":
        //   kyrieIrving.stateInfo.unitsInThatState.TX++;
        //   break;
        // case selectedState === "UT":
        //   kyrieIrving.stateInfo.unitsInThatState.UT++;
        //   break;
        // case selectedState === "VT":
        //   kyrieIrving.stateInfo.unitsInThatState.VT++;
        //   break;
        // case selectedState === "VI":
        //   kyrieIrving.stateInfo.unitsInThatState.VI++;
        //   break;
        // case selectedState === "VA":
        //   kyrieIrving.stateInfo.unitsInThatState.VA++;
        //   break;
        // case selectedState === "WA":
        //   kyrieIrving.stateInfo.unitsInThatState.WA++;
        //   break;
        // case selectedState === "WV":
        //   kyrieIrving.stateInfo.unitsInThatState.WV++;
        //   break;
        // case selectedState === "WI":
        //   kyrieIrving.stateInfo.unitsInThatState.WI++;
        //   break;
        // case selectedState === "WY":
        //   kyrieIrving.stateInfo.unitsInThatState.WY++;
        //   break;
        default:
          console.log("Something is wrong!");
      }
      howManyUnitsYouHavePlaced++;
      getInnerResultBox.innerHTML = `You placed ${howManyUnitsYouHavePlaced} units on ${selectedState}. You have ${boostLeftover} units left.`;
      displayUnits();
      resetDice();
    } else {
      getInnerResultBox.innerHTML = `You have used up all your units!`;
      // displayUnits();
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

  svgGameboard.addEventListener("click", () => {
    // display "selected State"
    console.log("You clicked on this selectedState: " + event.target.id);
    selectedState = event.target.id;
    getInnerResultBox.innerHTML = `You have selected: ${selectedState}`;
    resetDice();
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
  const targetSvg = document.getElementById("svg");
  let newImage = document.createElement("image");
  newImage.setAttribute("x", "385");
  newImage.setAttribute("y", "285");
  newImage.setAttribute("href", "./Images/Icons/gsw-logo.png");
  targetSvg.appendChild(newImage);

  // Kyrie
  for (let i = 0; i < kyrieStateArray.length; i++) {
    let stateText = document.getElementById(`${kyrieStateArray[i]}-text`);
    let stateArea = document.getElementById(kyrieStateArray[i]);

    if (kyrieUnitsArray[i] > 0) {
      stateText.innerHTML = `${kyrieUnitsArray[i]}`;
      stateText.style.fill = "var(--nets-black)";
      stateArea.style.fill = "var(--nets-white)";
      // Add image icon
    }
  }

  for (let c = 0; c < stephStateArray.length; c++) {
    let stateText = document.getElementById(`${stephStateArray[c]}-text`);
    let stateArea = document.getElementById(stephStateArray[c]);

    if (stephUnitsArray[c] > 0) {
      stateText.innerHTML = `${stephUnitsArray[c]}`;
      stateText.style.fill = "var(--warriors-gold)";
      stateArea.style.fill = "var(--warriors-blue)";
    }
  }
}

function resetDice() {
  // reset the dice
  const dieCollection = document.getElementsByClassName("die");
  const dieArray = [...dieCollection];
  dieArray.forEach((element) => (element.innerHTML = "?"));
}

// attachSelectedStateEventListener();

displayUnits();
attachAllEventListeners();
