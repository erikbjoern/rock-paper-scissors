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
    leftScore: 0,
    rightScore: 0,
    scoreLimit: 3,
  };

  tick = () => {
    const countdown = this.state.countdown;
    const tickOne = () => {
      this.setState({ countdown: countdown - 1 });
    };

    if (countdown <= 6 && countdown >= 1) {
      tickOne();
    } else if (countdown === 0) {
      this.handleScore();
      tickOne();
    } else if (countdown <= -1 && countdown >= -2) {
      tickOne();
    } else if (countdown <= -3) {
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

    const winner = (countdown === 7 || (countdown <= -1 && countdown >= -2)) && (
      <h1 id="winner">{this.state.winner}</h1>
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

      const revealChoice = countdown <= 0 && countdown >= -2;

      return determineHand(side, hands, rightChoice, leftChoice, revealChoice);
    };

    const leftPlayer = (
      <img
        className={
          ((countdown < 5 && countdown > 0) || (countdown === -3 && winner === "")) &&
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
          ((countdown < 5 && countdown > 0) || (countdown === -3 && winner === "")) &&
          "bouncingRight"
        }
        width="150px"
        height="150px"
        src={hand("right")}
        alt="right player's choice"
      />
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
            {leftPlayer}
          </div>
          <div className="rightPlayer">
            {!rightChoice && makeAChoice}
            {rightPlayer}
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
