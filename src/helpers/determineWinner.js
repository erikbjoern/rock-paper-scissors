const compare = (leftChoice, rightChoice) => {
  switch(leftChoice) {
    case rightChoice:
      return 'Tie'
    case "rock":
      return rightChoice === "scissors" ? 'Left player wins' : 'Right player wins'
    case "paper":
      return rightChoice === "rock" ? 'Left player wins' : 'Right player wins'
    case "scissors":
      return rightChoice === "paper" ? 'Left player wins' : 'Right player wins'
    default: 
      break
  }
}

export const determineWinner = (leftChoice, rightChoice) => (
  compare(leftChoice, rightChoice)
)