import React, { Component } from "react";
import { Container, Image, Header, Button, Grid } from "semantic-ui-react";

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
    countdown: 4,
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

    if (countdown >= 2 && countdown < 4) {
      this.setState(({ countdown }) => ({
        countdown: countdown - 1,
      }));
    } else if (countdown < 2 && countdown >= 0) {
      this.setState(({ countdown }) => ({
        weHaveAWinner: true,
        winner: winner,
        countdown: countdown - 1,
      }));
    } else if (countdown < 0) {
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
      countdown: 3,
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
        countdown: 4,
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
      renderWinner = (
        <Header className="winnerText" as="h1" id="winner">
          {this.state.winner}!
        </Header>
      );

      if (leftChoice) {
        leftPlayer = (
          <Image
            id="leftPlayerChoice"
            size="small"
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
            <Image size="small" src={leftrock} />
          </div>
        );
      }
      if (rightChoice) {
        rightPlayer = (
          <Image
            id="rightPlayerChoice"
            size="small"
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
            <Image size="small" src={rightrock} />
          </div>
        );
      }
    } else {
      leftPlayer = (
        <div id="leftPlayer">
          {!leftChoice && countdown < 4 && (
            <p className="make-a-choice">make a choice!</p>
          )}
          <Image size="small" src={leftrock} />
        </div>
      );
      rightPlayer = (
        <div id="leftPlayer">
          {!rightChoice && countdown < 4 && (
            <p className="make-a-choice">make a choice!</p>
          )}
          <Image id="rightPlayer" size="small" src={rightrock} />
        </div>
      );
    }

    if (countdown === 4) {
      startButton = (
        <Button id="start-game" className="Button" onClick={this.startGame}>
          Start!
        </Button>
      );
    }

    return (
      <Container align="center">
        <Header
          as="h3"
          id="score-limit"
          style={{ paddingTop: "30px", color: "#cdffcd" }}
        >
          First to {this.state.scoreLimit} wins!
        </Header>
        <Container style={{ height: "90px", paddingTop: "2%" }}>
          {startButton}
          <Countdown countdown={countdown} />
        </Container>
        {renderWinner}
        <Container className="playerContainer" style={{ paddingTop: "15%" }}>
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
        <HotkeysSheet />
      </Container>
    );
  }
}

export default App;
