const compare = (LeftChoice, rightChoice) => {
  if (rightChoice === "" && LeftChoice !== "") {
    return 'Left'
  }

  switch(LeftChoice) {
    case rightChoice:
      return 'Tie!'
    case "rock":
      return rightChoice === "scissors" ? 'Left' : 'Right'
    case "paper":
      return rightChoice === "rock" ? 'Left' : 'Right'
    case "scissors":
      return rightChoice === "paper" ? 'Left' : 'Right'
    case "":
      return 'Right'
    default: 
      break
  }
}

export const determineWinner = (LeftChoice, rightChoice) => (
  compare(LeftChoice, rightChoice)
)