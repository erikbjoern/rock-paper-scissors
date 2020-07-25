import React, { Component } from 'react'
import { Container, Image, Header, Button, Grid } from 'semantic-ui-react'

import Countdown from './components/Countdown'
import HotkeysSheet from './components/HotkeysSheet'
import { determineWinner } from './helpers/determineWinner'
import rightRock from './images/right-rock.png'
import rightPaper from './images/right-paper.png'
import rightScissors from './images/right-scissors.png'
import leftRock from './images/left-rock.png'
import leftPaper from './images/left-paper.png'
import leftScissors from './images/left-scissors.png'


class App extends Component {
  state = {
    leftChoice: "",
    rightChoice: "",
    weHaveAWinner: false,
    winner: "",
    countdown: 4,
    leftPlayerScore: 0,
    rightPlayerScore: 0,
    scoreLimit: 3,
  }

  tick = () => {
    const winner = determineWinner(this.state.leftChoice, this.state.rightChoice)
    const countdown = this.state.countdown

    if (countdown >= 2 && countdown < 4) {
      this.setState(({countdown}) => ({
        countdown: countdown - 1
      }))
    } else if (countdown < 2 && countdown >= 0) {
      this.setState(({countdown}) => ({ 
        weHaveAWinner: true,
        winner: winner,
        countdown: countdown - 1
      }))
    } else if (countdown < 0) {
      this.handleScore()
      this.setState({ 
        countdown: 3,
        weHaveAWinner: false,
        leftChoice: "",
        rightChoice: ""
      })
      this.determineFinalWinner()
      }
  }

  componentDidMount(){
    document.addEventListener('keydown', this.onKeyDownHandler)
  }

  startGame = () => {
    this.setState({
      countdown: 3,
      weHaveAWinner: false,
      winner: "",
      leftPlayerScore: 0,
      rightPlayerScore: 0
    })
    this.timer = setInterval(() => {
      this.tick()
    }, 1000)
  }

  onKeyDownHandler = e => {
    if(this.state.countdown > 0) {
      switch (e.keyCode) {
        case 49:
          this.setState({ leftChoice: "rock" })
          break
        case 50:
          this.setState({ leftChoice: "paper" })
          break
        case 51:
          this.setState({ leftChoice: "scissors" })
          break
        case 37:
          this.setState({ rightChoice: "rock" })
          break
        case 38:
          this.setState({ rightChoice: "paper" })
          break
        case 39:
          this.setState({ rightChoice: "scissors" })
          break
        default: break
      }
    }
  }

  handleScore = () => {
    const { winner, leftPlayerScore, rightPlayerScore } = this.state

    if (winner === 'Left player wins') {
      this.setState({ leftPlayerScore: leftPlayerScore + 1 })
    }
    if (winner === 'Right player wins') {
      this.setState({ rightPlayerScore: rightPlayerScore + 1 })
    }
  }
  
  determineFinalWinner = () => {
    const { rightPlayerScore, leftPlayerScore, scoreLimit } = this.state
    
    if (rightPlayerScore === scoreLimit || leftPlayerScore === scoreLimit) {
      this.setState({ 
        countdown: 4,
        weHaveAWinner: true,
        winner: `${rightPlayerScore > leftPlayerScore ? "Right" : "Left"} player wins it all`
      })
      clearInterval(this.timer)
    }
  }

  render() {
    let renderWinner, startButton, leftPlayer, rightPlayer, leftPlayerChoice, rightPlayerChoice

    if (this.state.leftChoice === 'rock') {
      leftPlayerChoice = <Image id="leftPlayerChoice" size='small' src={leftRock}/>
    } else if (this.state.leftChoice === 'paper') {
      leftPlayerChoice = <Image id="leftPlayerChoice" size='small' src={leftPaper}/>
    } else if (this.state.leftChoice === 'scissors') {
      leftPlayerChoice = <Image id="leftPlayerChoice" size='small' src={leftScissors}/>
    }
    
    if (this.state.rightChoice === 'rock') {
      rightPlayerChoice = <Image id="rightPlayerChoice" size='small' src={rightRock}/>
    } else if (this.state.rightChoice === 'paper') {
      rightPlayerChoice = <Image id="rightPlayerChoice" size='small' src={rightPaper}/>
    } else if (this.state.rightChoice === 'scissors') {
      rightPlayerChoice = <Image id="rightPlayerChoice" size='small' src={rightScissors}/>
    }

    if (this.state.weHaveAWinner === true) {
      renderWinner = <Header className="winnerText" as="h1" id="winner">{this.state.winner}!</Header>
      if (leftPlayerChoice) {
        leftPlayer = leftPlayerChoice
      } else {
        leftPlayer = <Image id="leftPlayerChoice" size='small' src={leftRock}/>
      }
      if (rightPlayerChoice) {
        rightPlayer = rightPlayerChoice
      } else {
        rightPlayer = <Image id="rightPlayerChoice" size='small' src={rightRock}/>
      }
    } else {
      leftPlayer   = <Image id="leftPlayer" size='small' src={leftRock}/>
      rightPlayer  = <Image id="rightPlayer" size='small' src={rightRock}/>
    }

    if (this.state.countdown === 4) {
      startButton = <Button id="start-game" className='Button' onClick={this.startGame}>Start!</Button>
    }

    return (
      <Container align="center">
        <Header as="h3" id="score-limit" style={{paddingTop: "30px", color: "#cdffcd"}}>
          First to {this.state.scoreLimit} wins!
        </Header>
        <Container style={{height: "90px", paddingTop: '2%'}}>
          {startButton}
          <Countdown countdown={this.state.countdown}/>
        </Container>
          {renderWinner}
        <Container className="playerContainer" style={{paddingTop: "15%"}}>
          {leftPlayer}
          {rightPlayer}
        </Container>
        <Grid fluid>
          <Grid.Row className="playerContainer">
          <Header className="score" as="h1" id="leftPlayerScore">
            {this.state.leftPlayerScore}
          </Header> 
          <Header className="score" as="h1" id="rightPlayerScore">
            {this.state.rightPlayerScore}
          </Header> 
          </Grid.Row>
        </Grid>
        <HotkeysSheet/>
      </Container>
    )
  }
}

export default App