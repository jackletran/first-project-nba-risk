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

const actionButtonCollection = document.getElementsByClassName("offense");
const actionButtonArray = [...actionButtonCollection];
const actionButtonSelect = actionButtonArray[0];

function attachEventListeners() {
  actionButtonSelect.addEventListener("click", () => rollDice());
}

attachEventListeners();
