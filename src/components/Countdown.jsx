import React from 'react'
import { Header } from 'semantic-ui-react'

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
      <Header className="text" as="h1" id="countdown">{countdownInText}</Header>
  )
}

export default Countdown