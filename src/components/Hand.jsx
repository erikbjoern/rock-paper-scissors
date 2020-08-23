import React from "react";
import rightrock from "../images/rightrock.png";
import rightpaper from "../images/rightpaper.png";
import rightscissors from "../images/rightscissors.png";
import leftrock from "../images/leftrock.png";
import leftpaper from "../images/leftpaper.png";
import leftscissors from "../images/leftscissors.png";

const Hand = ({ side, choice, countdown }) => {
  const hands = [
    rightrock,
    rightpaper,
    rightscissors,
    leftrock,
    leftpaper,
    leftscissors,
  ];

  hands.forEach((img) => {
    new Image().src = img;
  });

  const rock = side === "r" ? rightrock : leftrock;
  const paper = side === "r" ? rightpaper : leftpaper;
  const scissors = side === "r" ? rightscissors : leftscissors;
  const revealChoice = countdown <= 0 && countdown >= -2;

  let source;

  switch (true) {
    case !revealChoice || (revealChoice && choice === ("rock" || "")):
      source = rock;
      break;
    case revealChoice && choice === "paper":
      source = paper;
      break;
    case revealChoice && choice === "scissors":
      source = scissors;
      break;
    default:
      source = rock;
      break;
  }

  const handAnimation = () => {
    if (!revealChoice && countdown <= 4) {
      return `${side}-bouncing`;
    } else if (revealChoice && choice === "") {
      return `${side}-slow`;
    } else {
      return "";
    }
  };

  return (
    <img
      className={handAnimation(side)}
      data-cy={`${side}-hand`}
      width="150px"
      height="150px"
      src={source}
      alt={`${side === "r" ? "Right" : "Left"} player's choice`}
    />
  );
};

export default Hand;
