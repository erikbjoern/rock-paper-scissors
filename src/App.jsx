import React, { Component } from "react";
import Countdown from "./components/Countdown";
import HotkeysSheet from "./components/HotkeysSheet";
import Hand from './components/Hand'
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

  tick = () => {
    const countdown = this.state.countdown;
    this.setState({ countdown: countdown - 1 });
    this.gameHandler(countdown)
  };

  gameHandler = (countdown) => {
    if (countdown === 0) {
        this.handleScore();
    }
    if (countdown === -3) {
      this.setState({
        winner: "",
        countdown: 3,
        leftChoice: "",
        rightChoice: "",
      });
      this.determineFinalWinner();
    }
  };

  keydownHandler = (e) => {
    this.setState(hotkeyHandler(e.keyCode, this.state.countdown));
  };

  componentDidMount() {
    document.addEventListener("keydown", (event) => {
      this.keydownHandler(event);
    });
  }

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
    const { leftChoice, rightChoice, countdown } = this.state;

    const startButton = countdown === 7 && (
      <button id="start-game" className="startButton" onClick={this.startGame}>
        Start!
      </button>
    );

    const winner = (countdown === 7 ||
      (countdown <= -1 && countdown >= -2)) && (
      <h1 id="winner">{this.state.winner}</h1>
    );

    const makeAChoice =
      countdown < 1 ? (
        <p className="slow">too slow!</p>
      ) : (
        countdown < 5 && <p className="make-a-choice">make a choice!</p>
      );

    return (
      <div className="mainContainer">
        <div className="headerContainer">
          <h1 id="scoreLimit">First to {this.state.scoreLimit} wins!</h1>
          {startButton}
          <Countdown countdown={countdown} />
          {winner}
        </div>
        <div className="playerContainer">
          <div className="leftPlayer">
            {!leftChoice && makeAChoice}
            <Hand 
              side="Left"
              choice={leftChoice}
              countdown={countdown}
              winner={winner}
            />
          </div>
          <div className="rightPlayer">
            {!rightChoice && makeAChoice}
            <Hand 
              side="Right"
              choice={rightChoice}
              countdown={countdown}
            />
          </div>
        </div>
        <div className="scoreContainer">
          <div className="score" id="leftScore">
            {this.state.leftScore}
          </div>
          <div className="score" id="rightScore">
            {this.state.rightScore}
          </div>
        </div>
        <HotkeysSheet />
      </div>
    );
  }
}

export default App;
