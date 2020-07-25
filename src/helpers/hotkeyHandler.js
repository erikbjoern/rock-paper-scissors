export const hotkeyHandler = (keyCode, countdown) => {
  if(countdown > 0) {
    switch (keyCode) {
      case 49:
        return ({ leftChoice: "rock" })
      case 50:
        return ({ leftChoice: "paper" })      
      case 51:
        return ({ leftChoice: "scissors" })      
      case 37:
        return ({ rightChoice: "rock" })      
      case 38:
        return ({ rightChoice: "paper" })      
      case 39:
        return ({ rightChoice: "scissors" })            
      default: break
    }
  }
}