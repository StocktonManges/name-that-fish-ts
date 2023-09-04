import { Component } from "react";
import { scoreProps } from "./ClassApp";

export class ClassFinalScore extends Component<{ parentScore: scoreProps }> {
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
