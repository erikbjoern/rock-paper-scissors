import React, { Component } from "react";
import Countdown from "./components/Countdown";
import HotkeysSheet from "./components/HotkeysSheet";
import Players from "./components/Players";
import Score from "./components/Score";
import { determineWinner } from "./helpers/determineWinner";
import { hotkeyHandler } from "./helpers/hotkeyHandler";

class App extends Component {
  state = {
    lChoice: "",
    rChoice: "",
    winner: "",
    countdown: 8,
    lScore: 0,
    rScore: 0,
    lSetScore: 0,
    rSetScore: 0,
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
      lScore: 0,
      rScore: 0,
    });
    this.timer = setInterval(() => {
      this.tick();
    }, 750);
  };

  tick = () => {
    const countdown = this.state.countdown;
    this.setState({ countdown: countdown - 1 });
    this.gameHandler(countdown);
  };

  gameHandler = (countdown) => {
    switch (countdown) {
      case 0:
        this.handleScore();
        break;
      case -2:
        this.determineFinalWinner();
        break;
      case -3:
        this.setState({
          winner: "",
          countdown: 3,
          lChoice: "",
          rChoice: "",
        });
        break;
      default:
        break;
    }
  };

  handleScore = () => {
    const { lChoice, rChoice, lScore, rScore } = this.state;
    const winner = determineWinner(lChoice, rChoice);

    this.setState({
      winner: winner === "Tie!" ? winner : winner + " player wins!",
      lScore: winner === "Left" ? lScore + 1 : lScore,
      rScore: winner === "Right" ? rScore + 1 : rScore,
    });
  };

  determineFinalWinner = () => {
    const { lScore, rScore, lSetScore, rSetScore, scoreLimit } = this.state;

    if (lScore === scoreLimit || rScore === scoreLimit) {
      const finalWinner = rScore > lScore ? "Right player" : "Left player";

      this.setState({
        countdown: 7,
        winner: `${finalWinner} wins it all!`,
        lSetScore: finalWinner === "Left player" ? lSetScore + 1 : lSetScore,
        rSetScore: finalWinner === "Right player" ? rSetScore + 1 : rSetScore,
      });
      clearInterval(this.timer);
    }
  };

  render() {
    const { countdown, lChoice, rChoice, lScore, rScore, lSetScore, rSetScore } = this.state;

    const startButton = countdown >= 7 && (
      <button id="start-btn" data-cy="start-btn" onClick={this.startGame}>
        {countdown === 8 ? "Start!" : "Play again!"}
      </button>
    );

    const winner = (countdown === 7 ||
      (countdown <= -1 && countdown >= -2)) && (
      <p id="winner" data-cy="winner">
        {this.state.winner}
      </p>
    );

    return (
      <div className="main-container">
        <div className="header-container">
          <h1 className="secondary-text" data-cy="score-limit">
            First to {this.state.scoreLimit} wins!
          </h1>
          {startButton}
          <Countdown countdown={countdown} />
          {winner}
        </div>
        <Players countdown={countdown} rChoice={rChoice} lChoice={lChoice} />
        <Score lScore={lScore} rScore={rScore} lSetScore={lSetScore} rSetScore={rSetScore} />
        <HotkeysSheet />
      </div>
    );
  }
}

export default App;
