class Game {
  constructor() {
    this.player1 = this.declarePlayer1(); // = newGame.player1 = newGame.curry
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
    this.shuffleStates();
    this.randomStateAssignment();
    this.displayUnits();
    this.displayTurn();
    this.attachEndturnEventListener();
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

  shuffleStates() {
    // randomly distribute all available states, assign how many troops to player1/2/3.dominatedStates.LOOP-THROUGH-EACH-STATE.unitsInThatState
    let shuffleStatesArray = Object.keys(
      this.player1.stateInfo.unitsInThatState
    );
    let currentIndex = shuffleStatesArray.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [shuffleStatesArray[currentIndex], shuffleStatesArray[randomIndex]] = [
        shuffleStatesArray[randomIndex],
        shuffleStatesArray[currentIndex],
      ];
    }

    return shuffleStatesArray;
  }

  randomStateAssignment() {
    let shuffledStates = this.shuffleStates();
    let statesLength = shuffledStates.length;
    let halfOfStates = Math.floor(shuffledStates.length / 2);

    for (let i = 0; i < halfOfStates; i++) {
      this.player1.stateInfo.unitsInThatState[`${shuffledStates[i]}`] += 10;
    }
    for (let c = halfOfStates; c < statesLength; c++) {
      this.player2.stateInfo.unitsInThatState[`${shuffledStates[c]}`] += 10;
    }
  }

  displayUnits() {
    const playerOneStateArray = Object.keys(
      this.player1.stateInfo.unitsInThatState
    );
    const playerOneUnitsArray = Object.values(
      this.player1.stateInfo.unitsInThatState
    );
    const playerTwoStateArray = Object.keys(
      this.player2.stateInfo.unitsInThatState
    );
    const playerTwoUnitsArray = Object.values(
      this.player2.stateInfo.unitsInThatState
    );

    // Player 1
    for (let c = 0; c < playerOneStateArray.length; c++) {
      let stateText = document.getElementById(`${playerOneStateArray[c]}-text`);
      let stateArea = document.getElementById(playerOneStateArray[c]);
      let stateIcon = document.getElementById(`${playerOneStateArray[c]}-icon`);
      const logoWarriors = "./Images/Icons/gsw-logo.png";
      const logoNets = "./Images/Icons/brooklyn_logo.png";

      if (playerOneUnitsArray[c] > 0) {
        stateText.innerHTML = `${playerOneUnitsArray[c]}`;
        stateText.style.fill = "var(--warriors-gold)";
        // stateArea.style.fill = "var(--warriors-blue)";
        // Add image icon
        stateIcon.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "href",
          logoWarriors
        );
      }
    }

    // Player 2
    for (let i = 0; i < playerTwoStateArray.length; i++) {
      let stateText = document.getElementById(`${playerTwoStateArray[i]}-text`);
      let stateArea = document.getElementById(playerTwoStateArray[i]);
      let stateIcon = document.getElementById(`${playerTwoStateArray[i]}-icon`);
      const logoWarriors = "./Images/Icons/gsw-logo.png";
      const logoNets = "./Images/Icons/brooklyn_logo.png";

      if (playerTwoUnitsArray[i] > 0) {
        stateText.innerHTML = `${playerTwoUnitsArray[i]}`;
        stateText.style.fill = "var(--nets-black)";
        // stateArea.style.fill = "var(--nets-white)";
        // Add image icon
        stateIcon.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "href",
          logoNets
        );
      }
    }
  }

  displayTurn() {
    switch (true) {
      case this.player1.myTurn:
        document.getElementById("inner-result").innerHTML = "Player 1's turn.";
        break;
      case this.player2.myTurn:
        document.getElementById("inner-result").innerHTML = "Player 2's turn.";
        break;
      default:
        document.getElementById("inner-result").innerHTML =
          "Nobody's turn yet.";
        break;
    }
  }

  attachEndturnEventListener() {
    const endturnButton = document.getElementById("endturn-btn");
    let turn = 1; // always starts with first turn - player1 always starts, if odd = player1.myturn is true, if even, player2.myturn is true
    // get all elements with colorway class (.warriorscolway or .netscolway) forEach remove and add colorway, querySelectorAll
    let colorwayElements = document.querySelectorAll(".colorway");

    endturnButton.addEventListener("click", () => {
      // display "End turn"
      if (turn % 2 !== 0) {
        turn++;
        this.player1.myTurn = false;
        this.player2.myTurn = true;
        // let finalResult = "The Warriors ended their turn.";
        // let innerResultBox = document.getElementById("inner-result");
        // innerResultBox.innerHTML = finalResult;

        // Change colorways
        colorwayElements.forEach((element) => {
          element.classList.remove("warriorscolway");
          element.classList.add("netscolway");
        });
        //
        this.player1.resetDice();
        this.displayTurn();
        // setTimeout(this.displayTurn, 2000);
      } else if (turn % 2 === 0) {
        turn++;
        this.player1.myTurn = true;
        this.player2.myTurn = false;
        // let finalResult = "The Nets ended their turn.";
        // let innerResultBox = document.getElementById("inner-result");
        // innerResultBox.innerHTML = finalResult;
        // Change colorways
        colorwayElements.forEach((element) => {
          element.classList.remove("netscolway");
          element.classList.add("warriorscolway");
        });
        //
        this.player2.resetDice();
        this.displayTurn();
        // setTimeout(this.displayTurn, 2000);
      }
      // setTimeout(this.displayTurn, 2000);
    });
  } // fix timeout!!!
}

class Player {
  constructor(team, starts) {
    (this.team = team),
      (this.boostUnits = 0),
      (this.stateInfo = {
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
        return -2;
      case resultAttack[0] <= resultDefense[0] &&
        resultAttack[1] <= resultDefense[1]:
        finalResult = "Defense wins both!!!";
        innerResultBox = document.getElementById("inner-result");
        innerResultBox.innerHTML = finalResult;
        return 2;
      case resultAttack[0] > resultDefense[0] &&
        resultAttack[1] <= resultDefense[1]:
        finalResult = "Offense wins first, Defense wins second!!!";
        innerResultBox = document.getElementById("inner-result");
        innerResultBox.innerHTML = finalResult;
        return 1;
      case resultAttack[0] <= resultDefense[0] &&
        resultAttack[1] > resultDefense[1]:
        finalResult = "Defense wins first, Offense wins second!!!";
        innerResultBox = document.getElementById("inner-result");
        innerResultBox.innerHTML = finalResult;
        return 1;
      default:
        console.log("something is wrong, you are terrible");
        break;
    }
  }

  calcDominatedStates() {
    let statesArray = Object.keys(this.stateInfo.unitsInThatState);
    this.stateInfo.statesCount = 0;
    this.stateInfo.statesArray = [];

    for (let i = 0; i < statesArray.length; i++) {
      if (this.stateInfo.unitsInThatState[`${statesArray[i]}`] > 0) {
        this.stateInfo.statesCount += 1;
        this.stateInfo.statesArray.push(statesArray[i]);
      }
    }
    console.log(this.stateInfo.statesCount);
    return this.stateInfo.statesCount;
  }

  attachBoostEventListener() {
    const getInnerResultBox = document.getElementById("inner-result");
    const gameboardPathsCollection = document.getElementsByTagName("path");
    const gameboardPathsArray = [...gameboardPathsCollection];

    const boostButton = document.getElementById("boost-btn");
    let selectedState;
    let boostLeftover = this.boostUnits;
    let dominatedStates = this.calcDominatedStates();
    let howManyUnitsYouHavePlaced = 0;
    const objectStatesArray = Object.keys(this.stateInfo.unitsInThatState);

    boostButton.addEventListener(
      "click",
      () => {
        // add 3 units per default - divide all states by 3 to get more than 3 units, but min 3
        switch (true) {
          case dominatedStates > 11:
            boostLeftover = boostLeftover + Math.floor(dominatedStates / 3);
            boostLeftover;
            console.log("OVER");
            break;
          default:
            boostLeftover += 3;
            console.log("UNDER");
            break;
        }
        selectedState = event.target.id;
        getInnerResultBox.innerHTML = `You have ${boostLeftover} Units left.`;
        this.resetDice();
      },
      { once: true }
    );

    gameboardPathsArray.forEach((path) => {
      path.addEventListener("click", () => {
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
          newGame.displayUnits();
          this.resetDice();
        } else {
          getInnerResultBox.innerHTML = `You have used up all your units!`;
          this.resetDice();
        }
      });
    });
  }

  attachOffenseEventListener() {
    const offenseButton = document.getElementById("offense-btn");
    offenseButton.addEventListener("click", () => this.rollDice());
  }

  attachSelectedStateEventListener() {
    const getInnerResultBox = document.getElementById("inner-result");
    const gameboardPathsCollection = document.getElementsByTagName("path");
    const gameboardPathsArray = [...gameboardPathsCollection];

    let attStateId;
    let defStateId;
    let attackerState;
    let defenderState;
    let resultArray = [];

    gameboardPathsArray.forEach((path) => {
      path.addEventListener("click", (event) => {
        // display "selected State"
        attStateId = event.target.id;
        defStateId = event.target.id;

        switch (true) {
          case newGame.player1.stateInfo.unitsInThatState[`${attStateId}`] > 0:
            attackerState = event.target.id;
            getInnerResultBox.innerHTML = `You will attack with: ${attackerState}`;
            break;
          case newGame.player2.stateInfo.unitsInThatState[`${defStateId}`] > 0:
            defenderState = event.target.id;
            getInnerResultBox.innerHTML = `Do you want to attack- ${defenderState}- with: -${attackerState}-?`;
            resultArray = [attackerState, defenderState];
            console.log(resultArray);
            return resultArray;
          default:
            getInnerResultBox.innerHTML =
              "Select the Attacker State first and then the Defender State.";
        }
        this.resetDice();
      });
    });
  } // needs to be edited: if it's offense phase, attach attachSelectedStateEventListener

  battle(attackerState, defenderState, result) {
    // Player 1 attacks
    newGame.player1.stateInfo.unitsInThatState[`${attackerState}`];
    newGame.player2.stateInfo.unitsInThatState[`${defenderState}`];
    let rollDiceResult = result;

    switch (rollDiceResult) {
      case -2:
        newGame.player2.stateInfo.unitsInThatState[`${defenderState}`] - 2;
        break;
      case 2:
        newGame.player1.stateInfo.unitsInThatState[`${attackerState}`] - 2;
        break;
      case 1:
        newGame.player2.stateInfo.unitsInThatState[`${defenderState}`] - 1;
        newGame.player1.stateInfo.unitsInThatState[`${attackerState}`] - 1;
        break;
      default:
        console.log("Something is wrong!");
        break;
    }
  }

  attachAllEventListeners() {
    this.attachBoostEventListener();
    this.attachOffenseEventListener();
  }

  resetDice() {
    // reset the dice
    const dieCollection = document.getElementsByClassName("die");
    const dieArray = [...dieCollection];
    dieArray.forEach((element) => (element.innerHTML = "?"));
  }

  moveToState() {
    // check if stateCount of all players is zero, then +1 for you and move in
  } // empty

  lose() {
    // empty; if stateCount === 0, implement losing logic, throw that player out of the yourTurn array
  }
}

const newGame = new Game();
newGame.start();
// console.log(Object.keys(newGame.player1.stateInfo.unitsInThatState));
// console.log(newGame.shuffleStates());

newGame.player1.attachAllEventListeners();

console.log(newGame.player1.stateInfo.unitsInThatState.TX > 0);
newGame.player1.attachSelectedStateEventListener();
