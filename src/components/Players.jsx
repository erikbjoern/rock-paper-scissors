import React from "react";
import Hand from "./Hand";

const Players = ({ countdown, rightChoice, leftChoice }) => {
  const countingDown = countdown <= 3 && countdown >= 1;
  const tooSlow = countdown <= 0 && countdown >= -2;

  const makeAChoice = (side) => (
    <div className="make-a-choice-container">
      {countingDown && (
        <>
          <p className="make-a-choice" data-cy={`${side}-make-choice`}>
            make a choice!
          </p>
          <div className="fuse" />
        </>
      )}
      {tooSlow && (
        <p className="slow" data-cy={`${side}-slow`}>
          too slow!
        </p>
      )}
    </div>
  );

  return (
    <div className="player-container">
      <div className="l-player">
        <Hand side="l" choice={leftChoice} countdown={countdown} />
        {!leftChoice && makeAChoice("l")}
      </div>
      <div className="r-player">
        <Hand side="r" choice={rightChoice} countdown={countdown} />
        {!rightChoice && makeAChoice("r")}
      </div>
    </div>
  );
};

export default Players;
