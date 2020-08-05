import React, { Component } from "react";

import Countdown from "./components/Countdown";
import HotkeysSheet from "./components/HotkeysSheet";
import { determineWinner } from "./helpers/determineWinner";
import { hotkeyHandler } from "./helpers/hotkeyHandler";
import rightrock from "./images/right-rock.png";
import rightpaper from "./images/right-paper.png";
import rightscissors from "./images/right-scissors.png";
import leftrock from "./images/left-rock.png";
import leftpaper from "./images/left-paper.png";
import leftscissors from "./images/left-scissors.png";

class App extends Component {
  state = {
    leftChoice: "",
    rightChoice: "",
    weHaveAWinner: false,
    winner: "",
    countdown: 5,
    leftPlayerScore: 0,
    rightPlayerScore: 0,
    scoreLimit: 3,
  };

  tick = () => {
    const winner = determineWinner(
      this.state.leftChoice,
      this.state.rightChoice
    );
    const countdown = this.state.countdown;

    if (countdown >= 2 && countdown < 5) {
      this.setState(({ countdown }) => ({
        countdown: countdown - 1,
      }));
    } else if (countdown < 2 && countdown >= -1) {
      this.setState(({ countdown }) => ({
        weHaveAWinner: true,
        winner: winner,
        countdown: countdown - 1,
      }));
    } else if (countdown < -1) {
      this.handleScore();
      this.setState({
        countdown: 3,
        weHaveAWinner: false,
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
      countdown: 4,
      weHaveAWinner: false,
      winner: "",
      leftPlayerScore: 0,
      rightPlayerScore: 0,
    });
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  };

  handleScore = () => {
    const { winner, leftPlayerScore, rightPlayerScore } = this.state;

    if (winner === "Left player wins") {
      this.setState({ leftPlayerScore: leftPlayerScore + 1 });
    }
    if (winner === "Right player wins") {
      this.setState({ rightPlayerScore: rightPlayerScore + 1 });
    }
  };

  determineFinalWinner = () => {
    const { rightPlayerScore, leftPlayerScore, scoreLimit } = this.state;

    if (rightPlayerScore === scoreLimit || leftPlayerScore === scoreLimit) {
      this.setState({
        countdown: 5,
        weHaveAWinner: true,
        winner: `${
          rightPlayerScore > leftPlayerScore ? "Right" : "Left"
        } player wins it all`,
      });
      clearInterval(this.timer);
    }
  };

  render() {
    const { leftChoice, rightChoice, countdown } = this.state;
    let renderWinner, startButton, leftPlayer, rightPlayer;

    if (this.state.weHaveAWinner === true) {
      renderWinner = countdown < 0 && <h1 id="winner">{this.state.winner}!</h1>;

      if (leftChoice) {
        leftPlayer = (
          <img
            id="leftPlayerChoice"
            width="150px"
            height="150px"
            src={
              leftChoice === "rock"
                ? leftrock
                : leftChoice === "paper"
                ? leftpaper
                : leftscissors
            }
          />
        );
      } else {
        leftPlayer = (
          <div id="leftPlayerChoice">
            <p className="slow-left">too slow!</p>
            <img width="150px" height="150px" src={leftrock} />
          </div>
        );
      }
      if (rightChoice) {
        rightPlayer = (
          <img
            id="rightPlayerChoice"
            width="150px"
            height="150px"
            src={
              rightChoice === "rock"
                ? rightrock
                : rightChoice === "paper"
                ? rightpaper
                : rightscissors
            }
          />
        );
      } else {
        rightPlayer = (
          <div id="rightPlayerChoice">
            <p className="slow-right">too slow!</p>
            <img width="150px" height="150px" src={rightrock} />
          </div>
        );
      }
    } else {
      leftPlayer = (
        <div id="leftPlayer">
          {!leftChoice && countdown < 4 && (
            <p className="make-a-choice">make a choice!</p>
          )}
          <img width="150px" height="150px" src={leftrock} />
        </div>
      );
      rightPlayer = (
        <div id="rightPlayer">
          {!rightChoice && countdown < 4 && (
            <p className="make-a-choice">make a choice!</p>
          )}
          <img className="bouncingHand" width="150px" height="150px" src={rightrock} />
        </div>
      );
    }

    if (countdown === 5) {
      startButton = (
        <button
          id="start-game"
          className="startButton"
          onClick={this.startGame}
        >
          Start!
        </button>
      );
    }

    return (
      <div className="mainContainer">
        <h1 id="scoreLimit" style={{ paddingTop: "30px", color: "#cdffcd" }}>
          First to {this.state.scoreLimit} wins!
        </h1>
        <div style={{ height: "200px", paddingTop: "2%" }}>
          {startButton}
          <Countdown countdown={countdown} />
          {renderWinner}
        </div>
        <div className="playerContainer">
          {leftPlayer}
          {rightPlayer}
        </div>
        <div className="scoreContainer">
          <div className="score" id="leftPlayerScore">
            {this.state.leftPlayerScore}
          </div>
          <div className="score" id="rightPlayerScore">
            {this.state.rightPlayerScore}
          </div>
        </div>
        <HotkeysSheet />
      </div>
    );
  }
}

export default App;
