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
  case player1AttackerUnits === 2 && player2DefenderUnits >= 1:
    this.roll22Dice();
    rollDiceResult = this.roll22Dice();
    break;
}

// offense wins 3v2 or 2v2, defense -2 ------ -2
// defense wins 3v2 or 2v2, offense -2 ------ 2
// offense -1, defense -1 ------ 11
// offense wins 3v1 or 2v1 and takes the state --------- 17
// defense wins 3v1 or 2v1 and defends the state --------- 777
// offense wins 1v1 and takes the state --------- 17
// defense wins 1v1 and defends the state --------- 777
// offense wins 1v2 --------- 1
// defense wins 1v2 --------- 777

// what if 3v2 or 2v2 and offense takes the state?
