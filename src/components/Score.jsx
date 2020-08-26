import React from "react";

const Score = ({ lScore, rScore, lSetScore, rSetScore }) => {
  const sets = (side) => {
    let score = side === "l" ? lSetScore : rSetScore;
    let tally = ""
    let i = 0
    while (score--) {
      i += 1
      tally += (i %5 === 0 ? "| " : "|")
    }
    
    return tally;
  };

  return (
    <div className="score">
      <div className="round-score">
        <div id="l-score" data-cy="l-score">
          {lScore}
        </div>
        -
        <div id="r-score" data-cy="r-score">
          {rScore}
        </div>
      </div>
      <div className="set-score">
        <div id="l-set-score" data-cy="l-set-score">
          {sets("l")}
        </div>
        <div id="r-set-score" data-cy="r-set-score">
          {sets("r")}
        </div>
      </div>
    </div>
  );
};

export default Score;
