import rightrock from "../images/rightrock.png";
import rightpaper from "../images/rightpaper.png";
import rightscissors from "../images/rightscissors.png";
import leftrock from "../images/leftrock.png";
import leftpaper from "../images/leftpaper.png";
import leftscissors from "../images/leftscissors.png";

export const determineHand = (side, rightChoice, leftChoice, revealChoice) => {
  const hands = [
    rightrock,
    rightpaper,
    rightscissors,
    leftrock,
    leftpaper,
    leftscissors,
  ];

  hands.forEach(img => {
    new Image().src = img
  })

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