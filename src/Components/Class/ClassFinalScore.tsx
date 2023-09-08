import { Component } from "react";
import { scoreProps } from "./ClassApp";

type ClassFinalScoreProps = {
  parentScore: scoreProps;
};

export class ClassFinalScore extends Component<ClassFinalScoreProps> {
  render() {
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{this.props.parentScore.correct}</p>
          <hr />
          <p>
            {this.props.parentScore.correct + this.props.parentScore.incorrect}
          </p>
        </div>
      </div>
    );
  }
}
