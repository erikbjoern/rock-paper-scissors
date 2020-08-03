import React from 'react'

const Countdown = ({countdown}) => {

  const rock     = countdown <= 3 && countdown >= 0 && <p> rock </p>
  const paper    = countdown <= 2 && countdown >= 0 && <p> paper </p>
  const scissors = countdown <= 1 && countdown >= 0 && <p> scissors </p>
  
  return (
    <div className="text"  id="countdown">
      {rock}
      {paper}
      {scissors}
    </div>
  )
}

export default Countdown