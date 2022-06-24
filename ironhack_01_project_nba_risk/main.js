class Game {
  constructor() {
    this.player1 = null; // will store an instance of the class Player
    this.player2 = null; // will store an instance of the class Player
    this.player3 = null; // will store an instance of the class Player
  }
  start() {
    this.player1 = new Player();
    this.player2 = new Player();
    this.player3 = new Player();
    console.log("Player 1 select your team")
    this.player1.selectTeam(this.player1);
    console.log("Player 2 select your team")
    this.player2.selectTeam(this.player2);
    console.log("Player 3 select your team")
    this.player3.selectTeam(this.player3);
    this.randomStateDistribution();  
  }

  selectTeam(playerX) {
    document.addEventListener("click", (selection) => {
      if (selection.innerHTML = "Lakers")
      switch(selection.innerHTML) {
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
  }

  randomStateDistribution() {
    // randomly distribute all available states, assign how many troops to player1/2/3.dominatedStates.LOOP-THROUGH-EACH-STATE.unitsInThatState
  }

  attachEventListeners() {
    document.addEventListener("click", (event) => {
      // save first country in array, then save second country and let them fight/compare
      if (event.key === "ArrowLeft") {
        this.player.moveLeft();
      } else if (event.key === "ArrowRight") {
        this.player.moveRight();
      }
    });
  }

class Player {
  constructor() {
    this.team = null;
    this.boostUnits = 0;
    this.stateInfo = {
      statesArray: ["PUSH ALL THE STATES WITH AT LEAST 1 UNIT IN THIS ARRAY AND COUNT"],
      statesCount: statesArray.length,
      unitsInThatState: {
          AK: 0,
          AL: 0,
          AZ: 0,
          AR: 0,
          CA: 0,
          CZ: 0,
          CO: 0,
          CT: 0,
          DE: 0,
          DC: 0,
          FL: 0,
          GA: 0,
          GU: 0,
          HI: 0,
          ID: 0,
          IL: 0,
          IN: 0,
          IA: 0,
          KS: 0,
          KY: 0,
          LA: 0,
          ME: 0,
          MD: 0,
          MA: 0,
          MI: 0,
          MN: 0,
          MS: 0,
          MO: 0,
          MT: 0,
          NE: 0,
          NV: 0,
          NH: 0,
          NJ: 0,
          NM: 0,
          NY: 0,
          NC: 0,
          ND: 0,
          OH: 0,
          OK: 0,
          OR: 0,
          PA: 0,
          PR: 0,
          RI: 0,
          SC: 0,
          SD: 0,
          TN: 0,
          TX: 0,
          UT: 0,
          VT: 0,
          VI: 0,
          VA: 0,
          WA: 0,
          WV: 0,
          WI: 0,
          WY: 0,
        }
    }
    this.myTurn = false;
  }
  createDomElement() {
    // // step1: create the element:
    const domElement = document.createElement("div");

    // // step2: add content or modify (ex. innerHTML...)
    // myNewImg.setAttribute("src", "./images/something.jpg")
    domElement.id = "player";
    domElement.style.marginLeft = "45vw";

    // //step3: append to the dom: `parentElm.appendChild()`
    const boardElm = document.getElementById("board"); //
    boardElm.appendChild(domElement);
  }

  boost() {
    switch (this.dominatedStates) {
      case this.dominatedStates > 11:
        this.boostUnits =
          this.boostUnits + Math.floor(this.dominatedStates / 3);
        console.log(this.boostUnits);
        break;

      default:
        this.boostUnits += 3;
        break;
    }
  }

  placeUnits(boostUnits) {
    // select one country
    // place 1 unit there, +1 for this.dominatedStates.ONESTATE.unitsInThatState
    // -1 unit from this.boostUnits
  }

  offense() {
    document.addEventListener("click", (event) => {
      // save first country in array, then save second country and let them fight/compare
      if (event.key === "ArrowLeft") {
        this.player.moveLeft();
      } else if (event.key === "ArrowRight") {
        this.player.moveRight();
      }
    });
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

  resultAttack = [attack1, attack2, attack3];

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

  resultDefense = [defense1, defense2];

  resultDefense.sort((a, b) => b - a);

  return resultDefense;
}

  rollDice() { // i might need this.method
  rollAttackerDice();
  rollDefenderDice();
  compareDice();
}

  }

  compareDice() {
  switch (true) {
    case resultAttack[0] > resultDefense[0] &&
      resultAttack[1] > resultDefense[1]:
      console.log("Offense win both");
      break;
    case resultAttack[0] <= resultDefense[0] &&
      resultAttack[1] <= resultDefense[1]:
      console.log("Defense wins both");
      break;
    case resultAttack[0] > resultDefense[0] &&
      resultAttack[1] <= resultDefense[1]:
      console.log("Offense wins first, Defense wins second");
      break;
    case resultAttack[0] <= resultDefense[0] &&
      resultAttack[1] > resultDefense[1]:
      console.log("Defense wins first, Offense wins second");
      break;
    default:
      console.log("something is wrong, you are terrible");
      break;
  }
  }

  moveToState(){
    // check if stateCount of all players is zero, then +1 for you and move in
  }

  endturn() {
    this.positionX++;
    console.log(`current horizontal position.... ${this.positionX}`);
  }

  lose() {
    // if stateCount === 0, implement losing logic, throw that player out of the yourTurn array
  }

const game = new Game();
game.start();
