const compare = (lChoice, rChoice) => {
  if (rChoice === "" && lChoice !== "") {
    return 'Left'
  }

  switch(lChoice) {
    case rChoice:
      return 'Tie!'
    case "rock":
      return rChoice === "scissors" ? 'Left' : 'Right'
    case "paper":
      return rChoice === "rock" ? 'Left' : 'Right'
    case "scissors":
      return rChoice === "paper" ? 'Left' : 'Right'
    case "":
      return 'Right'
    default: 
      break
  }
}

export const determineWinner = (lChoice, rChoice) => (
  compare(lChoice, rChoice)
)