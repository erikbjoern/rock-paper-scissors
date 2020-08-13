import React from "react";
import Hand from "./Hand";

const Players = ({ countdown, rightChoice, leftChoice }) => {
  const countingDown = countdown <= 3 && countdown >= 1;
  const tooSlow = countdown <= 0 && countdown >= -2;

  const makeAChoice = (
    <>
      {countingDown && <p className="make-a-choice">make a choice!</p>}
      {tooSlow && <p className="slow">too slow!</p>}
    </>
  );

  return (
    <div className="playerContainer">
      <div className="leftPlayer">
        <Hand
          side="Left"
          choice={leftChoice}
          countdown={countdown}
        />
        {!leftChoice && makeAChoice}
      </div>
      <svg className="lFuseContainer">
        <circle
          className={countingDown ? "fuse" : ""}
          cx="175"
          cy="175"
          r="150"
        />
      </svg>
      <div className="rightPlayer">
        <Hand
          side="Right"
          choice={rightChoice}
          countdown={countdown}
        />
        {!rightChoice && makeAChoice}
      </div>
      <svg className="rFuseContainer">
        <circle
          className={countingDown ? "fuse" : ""}
          cx="175"
          cy="175"
          r="150"
        />
      </svg>
    </div>
  );
};

export default Players;
