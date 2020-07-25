const compare = (leftChoice, rightChoice) => {
  if (rightChoice === "") {
    return 'Left player wins'
  }

  switch(leftChoice) {
    case rightChoice:
      return 'Tie'
    case "rock":
      return rightChoice === "scissors" ? 'Left player wins' : 'Right player wins'
    case "paper":
      return rightChoice === "rock" ? 'Left player wins' : 'Right player wins'
    case "scissors":
      return rightChoice === "paper" ? 'Left player wins' : 'Right player wins'
    case "":
      return 'Right player wins'
    default: 
      break
  }
}

export const determineWinner = (leftChoice, rightChoice) => (
  compare(leftChoice, rightChoice)
)