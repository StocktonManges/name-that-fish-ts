import { Component } from "react";
import "./styles/score-board.css";
import { scoreProps } from "./ClassApp";

export class ClassScoreBoard extends Component<{
  parentScore: scoreProps;
  answersLeft: string[];
}> {
  render() {
    const { correct, incorrect } = this.props.parentScore;
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrect}</div>
        <div id="choices-left">
          {this.props.answersLeft.map((fish) => (
            <div key={fish} className="choice">
              {fish}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correct}</div>
      </div>
    );
  }
}
