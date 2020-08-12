import React from "react";
import rightrock from "../images/rightrock.png";
import rightpaper from "../images/rightpaper.png";
import rightscissors from "../images/rightscissors.png";
import leftrock from "../images/leftrock.png";
import leftpaper from "../images/leftpaper.png";
import leftscissors from "../images/leftscissors.png";

const Hand = ({ side, choice, countdown, winner }) => {
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

  const rock = side === "Right" ? rightrock : leftrock;
  const paper = side === "Right" ? rightpaper : leftpaper;
  const scissors = side === "Right" ? rightscissors : leftscissors;
  const revealChoice = countdown <= 0 && countdown >= -2;

  let source;

  switch (true) {
    case !revealChoice || (revealChoice && choice === ("rock" || "")):
      source = rock;
      break
    case revealChoice && choice === "paper":
      source = paper;
      break
    case revealChoice && choice === "scissors":
      source = scissors;
      break
    default:
      source = rock;
      break
  }

  const bouncingHand = () => {
    return ((countdown < 5 && countdown > 0) || countdown === -3) ?
      `bouncing${side}` : ""
  };

  return (
    <img
      className={bouncingHand(side)}
      width="150px"
      height="150px"
      src={source}
      alt={`${side} player's choice`}
    />
  );
};

export default Hand;
