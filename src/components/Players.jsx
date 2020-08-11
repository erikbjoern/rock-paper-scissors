import React from 'react'
import Hand from './Hand'

const Players = ({ countdown, rightChoice, leftChoice, winner }) => {
  const makeAChoice = (side) =>
    countdown < 1 ? (
      <p className="slow">too slow!</p>
    ) : (
        countdown < 5 &&
        <div className="make-a-choice">
          <p >make a choice!</p>
          <div className={`fuse${side}`} ></div>
        </div>
      );

  return (
    <div className="playerContainer">
      <div className="leftPlayer">
        {!leftChoice && makeAChoice("Left")}
        <Hand
          side="Left"
          choice={leftChoice}
          countdown={countdown}
          winner={winner}
        />
      </div>
      <div className="rightPlayer">
        {!rightChoice && makeAChoice("Right")}
        <Hand
          side="Right"
          choice={rightChoice}
          countdown={countdown}
          winner={winner}
        />
      </div>
    </div>
  )
}

export default Players
