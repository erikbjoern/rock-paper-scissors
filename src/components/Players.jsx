import React from 'react'
import Hand from './Hand'

const Players = ({countdown, rightChoice, leftChoice, winner}) => {
  const makeAChoice =
    countdown < 1 ? (
      <p className="slow">too slow!</p>
    ) : (
      countdown < 5 && <p className="make-a-choice">make a choice!</p>
    );

  return (
    <div className="playerContainer">
      <div className="leftPlayer">
        {!leftChoice && makeAChoice}
        <Hand 
          side="Left"
          choice={leftChoice}
          countdown={countdown}
          winner={winner}
        />
      </div>
      <div className="rightPlayer">
        {!rightChoice && makeAChoice}
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
