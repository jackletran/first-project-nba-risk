class Game {
  constructor() {
    this.player1 = this.declarePlayer1();
    this.player2 = this.declarePlayer2();
  }

  declarePlayer1() {
    const curry = new Player("Warriors", true);
    return curry;
  }

  declarePlayer2() {
    const irving = new Player("Nets", false);
    return irving;
  }

  start() {
    this.declarePlayer1();
    this.declarePlayer2();
  }

  selectTeam(playerX) {
    document.addEventListener("click", (selection) => {
      if ((selection.innerHTML = "Lakers"))
        switch (selection.innerHTML) {
          case "Golden State Warriors":
            playerX.team = "Golden State Warriors";
            break;
          case "Brooklyn Nets":
            playerX.team = "Brooklyn Nets";
            break;
          case "LA Lakers":
            playerX.team = "LA Lakers";
            break;
          case "LA Clippers":
            playerX.team = "LA Clippers";
            break;
          case "Milwaukee Bucks":
            playerX.team = "Milwaukee Bucks";
            break;
        }
    });
  }

  randomStateDistribution() {
    // randomly distribute all available states, assign how many troops to player1/2/3.dominatedStates.LOOP-THROUGH-EACH-STATE.unitsInThatState
  }

  displayUnits() {
    const kyrieStateArray = Object.keys(kyrieIrving.stateInfo.unitsInThatState);
    const kyrieUnitsArray = Object.values(
      kyrieIrving.stateInfo.unitsInThatState
    );
    const stephStateArray = Object.keys(stephCurry.stateInfo.unitsInThatState);
    const stephUnitsArray = Object.values(
      stephCurry.stateInfo.unitsInThatState
    );
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

  displayTurn() {
    switch (true) {
      case curry.myTurn:
        document.getElementById("inner-result").innerHTML = "Curry's turn.";
        break;
      case irving.myTurn:
        document.getElementById("inner-result").innerHTML = "Irving's turn.";
        break;
      default:
        document.getElementById("inner-result").innerHTML =
          "Nobody's turn yet.";
        break;
    }
  }
}

class Player {
  constructor(team, starts) {
    (this.team = team),
      (this.boostUnits = 0),
      (this.stateInfo = {
        statesArray: [
          "PUSH ALL THE STATES WITH AT LEAST 1 UNIT IN THIS ARRAY AND COUNT",
        ],
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
      });
    this.myTurn = starts;
  }

  rollAttackerDice() {
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

    let resultAttack = [attack1, attack2, attack3];

    resultAttack.sort((a, b) => b - a);

    return resultAttack;
  }

  rollDefenderDice() {
    let defense1 = 1 + Math.floor(6 * Math.random());
    const die4Collection = document.getElementsByClassName("defense-die-one");
    const die4Array = [...die4Collection];
    die4Array.forEach((element) => (element.innerHTML = defense1));

    let defense2 = 1 + Math.floor(6 * Math.random());
    const die5Collection = document.getElementsByClassName("defense-die-two");
    const die5Array = [...die5Collection];
    die5Array.forEach((element) => (element.innerHTML = defense2));

    let resultDefense = [defense1, defense2];
    resultDefense.sort((a, b) => b - a);

    return resultDefense;
  }

  rollDice() {
    this.rollAttackerDice();
    this.rollDefenderDice();
    this.compareDice();
  }

  compareDice() {
    let finalResult;
    let innerResultBox;
    let resultAttack = this.rollAttackerDice();
    let resultDefense = this.rollDefenderDice();
    switch (true) {
      case resultAttack[0] > resultDefense[0] &&
        resultAttack[1] > resultDefense[1]:
        finalResult = "Offense wins both!!!";
        innerResultBox = document.getElementById("inner-result");
        innerResultBox.innerHTML = finalResult;
        break;
      case resultAttack[0] <= resultDefense[0] &&
        resultAttack[1] <= resultDefense[1]:
        finalResult = "Defense wins both!!!";
        innerResultBox = document.getElementById("inner-result");
        innerResultBox.innerHTML = finalResult;
        break;
      case resultAttack[0] > resultDefense[0] &&
        resultAttack[1] <= resultDefense[1]:
        finalResult = "Offense wins first, Defense wins second!!!";
        innerResultBox = document.getElementById("inner-result");
        innerResultBox.innerHTML = finalResult;
        break;
      case resultAttack[0] <= resultDefense[0] &&
        resultAttack[1] > resultDefense[1]:
        finalResult = "Defense wins first, Offense wins second!!!";
        innerResultBox = document.getElementById("inner-result");
        innerResultBox.innerHTML = finalResult;
        break;
      default:
        console.log("something is wrong, you are terrible");
        break;
    }
  }

  attachBoostEventListener() {
    const getInnerResultBox = document.getElementById("inner-result");
    const svgGameboard = document.getElementById("svg");
    const boostButton = document.getElementById("boost-btn");
    let selectedState;
    let boostLeftover = this.boostUnits;
    let howManyUnitsYouHavePlaced = 0;
    const objectStatesArray = Object.keys(this.stateInfo.unitsInThatState);

    boostButton.addEventListener(
      "click",
      () => {
        // add 3 units
        boostLeftover += 20;
        // switch (this.dominatedStates) {
        //   case this.dominatedStates > 11:
        //     this.boostUnits =
        //       this.boostUnits + Math.floor(this.dominatedStates / 3);
        //     console.log(this.boostUnits);
        //     break;

        //   default:
        //     this.boostUnits += 3;
        //     break;
        // }
        selectedState = event.target.id;
        getInnerResultBox.innerHTML = `You have ${boostLeftover} Units left.`;
        this.resetDice();
      },
      { once: true }
    );

    svgGameboard.addEventListener("click", () => {
      // place unit on "selected State"
      if (boostLeftover > 0) {
        boostLeftover--;
        selectedState = event.target.id;
        for (let i = 0; i < objectStatesArray.length; i++) {
          if (objectStatesArray[i].includes(selectedState)) {
            let stateText = document.getElementById(
              `${objectStatesArray[i]}-text`
            );
            this.stateInfo.unitsInThatState[`${selectedState}`]++;
            stateText.innerHTML =
              this.stateInfo.unitsInThatState[`${selectedState}`];
          }
        }
        howManyUnitsYouHavePlaced++;
        getInnerResultBox.innerHTML = `You placed ${howManyUnitsYouHavePlaced} units on ${selectedState}. You have ${boostLeftover} units left.`;
        this.displayUnits();
        this.resetDice();
      } else {
        getInnerResultBox.innerHTML = `You have used up all your units!`;
        this.resetDice();
      }
    });
  }

  attachOffenseEventListener() {
    const offenseButton = document.getElementById("offense-btn");
    offenseButton.addEventListener("click", () => this.rollDice());
  }

  attachEndturnEventListener() {
    const endturnButton = document.getElementById("endturn-btn");

    endturnButton.addEventListener("click", () => {
      // display "End turn"
      let finalResult = "The Warriors ended their turn.";
      let innerResultBox = document.getElementById("inner-result");
      innerResultBox.innerHTML = finalResult;
      this.resetDice();
    });
  }

  attachSelectedStateEventListener() {
    const getInnerResultBox = document.getElementById("inner-result");
    const svgGameboard = document.getElementById("svg");
    let selectedState;

    svgGameboard.addEventListener("click", (event) => {
      // display "selected State"
      console.log("You clicked on this selectedState: " + event.target.id);
      selectedState = event.target.id;
      getInnerResultBox.innerHTML = `You have selected: ${selectedState}`;
      this.resetDice();
    });
  } // AAAAAAAAAAAAAAAA if it's offense phase, attach attachSelectedStateEventListener

  attachAllEventListeners() {
    this.attachBoostEventListener();
    this.attachOffenseEventListener();
    this.attachEndturnEventListener();
  }

  displayUnits() {
    // const kyrieStateArray = Object.keys(kyrieIrving.stateInfo.unitsInThatState);
    // const kyrieUnitsArray = Object.values(
    //   kyrieIrving.stateInfo.unitsInThatState
    // );
    // const stephStateArray = Object.keys(stephCurry.stateInfo.unitsInThatState);
    // const stephUnitsArray = Object.values(
    //   stephCurry.stateInfo.unitsInThatState
    // );
    // above are unnecessary!!!
    const stateArray = Object.keys(this.stateInfo.unitsInThatState);
    const unitsArray = Object.values(this.stateInfo.unitsInThatState);
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

    for (let i = 0; i < stateArray.length; i++) {
      let stateText = document.getElementById(`${stateArray[i]}-text`);
      let stateArea = document.getElementById(stateArray[i]);
      var stateIcon = document.getElementById(`${stateArray[i]}-icon`);

      if (unitsArray[i] > 0) {
        stateText.innerHTML = `${unitsArray[i]}`;
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

    // // Kyrie
    // for (let i = 0; i < kyrieStateArray.length; i++) {
    //   let stateText = document.getElementById(`${kyrieStateArray[i]}-text`);
    //   let stateArea = document.getElementById(kyrieStateArray[i]);
    //   var stateIcon = document.getElementById(`${kyrieStateArray[i]}-icon`);

    //   if (kyrieUnitsArray[i] > 0) {
    //     stateText.innerHTML = `${kyrieUnitsArray[i]}`;
    //     stateText.style.fill = "var(--nets-black)";
    //     stateArea.style.fill = "var(--nets-white)";
    //     // Add image icon
    //     stateIcon.setAttributeNS(
    //       "http://www.w3.org/1999/xlink",
    //       "href",
    //       logoNets
    //     );
    //   }
    // }

    // for (let c = 0; c < stephStateArray.length; c++) {
    //   let stateText = document.getElementById(`${stephStateArray[c]}-text`);
    //   let stateArea = document.getElementById(stephStateArray[c]);
    //   var stateIcon = document.getElementById(`${stephStateArray[c]}-icon`);

    //   if (stephUnitsArray[c] > 0) {
    //     stateText.innerHTML = `${stephUnitsArray[c]}`;
    //     stateText.style.fill = "var(--warriors-gold)";
    //     stateArea.style.fill = "var(--warriors-blue)";
    //     // Add image icon
    //     stateIcon.setAttributeNS(
    //       "http://www.w3.org/1999/xlink",
    //       "href",
    //       logoWarriors
    //     );
    //   }
    // }
  }

  resetDice() {
    // reset the dice
    const dieCollection = document.getElementsByClassName("die");
    const dieArray = [...dieCollection];
    dieArray.forEach((element) => (element.innerHTML = "?"));
  }

  moveToState() {
    // check if stateCount of all players is zero, then +1 for you and move in
  }

  lose() {
    // if stateCount === 0, implement losing logic, throw that player out of the yourTurn array
  }
}

const newGame = new Game();
newGame.start();
let irving = newGame.player2;

console.log(irving);

newGame.player1.attachAllEventListeners();

// curry.myTurn = false;
// irving.myTurn = true;
// console.log(curry);
// console.log(irving);
// curry.attachAllEventListeners();

newGame.displayTurn();

// displayUnits();
// attachAllEventListeners();
// attachSelectedStateEventListener();
