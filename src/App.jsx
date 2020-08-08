import React, { Component } from "react";
import Countdown from "./components/Countdown";
import HotkeysSheet from "./components/HotkeysSheet";
import { determineHand } from "./helpers/determineHand";
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
    winner: "",
    countdown: 7,
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

    if (countdown >= 2 && countdown < 7) {
      this.setState(({ countdown }) => ({
        countdown: countdown - 1,
      }));
    } else if (countdown <= 1 && countdown >= -2) {
      this.setState(({ countdown }) => ({
        winner: winner,
        countdown: countdown - 1,
      }));
    } else if (countdown <= -3) {
      this.handleScore();
      this.setState({
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
      leftPlayerScore: 0,
      rightPlayerScore: 0,
    });
    this.timer = setInterval(() => {
      this.tick();
    }, 750);
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
        countdown: 7,
        winner: `${
          rightPlayerScore > leftPlayerScore ? "Right" : "Left"
        } player wins it all`,
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

    const winner = countdown <= -1 && countdown >= -2 && (
      <h1 id="winner">{this.state.winner}!</h1>
    );

    const hand = (side) => {
      const hands = [
        rightrock,
        rightpaper,
        rightscissors,
        leftrock,
        leftpaper,
        leftscissors,
      ];

      const revealChoice = countdown <= 0 && countdown >= -2

      return determineHand(side, hands, rightChoice, leftChoice, revealChoice);
    };

    const leftPlayer = (
      <img
        className={
          ((countdown < 5 && countdown > 0) || countdown === -3) &&
          "bouncingLeft"
        }
        width="150px"
        height="150px"
        src={hand("left")}
        alt="left player's choice"
      />
    );

    const rightPlayer = (
      <img
        id="rightPlayer"
        className={
          ((countdown < 5 && countdown > 0) || countdown === -3) &&
          "bouncingRight"
        }
        width="150px"
        height="150px"
        src={hand("right")}
        alt="right player's choice"
      />
    );

    const makeAChoice = countdown < 1 ? (
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
            {leftPlayer}
          </div>
          <div className="rightPlayer">
            {!rightChoice && makeAChoice}
            {rightPlayer}
          </div>
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
