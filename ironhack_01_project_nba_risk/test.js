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
      TX: 0,
      UT: 0,
      VT: 0,
      VI: 0,
    },
  },
};

// function rollDice() {
//   rollAttackerDice();
//   rollDefenderDice();
//   compareDice();
// }

// function rollAttackerDice() {
//   let attack1 = 1 + Math.floor(6 * Math.random());
//   const die1Collection = document.getElementsByClassName("attack-die-one");
//   const die1Array = [...die1Collection];
//   die1Array.forEach((element) => (element.innerHTML = attack1));

//   let attack2 = 1 + Math.floor(6 * Math.random());
//   const die2Collection = document.getElementsByClassName("attack-die-two");
//   const die2Array = [...die2Collection];
//   die2Array.forEach((element) => (element.innerHTML = attack2));

//   let attack3 = 1 + Math.floor(6 * Math.random());
//   const die3Collection = document.getElementsByClassName("attack-die-three");
//   const die3Array = [...die3Collection];
//   die3Array.forEach((element) => (element.innerHTML = attack3));

//   resultAttack = [attack1, attack2, attack3];

//   resultAttack.sort((a, b) => b - a);

//   return resultAttack;
// }

// function rollDefenderDice() {
//   let defense1 = 1 + Math.floor(6 * Math.random());
//   const die4Collection = document.getElementsByClassName("defense-die-one");
//   const die4Array = [...die4Collection];
//   die4Array.forEach((element) => (element.innerHTML = defense1));

//   let defense2 = 1 + Math.floor(6 * Math.random());
//   const die5Collection = document.getElementsByClassName("defense-die-two");
//   const die5Array = [...die5Collection];
//   die5Array.forEach((element) => (element.innerHTML = defense2));

//   resultDefense = [defense1, defense2];

//   resultDefense.sort((a, b) => b - a);

//   return resultDefense;
// }

// function compareDice() {
//   let finalResult;
//   let innerResultCollection;
//   let innerResultArray;
//   switch (true) {
//     case resultAttack[0] > resultDefense[0] &&
//       resultAttack[1] > resultDefense[1]:
//       finalResult = "Offense wins both!!!";
//       innerResultCollection = document.getElementsByClassName("inner-result");
//       innerResultArray = [...innerResultCollection];
//       innerResultArray.forEach((element) => (element.innerHTML = finalResult));
//       break;
//     case resultAttack[0] <= resultDefense[0] &&
//       resultAttack[1] <= resultDefense[1]:
//       finalResult = "Defense wins both!!!";
//       innerResultCollection = document.getElementsByClassName("inner-result");
//       innerResultArray = [...innerResultCollection];
//       innerResultArray.forEach((element) => (element.innerHTML = finalResult));
//       break;
//     case resultAttack[0] > resultDefense[0] &&
//       resultAttack[1] <= resultDefense[1]:
//       finalResult = "Offense wins first, Defense wins second!!!";
//       innerResultCollection = document.getElementsByClassName("inner-result");
//       innerResultArray = [...innerResultCollection];
//       innerResultArray.forEach((element) => (element.innerHTML = finalResult));
//       break;
//     case resultAttack[0] <= resultDefense[0] &&
//       resultAttack[1] > resultDefense[1]:
//       finalResult = "Defense wins first, Offense wins second!!!";
//       innerResultCollection = document.getElementsByClassName("inner-result");
//       innerResultArray = [...innerResultCollection];
//       innerResultArray.forEach((element) => (element.innerHTML = finalResult));
//       break;
//     default:
//       console.log("something is wrong, you are terrible");
//       break;
//   }
// }

// function attachOffenseEventListener() {
//   const offenseButtonCollection = document.getElementsByClassName("offense");
//   const offenseButtonArray = [...offenseButtonCollection];
//   const offenseButtonSelect = offenseButtonArray[0];
//   offenseButtonSelect.addEventListener("click", () => rollDice());
// }

// function attachBoostEventListener() {
//   const boostButtonCollection = document.getElementsByClassName("boost");
//   const boostButtonArray = [...boostButtonCollection];
//   const boostButtonSelect = boostButtonArray[0];

//   // display "Boost stamina"
//   boostButtonSelect.addEventListener("click", () => {
//     finalResult = "The Warriors boost their stamina.";
//     innerResultCollection = document.getElementsByClassName("inner-result");
//     innerResultArray = [...innerResultCollection];
//     innerResultArray.forEach((element) => (element.innerHTML = finalResult));

//     // reset the dice
//     const dieCollection = document.getElementsByClassName("die");
//     const dieArray = [...dieCollection];
//     dieArray.forEach((element) => (element.innerHTML = "?"));
//   });
// }

// function attachEndturnEventListener() {
//   const endturnButtonCollection = document.getElementsByClassName("endturn");
//   const endturnButtonArray = [...endturnButtonCollection];
//   const endturnButtonSelect = endturnButtonArray[0];

//   endturnButtonSelect.addEventListener("click", () => {
//     // display "End turn"
//     finalResult = "The Warriors ended their turn.";
//     innerResultCollection = document.getElementsByClassName("inner-result");
//     innerResultArray = [...innerResultCollection];
//     innerResultArray.forEach((element) => (element.innerHTML = finalResult));
//     // reset the dice
//     const dieCollection = document.getElementsByClassName("die");
//     const dieArray = [...dieCollection];
//     dieArray.forEach((element) => (element.innerHTML = "?"));
//   });
// }

// function attachAllEventListeners() {
//   attachOffenseEventListener();
//   attachBoostEventListener();
//   attachEndturnEventListener();
// }

function changeText() {
  finalResult = "Howdy Cowboay";
  let svgText = document.getElementById("TX-text");
  svgText.innerHTML =
    stephCurry.stateInfo.statesCount = `Stamina: ${stephCurry.stateInfo.unitsInThatState.TX}`;
  svgText.style.fill = "var(--warriors-gold)";
  let svgCountry = document.getElementById("TX");
  svgCountry.style.fill = "var(--warriors-blue)";
}

// attachAllEventListeners();

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

stephCurry.stateInfo.unitsInThatState.TX += 5;

console.log(stephCurry.stateInfo.unitsInThatState.TX);

if (stephCurry.stateInfo.unitsInThatState.TX > 0) {
  // stephCurry.stateInfo.statesArray.push(
  //   Object.keys(stephCurry.stateInfo.unitsInThatState.TX)
  // );
  stephCurry.stateInfo.statesArray.push(123);
}

console.log(stephCurry.stateInfo.statesArray);

const allKeys = Object.keys(stephCurry.stateInfo.unitsInThatState); // Here's the method!!
const whereIsTX = allKeys.indexOf("TX");

console.log("allKeys:", allKeys);
console.log("TX is here: ", whereIsTX);
console.log(allKeys[3]);

stephCurry.stateInfo.statesCount = stephCurry.stateInfo.statesArray.length;

console.log(stephCurry.stateInfo.statesCount);
console.log(stephCurry.stateInfo.statesArray);

// changeText();

let selectedState;

function checkCountry() {
  document.addEventListener("click", (event) => {
    console.log("You clicked on this selectedState: " + event.target.id);
    selectedState = event.target.id;
  });
}

checkCountry();

console.log(`The return is ${selectedState}`); // der Staat, auf den du geklickt hast, in einen Array pushen
