import React from "react";

//komponents för att visa spelaren och datorns slag och totala poängen
function DisplayScore(props) {
  console.log(props);
  return (
    <div className="totalscore">
      <div className="userDices">
        <h2>You rolled: </h2>
        <h3>First Roll : {props.userFirstRoll}</h3>
        <h3>Second Roll : {props.userSecondRoll}</h3>
        <h3>Third Roll : {props.userThirdRoll}</h3>
      </div>

      <div className="computerDices">
        <h2>Computer rolled: </h2>
        <h3>First Roll : {props.computerFirstRoll}</h3>
        <h3>Second Roll : {props.computerSecondRoll}</h3>
        <h3>Third Roll : {props.computerThirdRoll}</h3>
      </div>
      <h2>Your total score : {props.user}</h2>
      <h2>Computers total score : {props.computer}</h2>
    </div>
  );
}

export default DisplayScore;
