class Game {
  constructor() {
    this.player1 = this.declarePlayer1(); // = newGame.player1 = newGame.curry
    this.player2 = this.declarePlayer2();
    this.pathClickCounterP1 = 0;
    this.pathClickCounterP2 = 0;
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
      this.player1.stateInfo.unitsInThatState[`${shuffledStates[i]}`] += 5;
    }
    for (let c = halfOfStates; c < statesLength; c++) {
      this.player2.stateInfo.unitsInThatState[`${shuffledStates[c]}`] += 5;
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

  rollDice() {
    roll3AttackerDice();
    roll2DefenderDice();
    this.compareDice(roll3AttackerDice(), roll2DefenderDice());
    return this.compareDice(roll3AttackerDice(), roll2DefenderDice());
  }

  roll32Dice() {
    roll3AttackerDice();
    roll2DefenderDice();
    this.compareDice(roll3AttackerDice(), roll2DefenderDice());
    return this.compareDice(roll3AttackerDice(), roll2DefenderDice());
  }

  roll31Dice() {
    roll3AttackerDice();
    roll1DefenderDice();
    this.compareDice(roll3AttackerDice(), roll1DefenderDice());
    return this.compareDice(roll3AttackerDice(), roll1DefenderDice());
  }

  roll21Dice() {
    roll2AttackerDice();
    roll1DefenderDice();
    this.compareDice(roll2AttackerDice(), roll1DefenderDice());
    return this.compareDice(roll2AttackerDice(), roll1DefenderDice());
  }

  roll11Dice() {
    roll1AttackerDice();
    roll1DefenderDice();
    this.compareDice(roll1AttackerDice(), roll1DefenderDice());
    return this.compareDice(roll1AttackerDice(), roll1DefenderDice());
  }

  roll12Dice() {
    roll1AttackerDice();
    roll2DefenderDice();
    this.compareDice(roll1AttackerDice(), roll2DefenderDice());
    return this.compareDice(roll1AttackerDice(), roll2DefenderDice());
  }

  roll22Dice() {
    roll2AttackerDice();
    roll2DefenderDice();
    this.compareDice(roll2AttackerDice(), roll2DefenderDice());
    return this.compareDice(roll2AttackerDice(), roll2DefenderDice());
  }

  compareDice(attackerDice, defenderDice) {
    let finalResult;
    let innerResultBox;
    let resultAttack = attackerDice;
    let resultDefense = defenderDice;
    let attLength = attackerDice.length;
    let defLength = defenderDice.length;

    switch (true) {
      case attLength >= 2 && defLength === 2:
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
            return 11;
          case resultAttack[0] <= resultDefense[0] &&
            resultAttack[1] > resultDefense[1]:
            finalResult = "Defense wins first, Offense wins second!!!";
            innerResultBox = document.getElementById("inner-result");
            innerResultBox.innerHTML = finalResult;
            return 11;
          default:
            console.log("something is wrong, you are terrible");
            break;
        }
        break;
      case attLength >= 2 && defLength === 1:
        switch (true) {
          case resultAttack[0] > resultDefense[0] ||
            resultAttack[1] > resultDefense[0]:
            finalResult = "Offense wins and takes the state!!!";
            innerResultBox = document.getElementById("inner-result");
            innerResultBox.innerHTML = finalResult;
            return 17;
          case resultAttack[0] <= resultDefense[0] &&
            resultAttack[1] <= resultDefense[0]:
            finalResult = "Defense wins!!!";
            innerResultBox = document.getElementById("inner-result");
            innerResultBox.innerHTML = finalResult;
            return -1;
          default:
            console.log("something is wrong, you are terrible");
            break;
        }
        break;
      case attLength === 1 && defLength === 1:
        switch (true) {
          case resultAttack[0] > resultDefense[0]:
            finalResult = "Offense wins and takes the state!!!";
            innerResultBox = document.getElementById("inner-result");
            innerResultBox.innerHTML = finalResult;
            return 17;
          case resultAttack[0] <= resultDefense[0]:
            finalResult = "Defense wins!!!";
            innerResultBox = document.getElementById("inner-result");
            innerResultBox.innerHTML = finalResult;
            return -1;
          default:
            console.log("something is wrong, you are terrible");
            break;
        }
        break;
      case attLength === 1 && defLength >= 2:
        switch (true) {
          case resultAttack[0] > resultDefense[0] &&
            resultAttack[0] > resultDefense[1]:
            finalResult = "Offense wins!!!";
            innerResultBox = document.getElementById("inner-result");
            innerResultBox.innerHTML = finalResult;
            return 1;
          case resultAttack[0] <= resultDefense[0] ||
            resultAttack[0] <= resultDefense[1]:
            finalResult = "Defense wins!!!";
            innerResultBox = document.getElementById("inner-result");
            innerResultBox.innerHTML = finalResult;
            return -1;
          default:
            console.log("something is wrong, you are terrible");
            break;
        }
        break;
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
    if (newGame.player1.myTurn === true) {
      // Player 1 Start
      let boostLeftover = newGame.player1.boostUnits;
      let dominatedStates = newGame.player1.calcDominatedStates();
      let howManyUnitsP1HasPlaced = 0;
      let objectStatesArray = Object.keys(
        newGame.player1.stateInfo.unitsInThatState
      );

      boostButton.addEventListener("click", () => {
        // add 3 units per default - divide all states by 3 to get more than 3 units, but min 3
        // if Player 1
        if (newGame.player1.myTurn === true) {
          if (newGame.player1.boostCounter === 1) {
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

          newGame.player1.resetDice();
          newGame.player1.boostCounter -= 1;
          howManyUnitsP1HasPlaced = 0;

          gameboardPathsArray.forEach((path) => {
            if (newGame.pathClickCounterP1 === 0) {
              path.addEventListener("click", () => {
                selectedState = event.target.id;
                // place unit on "selected State"
                if (newGame.player1.myTurn === true) {
                  if (
                    boostLeftover > 0 &&
                    newGame.player1.stateInfo.unitsInThatState[
                      `${selectedState}`
                    ] > 0
                  ) {
                    newGame.pathClickCounterP1++;
                    boostLeftover--;
                    for (let i = 0; i < objectStatesArray.length; i++) {
                      if (objectStatesArray[i].includes(selectedState)) {
                        let stateText = document.getElementById(
                          `${objectStatesArray[i]}-text`
                        );
                        newGame.player1.stateInfo.unitsInThatState[
                          `${selectedState}`
                        ]++;
                        stateText.innerHTML =
                          newGame.player1.stateInfo.unitsInThatState[
                            `${selectedState}`
                          ];
                      }
                    }
                    howManyUnitsP1HasPlaced++;
                    getInnerResultBox.innerHTML = `P1 placed ${howManyUnitsP1HasPlaced} units on ${selectedState}. ${boostLeftover} units left.`;
                    newGame.displayUnits();
                    newGame.player1.resetDice();
                  } else if (
                    boostLeftover > 0 &&
                    newGame.player1.stateInfo.unitsInThatState[
                      `${selectedState}`
                    ] === 0
                  ) {
                    getInnerResultBox.innerHTML = `Select a state that P1 owns.`;
                    newGame.player1.resetDice();
                  } else if (boostLeftover === 0) {
                    // getInnerResultBox.innerHTML = `P1 has used up all his units!`;
                    newGame.player1.resetDice();
                  }
                }
              });
            }
          });
        }
        //
        //
        //
        //
        //
        //
        // if Player 2
        else if (newGame.player2.myTurn === true) {
          boostLeftover = newGame.player2.boostUnits;
          dominatedStates = newGame.player2.calcDominatedStates();
          let howManyUnitsP2HasPlaced = 0;
          objectStatesArray = Object.keys(
            newGame.player2.stateInfo.unitsInThatState
          );
          if (newGame.player2.boostCounter === 1) {
            switch (true) {
              case dominatedStates > 11:
                boostLeftover = boostLeftover + Math.floor(dominatedStates / 3);
                boostLeftover;
                getInnerResultBox.innerHTML = `P2 has ${boostLeftover} Units left.`;

                break;
              default:
                boostLeftover += 3;
                getInnerResultBox.innerHTML = `P2 has ${boostLeftover} Units left.`;
                break;
            }
          } else {
            getInnerResultBox.innerHTML = `P2 has used his boost. P2 has ${boostLeftover} Units left.`;
          }

          newGame.player2.resetDice();
          newGame.player2.boostCounter -= 1;
          howManyUnitsP2HasPlaced = 0;
          gameboardPathsArray.forEach((path) => {
            if (newGame.pathClickCounterP2 === 0) {
              path.addEventListener("click", () => {
                selectedState = event.target.id;
                if (newGame.player2.myTurn === true) {
                  // place unit on "selected State"
                  if (
                    boostLeftover > 0 &&
                    newGame.player2.stateInfo.unitsInThatState[
                      `${selectedState}`
                    ] > 0
                  ) {
                    newGame.pathClickCounterP2++;
                    boostLeftover--;
                    for (let i = 0; i < objectStatesArray.length; i++) {
                      if (objectStatesArray[i].includes(selectedState)) {
                        let stateText = document.getElementById(
                          `${objectStatesArray[i]}-text`
                        );
                        newGame.player2.stateInfo.unitsInThatState[
                          `${selectedState}`
                        ]++;
                        stateText.innerHTML =
                          newGame.player2.stateInfo.unitsInThatState[
                            `${selectedState}`
                          ];
                      }
                    }
                    howManyUnitsP2HasPlaced++;
                    getInnerResultBox.innerHTML = `P2 placed ${howManyUnitsP2HasPlaced} units on ${selectedState}. ${boostLeftover} units left.`;
                    newGame.displayUnits();
                    newGame.player2.resetDice();
                  } else if (
                    boostLeftover > 0 &&
                    newGame.player2.stateInfo.unitsInThatState[
                      `${selectedState}`
                    ] === 0
                  ) {
                    getInnerResultBox.innerHTML = `Select a state that P2 owns.`;
                    newGame.player2.resetDice();
                  } else if (boostLeftover === 0) {
                    // getInnerResultBox.innerHTML = `P2 has used up all his units!`;
                    newGame.player2.resetDice();
                  }
                  howManyUnitsP2HasPlaced = 0;
                }
              });
            }
          });
        }
      });
    }
  }

  attachOffenseEventListener() {
    const offenseButton = document.getElementById("offense-btn");

    let counter = 0;

    // ATTACH OFFENSE EVENTLISTENER
    if (this.offenseIsClickable === true) {
      offenseButton.addEventListener("click", () => {
        this.attackerState = undefined;
        this.defenderState = undefined;
        this.offenseIsClickable = false;
        this.confirmIsClickable = true;
        const confirmButton = document.getElementById("confirm-btn");
        confirmButton.classList.add("activate-hover");
        if (counter === 0 && this.confirmIsClickable === true) {
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
      //  class="activate-hover"
      confirmButton.classList.remove("activate-hover");
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
    });
  }

  battle() {
    // this.roll32Dice();
    let rollDiceResult;
    const getInnerResultBox = document.getElementById("inner-result");

    // Player 1 attacks
    let player1AttackerUnits =
      newGame.player1.stateInfo.unitsInThatState[`${this.attackerState}`];
    let player2DefenderUnits =
      newGame.player2.stateInfo.unitsInThatState[`${this.defenderState}`];
    // Player 2 variables
    let player2AttackerUnits =
      newGame.player2.stateInfo.unitsInThatState[`${this.attackerState}`];
    let player1DefenderUnits =
      newGame.player1.stateInfo.unitsInThatState[`${this.defenderState}`];

    if (newGame.player1.myTurn === true) {
      console.log("Battle P1 is being called");
      switch (true) {
        case player1AttackerUnits >= 4 && player2DefenderUnits >= 2:
          this.roll32Dice();
          rollDiceResult = this.roll32Dice();
          break;
        case player1AttackerUnits >= 4 && player2DefenderUnits === 1:
          this.roll31Dice();
          rollDiceResult = this.roll31Dice();
          break;
        case player1AttackerUnits === 3 && player2DefenderUnits === 1:
          this.roll21Dice();
          rollDiceResult = this.roll21Dice();
          break;
        case player1AttackerUnits === 2 && player2DefenderUnits === 1:
          this.roll11Dice();
          rollDiceResult = this.roll11Dice();
          break;
        case player1AttackerUnits === 2 && player2DefenderUnits >= 2:
          this.roll12Dice();
          rollDiceResult = this.roll12Dice();
          break;
        case player1AttackerUnits === 3 && player2DefenderUnits >= 2:
          this.roll22Dice();
          rollDiceResult = this.roll22Dice();
          break;
        default:
          console.log("Check your diceroll selection");
          break;
      }
    } else if (newGame.player2.myTurn === true) {
      console.log("Battle P2 is being called");
      switch (true) {
        case player2AttackerUnits >= 4 && player1DefenderUnits >= 2:
          this.roll32Dice();
          rollDiceResult = this.roll32Dice();
          break;
        case player2AttackerUnits >= 4 && player1DefenderUnits === 1:
          this.roll31Dice();
          rollDiceResult = this.roll31Dice();
          break;
        case player2AttackerUnits === 3 && player1DefenderUnits === 1:
          this.roll21Dice();
          rollDiceResult = this.roll21Dice();
          break;
        case player2AttackerUnits === 2 && player1DefenderUnits === 1:
          this.roll11Dice();
          rollDiceResult = this.roll11Dice();
          break;
        case player2AttackerUnits === 2 && player1DefenderUnits >= 2:
          this.roll12Dice();
          rollDiceResult = this.roll12Dice();
          break;
        case player2AttackerUnits === 3 && player1DefenderUnits >= 2:
          this.roll22Dice();
          rollDiceResult = this.roll22Dice();
          break;
        default:
          console.log("Check your diceroll selection");
          break;
      }
    }
    console.log(rollDiceResult);
    // end of diceroll selection, , Result of Rolling Dice
    if (newGame.player1.myTurn === true) {
      switch (true) {
        case rollDiceResult === -2 &&
          this.attackerState !== undefined &&
          this.defenderState !== undefined:
          newGame.player2.stateInfo.unitsInThatState[
            `${this.defenderState}`
          ] -= 2;
          // if Player 1 takes state in a 3v2 or 2v2
          if (
            newGame.player2.stateInfo.unitsInThatState[
              `${this.defenderState}`
            ] <= 0
          ) {
            newGame.player2.stateInfo.unitsInThatState[
              `${this.defenderState}`
            ] = 0;
            newGame.player1.stateInfo.unitsInThatState[
              `${this.defenderState}`
            ] += 1;
            newGame.player1.stateInfo.unitsInThatState[
              `${this.attackerState}`
            ] -= 2;
            newGame.displayUnits();
          }
          break;
        case rollDiceResult === 2 &&
          this.attackerState !== undefined &&
          this.defenderState !== undefined:
          newGame.player1.stateInfo.unitsInThatState[
            `${this.attackerState}`
          ] -= 2;
          break;
        case rollDiceResult === 11 &&
          this.attackerState !== undefined &&
          this.defenderState !== undefined:
          newGame.player2.stateInfo.unitsInThatState[
            `${this.defenderState}`
          ] -= 1;
          newGame.player1.stateInfo.unitsInThatState[
            `${this.attackerState}`
          ] -= 1;
          break;
        case rollDiceResult === 17 &&
          this.attackerState !== undefined &&
          this.defenderState !== undefined:
          newGame.player2.stateInfo.unitsInThatState[
            `${this.defenderState}`
          ] -= 1;
          // if Player 1 takes state in a 3v2 or 2v2
          if (
            newGame.player2.stateInfo.unitsInThatState[
              `${this.defenderState}`
            ] <= 0
          ) {
            newGame.player2.stateInfo.unitsInThatState[
              `${this.defenderState}`
            ] = 0;
            newGame.player1.stateInfo.unitsInThatState[
              `${this.defenderState}`
            ] += 1;
            newGame.player1.stateInfo.unitsInThatState[
              `${this.attackerState}`
            ] -= 2;
            newGame.displayUnits();
          }
          newGame.player1.stateInfo.unitsInThatState[
            `${this.defenderState}`
          ] += 1;
          newGame.displayUnits();
          // attacker takes the state
          break;
        case rollDiceResult === -1 &&
          this.attackerState !== undefined &&
          this.defenderState !== undefined:
          newGame.player1.stateInfo.unitsInThatState[`${this.attacker}`] -= 1;
          break;
        case rollDiceResult === 1 &&
          this.attackerState !== undefined &&
          this.defenderState !== undefined:
          newGame.player2.stateInfo.unitsInThatState[
            `${this.defenderState}`
          ] -= 1;
          break;
        default:
          getInnerResultBox.innerHTML = `In order to battle, you need to select 2 states`;
          console.log("Something is wrong in the battle method!");
          break;
      }
      // Player 2 attacks, Result of Rolling Dice
    } else if (newGame.player2.myTurn === true) {
      switch (true) {
        case rollDiceResult === -2 &&
          this.attackerState !== undefined &&
          this.defenderState !== undefined:
          newGame.player1.stateInfo.unitsInThatState[
            `${this.defenderState}`
          ] -= 2;
          // if Player 2 takes state in a 3v2 or 2v2
          if (
            newGame.player1.stateInfo.unitsInThatState[
              `${this.defenderState}`
            ] <= 0
          ) {
            newGame.player1.stateInfo.unitsInThatState[
              `${this.defenderState}`
            ] = 0;
            newGame.player2.stateInfo.unitsInThatState[
              `${this.defenderState}`
            ] += 1;
            newGame.player2.stateInfo.unitsInThatState[
              `${this.attackerState}`
            ] -= 2;
            newGame.displayUnits();
          }
          break;
        case rollDiceResult === 2 &&
          this.attackerState !== undefined &&
          this.defenderState !== undefined:
          newGame.player2.stateInfo.unitsInThatState[
            `${this.attackerState}`
          ] -= 2;
          break;
        case rollDiceResult === 11 &&
          this.attackerState !== undefined &&
          this.defenderState !== undefined:
          newGame.player1.stateInfo.unitsInThatState[
            `${this.defenderState}`
          ] -= 1;
          newGame.player2.stateInfo.unitsInThatState[
            `${this.attackerState}`
          ] -= 1;
          break;
        case rollDiceResult === 17 &&
          this.attackerState !== undefined &&
          this.defenderState !== undefined:
          newGame.player1.stateInfo.unitsInThatState[
            `${this.defenderState}`
          ] -= 1;
          // if Player 2 takes state in a 3v2 or 2v2
          if (
            newGame.player1.stateInfo.unitsInThatState[
              `${this.defenderState}`
            ] <= 0
          ) {
            newGame.player1.stateInfo.unitsInThatState[
              `${this.defenderState}`
            ] = 0;
            newGame.player2.stateInfo.unitsInThatState[
              `${this.defenderState}`
            ] += 1;
            newGame.player2.stateInfo.unitsInThatState[
              `${this.attackerState}`
            ] -= 2;
            newGame.displayUnits();
          }
          // attacker takes the state
          break;
        case rollDiceResult === -1 &&
          this.attackerState !== undefined &&
          this.defenderState !== undefined:
          newGame.player2.stateInfo.unitsInThatState[`${this.attacker}`] -= 1;
          break;
        case rollDiceResult === 1 &&
          this.attackerState !== undefined &&
          this.defenderState !== undefined:
          newGame.player1.stateInfo.unitsInThatState[
            `${this.defenderState}`
          ] -= 1;
          break;
        default:
          getInnerResultBox.innerHTML = `In order to battle, you need to select 2 states`;
          console.log("Something is wrong in the battle method!");
          break;
      }
    }
    newGame.displayUnits();
  }
  // End of battle method

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

function roll3AttackerDice() {
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

function roll2AttackerDice() {
  let attack1 = 1 + Math.floor(6 * Math.random());
  const die1Collection = document.getElementsByClassName("attack-die-one");
  const die1Array = [...die1Collection];
  die1Array.forEach((element) => (element.innerHTML = attack1));

  let attack2 = 1 + Math.floor(6 * Math.random());
  const die2Collection = document.getElementsByClassName("attack-die-two");
  const die2Array = [...die2Collection];
  die2Array.forEach((element) => (element.innerHTML = attack2));

  let resultAttack = [attack1, attack2];

  resultAttack.sort((a, b) => b - a);

  return resultAttack;
}

function roll1AttackerDice() {
  let attack1 = 1 + Math.floor(6 * Math.random());
  const die1Collection = document.getElementsByClassName("attack-die-one");
  const die1Array = [...die1Collection];
  die1Array.forEach((element) => (element.innerHTML = attack1));

  let resultAttack = [attack1];

  return resultAttack;
}

function roll2DefenderDice() {
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

function roll1DefenderDice() {
  let defense1 = 1 + Math.floor(6 * Math.random());
  const die4Collection = document.getElementsByClassName("defense-die-one");
  const die4Array = [...die4Collection];
  die4Array.forEach((element) => (element.innerHTML = defense1));

  let resultDefense = [defense1];

  return resultDefense;
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
