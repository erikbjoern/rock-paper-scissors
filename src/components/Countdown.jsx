import React from "react";

const Countdown = ({ countdown }) => {
  const getReady = countdown <= 6 && countdown >= 5 && <p>Get ready!</p>;
  const rock     = countdown <= 3 && countdown >= 1 && <p>rock</p>;
  const paper    = countdown <= 2 && countdown >= 1 && <p>paper</p>;
  const scissors = countdown <= 1 && countdown >= 1 && <p>scissors</p>;

  return (
    <div id="countdown" data-cy="countdown">
      {getReady}
      {rock}
      {paper}
      {scissors}
    </div>
  );
};

export default Countdown;
