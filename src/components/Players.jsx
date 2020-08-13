import React from "react";
import Hand from "./Hand";

const Players = ({ countdown, rightChoice, leftChoice }) => {
  const countingDown = countdown <= 3 && countdown >= 1;
  const tooSlow = countdown <= 0 && countdown >= -2;

  const makeAChoice = (
    <div className="makeAChoiceContainer">
      {countingDown && (
        <>
          <p className="make-a-choice">make a choice!</p>
          <div className="fuse" />
        </>
      )}
      {tooSlow && <p className="slow">too slow!</p>}
    </div>
  );

  return (
    <div className="playerContainer">
      <div className="leftPlayer">
        <Hand side="Left" choice={leftChoice} countdown={countdown} />
        {!leftChoice && makeAChoice}
      </div>
      <div className="rightPlayer">
        <Hand side="Right" choice={rightChoice} countdown={countdown} />
        {!rightChoice && makeAChoice}
      </div>
    </div>
  );
};

export default Players;
