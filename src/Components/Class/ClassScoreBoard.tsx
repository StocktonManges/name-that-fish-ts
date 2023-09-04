import { Component } from "react";
import "./styles/score-board.css";
import { fishProps, scoreProps } from "./ClassApp";

export class ClassScoreBoard extends Component<{
  parentScore: scoreProps;
  fishes: fishProps;
}> {
  render() {
    const { correct, incorrect } = this.props.parentScore;
    const totalGuesses = correct + incorrect;
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrect}</div>
        <div id="choices-left">
          {this.props.fishes.map((answer, index) => {
            if (index >= totalGuesses) {
              return (
                <div key={answer.name} className="choice">
                  {answer.name}
                </div>
              );
            }
          })}
        </div>
        <div>Correct ✅: {correct}</div>
      </div>
    );
  }
}
