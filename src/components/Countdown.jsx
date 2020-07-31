import React from 'react'

const Countdown = ({countdown}) => {

  let countdownInText

  switch(countdown) {
    case 3:
      countdownInText = 'rock'
      break
    case 2:
      countdownInText = 'paper'
      break
    case 1:
      countdownInText = 'scissors'
      break
    default:
      countdownInText = ''
  }
  
  return (
      <h1 className="text"  id="countdown">{countdownInText}</h1>
  )
}

export default Countdown