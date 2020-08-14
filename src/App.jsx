import React, { Component } from "react";
import Countdown from "./components/Countdown";
import HotkeysSheet from "./components/HotkeysSheet";
import Players from './components/Players'
import { determineWinner } from "./helpers/determineWinner";
import { hotkeyHandler } from "./helpers/hotkeyHandler";

class App extends Component {
  state = {
    leftChoice: "",
    rightChoice: "",
    winner: "",
    countdown: 7,
    leftScore: 0,
    rightScore: 0,
    scoreLimit: 3,
  };

  componentDidMount() {
    document.addEventListener("keydown", (event) => {
      this.keydownHandler(event);
    });
  }

  keydownHandler = (e) => {
    this.setState(hotkeyHandler(e.keyCode, this.state.countdown));
  };
  
  startGame = () => {
    this.setState({
      countdown: 6,
      winner: "",
      leftScore: 0,
      rightScore: 0,
    });
    this.timer = setInterval(() => {
      this.tick();
    }, 750);
  };
  
  tick = () => {
    const countdown = this.state.countdown;
    this.setState({ countdown: countdown - 1 });
    this.gameHandler(countdown)
  };
  
  gameHandler = (countdown) => {
    switch (countdown) {
      case 0: 
        this.handleScore()
        break
      case -2: 
        this.determineFinalWinner();
        break
      case -3:
        this.setState({
          winner: "",
          countdown: 3,
          leftChoice: "",
          rightChoice: "",
        });
        break
      default:
        break
    }
  };

  handleScore = () => {
    const { leftChoice, rightChoice, leftScore, rightScore } = this.state;
    const winner = determineWinner(leftChoice, rightChoice);

    this.setState({
      winner: winner === "Tie!" ? winner : winner + "player wins!",
      leftScore: winner === "Left" ? leftScore + 1 : leftScore,
      rightScore: winner === "Right" ? rightScore + 1 : rightScore
    });
  };
  
  determineFinalWinner = () => {
    const { rightScore, leftScore, scoreLimit } = this.state;

    if (rightScore === scoreLimit || leftScore === scoreLimit) {
      this.setState({
        countdown: 7,
        winner: `${
          rightScore > leftScore ? "Right" : "Left"
        } player wins it all!`,
      });
      clearInterval(this.timer);
    }
  };

  render() {
    const { countdown, leftChoice, rightChoice, leftScore, rightScore } = this.state;

    const startButton = countdown === 7 && (
      <button id="start-game" className="startButton" onClick={this.startGame}>
        Start!
      </button>
    );

    const winner = (countdown === 7 ||
      (countdown <= -1 && countdown >= -2)) && (
      <h1 id="winner">{this.state.winner}</h1>
    );

    return (
      <div className="mainContainer">
        <div className="headerContainer">
          <h1 id="scoreLimit" className="secondaryText">First to {this.state.scoreLimit} wins!</h1>
          {startButton}
          <Countdown countdown={countdown} />
          {winner}
        </div>
        <Players
          countdown={countdown}
          rightChoice={rightChoice}
          leftChoice={leftChoice}
        />
        <div className="score">
          <div id="leftScore">
            {leftScore}
          </div>
          -
          <div id="rightScore">
            {rightScore}
          </div>
      </div>
        <HotkeysSheet />
      </div>
    );
  }
}

export default App;
