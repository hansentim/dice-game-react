import React, { Component } from "react";
import "./App.css";

import DisplayScore from "./components/DisplayScore";
/* import DisplayResult from "./components/DisplayResult";
import DisplayWinner from "./components/DisplayWinner"; */

class App extends Component {
  constructor() {
    super();
    //Sätter state för användaren och datorn
    this.state = {
      user: "",
      computer: "",
      winner: "",
    };
  }
  //Skapa 2 x 3 t'rningar för användare och dator
  randomDices = () => {
    //rendera random nummer
    const userRollOne = Math.ceil(Math.random() * 6);
    const userRollTwo = Math.ceil(Math.random() * 6);
    const userRollThree = Math.ceil(Math.random() * 6);
    const userTotalSum = userRollOne + userRollTwo + userRollThree;

    const compRollOne = Math.ceil(Math.random() * 6);
    const compRollTwo = Math.ceil(Math.random() * 6);
    const compRollThree = Math.ceil(Math.random() * 6);

    const compTotalSum = compRollOne + compRollTwo + compRollThree;

    //skicka in resultat i state
    this.setState({
      //total score
      user: userTotalSum,
      computer: compTotalSum,
      //score per kast
      userFirstRoll: userRollOne,
      computerFirstRoll: compRollOne,

      userSecondRoll: userRollTwo,
      computerSecondRoll: compRollTwo,

      userThirdRoll: userRollThree,
      computerThirdRoll: compRollThree,
    });

    this.declareWinner();
  };

  //Funktion för att hitta vinnare/förlorare
  declareWinner = () => {
    setTimeout(() => {
      if (this.state.user > this.state.computer) {
        this.setState({
          winner: "You Won, YAY!",
        });
      } else if (this.state.user === this.state.computer) {
        this.setState({
          winner: "it's a tie, MEH!",
        });
      } else {
        this.setState({
          winner: "Computer won, you SUCK!",
        });
      }
    }, 250);
  };

  //skicka ut summa för varje kast och visa vinnare/förlorare
  render() {
    return (
      <div className="wrapper">
        <h1 className="game-title">
          Let's Play <i className="fas fa-dice"></i>
        </h1>
        <section className="scoreboard">
          <DisplayScore
            user={this.state.user}
            computer={this.state.computer}
            userFirstRoll={this.state.userFirstRoll}
            userSecondRoll={this.state.userSecondRoll}
            userThirdRoll={this.state.userThirdRoll}
            computerFirstRoll={this.state.computerFirstRoll}
            computerSecondRoll={this.state.computerSecondRoll}
            computerThirdRoll={this.state.computerThirdRoll}
          />
          <h2 id="winner">{this.state.winner}</h2>
          <button onClick={this.randomDices} className="btn">
            ROLL 3 DICE
          </button>
        </section>
      </div>
    );
  }
}

export default App;
