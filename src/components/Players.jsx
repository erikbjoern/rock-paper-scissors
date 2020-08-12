import React from 'react'
import Hand from './Hand'

const Players = ({ countdown, rightChoice, leftChoice, winner }) => {
  const fuse = countdown < 4 && countdown > 0 ? "fuse": "";

  const makeAChoice = (side) =>
    countdown < 1 ? (
      <p className="slow">too slow!</p>
    ) : (
        countdown < 4 &&
          <p className="make-a-choice">make a choice!</p>
      );

  return (
    <div className="playerContainer">
      <div className="leftPlayer">
        <Hand
          side="Left"
          choice={leftChoice}
          countdown={countdown}
          winner={winner}
        />
        {!leftChoice && makeAChoice("Left")}
      </div>
      <svg className="lFuseContainer">
        <circle className={fuse} cx="175" cy="175" r="150" />
      </svg>
      <div className="rightPlayer">
        <Hand
          side="Right"
          choice={rightChoice}
          countdown={countdown}
          winner={winner}
        />
        {!rightChoice && makeAChoice("Right")}
      </div>
      <svg className="rFuseContainer">
        <circle className={fuse} cx="175" cy="175" r="150" />
      </svg>
    </div>
  )
}

export default Players
