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

  // selectTeam(playerX) {
  //   document.addEventListener("click", (selection) => {
  //     if ((selection.innerHTML = "Lakers"))
  //       switch (selection.innerHTML) {
  //         case "Golden State Warriors":
  //           playerX.team = "Golden State Warriors";
  //           break;
  //         case "Brooklyn Nets":
  //           playerX.team = "Brooklyn Nets";
  //           break;
  //         case "LA Lakers":
  //           playerX.team = "LA Lakers";
  //           break;
  //         case "LA Clippers":
  //           playerX.team = "LA Clippers";
  //           break;
  //         case "Milwaukee Bucks":
  //           playerX.team = "Milwaukee Bucks";
  //           break;
  //       }
  //   });
  // } select team feature for the future

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

        // Change colorways
        colorwayElements.forEach((element) => {
          element.classList.remove("warriorscolway");
          element.classList.add("netscolway");
        });
        //
        this.player1.resetDice();
        this.displayTurn();
        this.player2.boostCounter = 1;
      } else if (turn % 2 === 0) {
        turn++;
        this.player1.myTurn = true;
        this.player2.myTurn = false;

        // Change colorways
        colorwayElements.forEach((element) => {
          element.classList.remove("netscolway");
          element.classList.add("warriorscolway");
        });
        //
        this.player2.resetDice();
        this.displayTurn();
        this.player1.boostCounter = 1;
      }
    });
  }
}

class Player {
  constructor(team, starts) {
    (this.team = team),
      (this.attackerState = ""),
      (this.defenderState = ""),
      (this.offenseIsClickable = true),
      (this.confirmIsClickable = false),
      (this.boostUnits = 0),
      (this.boostCounter = 1),
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
    return this.compareDice();
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

    // this.boostCounter = 0;
    console.log(this.boostCounter);
    boostButton.addEventListener("click", () => {
      // add 3 units per default - divide all states by 3 to get more than 3 units, but min 3
      if (this.boostCounter === 1) {
        switch (true) {
          case dominatedStates > 11:
            boostLeftover = boostLeftover + Math.floor(dominatedStates / 3);
            boostLeftover;
            getInnerResultBox.innerHTML = `P1 has ${boostLeftover} Units left.`;

            break;
          default:
            boostLeftover += 3;
            getInnerResultBox.innerHTML = `P1 has ${boostLeftover} Units left.`;
            break;
        }
      } else {
        getInnerResultBox.innerHTML = `P1 has used his boost. P1 has ${boostLeftover} Units left.`;
      }

      this.resetDice();
      this.boostCounter -= 1;
      console.log(this.boostCounter);
    });

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
          getInnerResultBox.innerHTML = `P1 placed ${howManyUnitsYouHavePlaced} units on ${selectedState}. ${boostLeftover} units left.`;
          newGame.displayUnits();
          this.resetDice();
        } else {
          getInnerResultBox.innerHTML = `P1 has used up all his units!`;
          this.resetDice();
        }
      });
    });
  }

  attachOffenseEventListener() {
    const offenseButton = document.getElementById("offense-btn");

    let counter = 0;

    // ATTACH OFFENSE EVENTLISTENER
    if (this.offenseIsClickable === true) {
      offenseButton.addEventListener("click", () => {
        this.attackerState = undefined;
        this.defenderState = undefined;
        console.log(this.attackerState);
        console.log(this.defenderState);
        console.log("Offense was triggered");
        this.offenseIsClickable = false;
        this.confirmIsClickable = true;
        console.log(this.confirmIsClickable);
        console.log(this.offenseIsClickable);
        const confirmButton = document.getElementById("confirm-btn");
        confirmButton.classList.add("activate-hover");
        if (counter === 0 && this.confirmIsClickable === true) {
          console.log("Works!");
          this.attachSelectAttackerDefenderEventListener();
          this.attachConfirmEventListener();
        }
        counter += 1;
      });
    }
  }

  attachSelectAttackerDefenderEventListener() {
    const getInnerResultBox = document.getElementById("inner-result");
    getInnerResultBox.innerHTML = "Select the Attacker and the Defender State.";
    const gameboardPathsCollection = document.getElementsByTagName("path");
    const gameboardPathsArray = [...gameboardPathsCollection];
    console.log("Attach select states");

    let attStateId;
    let defStateId;

    gameboardPathsArray.forEach((path) => {
      path.addEventListener("click", (event) => {
        attStateId = event.target.id;
        defStateId = event.target.id;

        if (newGame.player1.myTurn === true) {
          switch (true) {
            case newGame.player1.stateInfo.unitsInThatState[`${attStateId}`] >
              0:
              this.attackerState = event.target.id;
              getInnerResultBox.innerHTML = `Player 1 will attack with: ${this.attackerState}`;
              break;
            case newGame.player2.stateInfo.unitsInThatState[`${defStateId}`] >
              0:
              this.defenderState = event.target.id;
              getInnerResultBox.innerHTML = `Do you want to attack ${this.defenderState} [P2] with ${this.attackerState} [P1]?`;
              break;
            default:
              getInnerResultBox.innerHTML =
                "Select the Attacker State first and then the Defender State.";
              break;
          }
        } else if (newGame.player2.myTurn === true) {
          switch (true) {
            case newGame.player2.stateInfo.unitsInThatState[`${attStateId}`] >
              0:
              this.attackerState = event.target.id;
              getInnerResultBox.innerHTML = `Player 1 will attack with: ${this.attackerState}`;
              break;
            case newGame.player1.stateInfo.unitsInThatState[`${defStateId}`] >
              0:
              this.defenderState = event.target.id;
              getInnerResultBox.innerHTML = `Do you want to attack ${this.defenderState} [P1] with ${this.attackerState} [P2]?`;
              break;
            default:
              getInnerResultBox.innerHTML =
                "Select the Attacker State first and then the Defender State.";
              break;
          }
        }
        this.resetDice();
      });
    });
  }

  attachConfirmEventListener() {
    const confirmButton = document.getElementById("confirm-btn");
    const getInnerResultBox = document.getElementById("inner-result");
    confirmButton.addEventListener("click", () => {
      console.log("Confirm was triggered");
      //  class="activate-hover"
      confirmButton.classList.remove("activate-hover");
      console.log(this.attackerState);
      console.log(this.defenderState);
      if (
        this.attackerState !== undefined &&
        this.defenderState !== undefined
      ) {
        this.battle();
      } else {
        getInnerResultBox.innerHTML =
          "Select the Attacker and the Defender State first.";
      }
      this.confirmIsClickable = false;
      this.offenseIsClickable = true;
      console.log(this.confirmIsClickable);
      console.log(this.offenseIsClickable);
    });
  }

  battle() {
    // Player 1 attacks
    this.rollDice();
    let rollDiceResult = this.rollDice();
    console.log("Battle is being called");
    const getInnerResultBox = document.getElementById("inner-result");

    if (newGame.player1.myTurn === true) {
      switch (true) {
        case rollDiceResult === -2 &&
          this.attackerState !== undefined &&
          this.defenderState !== undefined:
          newGame.player2.stateInfo.unitsInThatState[
            `${this.defenderState}`
          ] -= 2;
          break;
        case rollDiceResult === 2 &&
          this.attackerState !== undefined &&
          this.defenderState !== undefined:
          newGame.player1.stateInfo.unitsInThatState[
            `${this.attackerState}`
          ] -= 2;
          break;
        case rollDiceResult === 1 &&
          this.attackerState !== undefined &&
          this.defenderState !== undefined:
          newGame.player2.stateInfo.unitsInThatState[
            `${this.defenderState}`
          ] -= 1;
          newGame.player1.stateInfo.unitsInThatState[
            `${this.attackerState}`
          ] -= 1;
          break;
        default:
          console.log(rollDiceResult);
          getInnerResultBox.innerHTML = `In order to battle, you need to select 2 states`;
          console.log("Something is wrong in the battle method!");
          break;
      }
    } else if (newGame.player2.myTurn === true) {
      switch (true) {
        case rollDiceResult === -2 &&
          this.attackerState !== undefined &&
          this.defenderState !== undefined:
          newGame.player1.stateInfo.unitsInThatState[
            `${this.defenderState}`
          ] -= 2;
          break;
        case rollDiceResult === 2 &&
          this.attackerState !== undefined &&
          this.defenderState !== undefined:
          newGame.player2.stateInfo.unitsInThatState[
            `${this.attackerState}`
          ] -= 2;
          break;
        case rollDiceResult === 1 &&
          this.attackerState !== undefined &&
          this.defenderState !== undefined:
          newGame.player1.stateInfo.unitsInThatState[
            `${this.defenderState}`
          ] -= 1;
          newGame.player2.stateInfo.unitsInThatState[
            `${this.attackerState}`
          ] -= 1;
          break;
        default:
          console.log(rollDiceResult);
          getInnerResultBox.innerHTML = `In order to battle, you need to select 2 states`;
          console.log("Something is wrong in the battle method!");
          break;
      }
    }
    newGame.displayUnits();
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
// console.log(newGame.player1.myTurn);
// console.log(newGame.player2.myTurn);
// console.log(newGame.player1.rollDefenderDice());
// console.log(newGame.player1.compareDice());
