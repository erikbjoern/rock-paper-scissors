export const hotkeyHandler = (keyCode, countdown) => {
  if(countdown > 0) {
    switch (keyCode) {
      case 49:
        return ({ lChoice: "rock" })
      case 50:
        return ({ lChoice: "paper" })      
      case 51:
        return ({ lChoice: "scissors" })      
      case 37:
        return ({ rChoice: "rock" })      
      case 38:
        return ({ rChoice: "paper" })      
      case 39:
        return ({ rChoice: "scissors" })            
      default: break
    }
  }
}