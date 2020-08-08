export const determineHand = (side, hands, rightChoice, leftChoice, revealChoice) => {
  const rock = side === "right" ? hands[0] : hands[3];
  const paper = side === "right" ? hands[1] : hands[4];
  const scissors = side === "right" ? hands[2] : hands[5];
  const choice = side === "right" ? rightChoice : leftChoice;

  switch (true) {
    case !revealChoice || (revealChoice && choice === ("rock" || "")):
      return rock;
    case revealChoice && choice === "paper":
      return paper;
    case revealChoice && choice === "scissors":
      return scissors;
    default:
      return rock;
  }
};